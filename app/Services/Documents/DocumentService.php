<?php

namespace App\Services\Documents;

use App\Models\Documents\Document;
use App\Models\Documents\DocumentItem;
use App\Models\Documents\DocumentItemTax;
use App\Models\Financial\Currency;
use App\Models\Inventory\Contact;
use App\Traits\ApiResponse;
use App\Traits\Financial;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DocumentService
{
    use ApiResponse;
    use Financial;

    /**
     * @param $request
     * @return array
     */
    public function index($request): array
    {
        $type = (isset($request->type)) ? $request->type : 'NO';
        $options = $request->options;
        $pages = isset($options->page) ? (int)$options->page : 1;
        $row_data = isset($options->itemsPerPage) ? (int)$options->itemsPerPage : 10;
        $sorts = isset($options->sortBy[0]) ? (string)$options->sortBy[0] : "document_number";
        $order = isset($options->sortDesc[0]) ? (string)$options->sortDesc[0] : "asc";
        $offset = ($pages - 1) * $row_data;

        $result = array();
        $query = Document::selectRaw(
            " documents.*,
              CONVERT(issued_at, date) as issued_at,
              CONVERT(due_at, date) as due_at"
        )->where('type', $type);

        $result["total"] = $query->count();

        $all_data = $query->orderBy($sorts, $order)
            ->offset($offset)
            ->limit($row_data)
            ->get();

        $result['form'] = $this->getForm($type);
        return array_merge($result, [
            "rows" => $all_data,
        ]);
    }

    /**
     * @param $type
     * @return array
     */
    public function getForm($type): array
    {
        $form = $this->form('documents');
        $form['deposit_info'] = false;
        $form['shipping_info'] = false;
        $form['withholding_info'] = false;
        $form['type'] = $type;
        $form['issued_at'] = Carbon::now()->format('Y-m-d');
        $form['due_at'] = Carbon::now()->addDay(30)->format('Y-m-d');
        $form['payment_term_id'] = 1;
        $form['discount_type'] = 'Percent';
        $form['withholding_type'] = 'Percent';
        $form['tax_details'] = [];
        $form['items'] = [];
        $form['shipping_fee'] = 0;
        $form['category_id'] = 0;
        $form['parent_id'] = 0;
        $form['document_number'] = $this->generateDocNum(date('Y-m-d H:i:s'), $type);
        $form['temp_id'] = mt_rand(100000, 999999999999);

        return $form;
    }

    /**
     * @param $request
     * @param $type
     * @param null $id
     * @return array
     */
    public function formData($request, $type, $id = null): array
    {
        $request->mergeIfMissing([
            'company_id' => session('company_id'),
        ]);

        $currency = Currency::where('code', $request->default_currency_code)->first();

        $contact = Contact::where('id', $request->contact_id)->first();

        $request->request->remove('tags');
        $request->request->remove('items');
        $request->request->remove('tax_details');
        $request->merge([
            'currency_code' => $request->default_currency_code,
            'currency_rate' => $currency->rate,
            'contact_name' => $contact->name,
            'contact_email' => $contact->email,
            'contact_tax_number' => $contact->tax_number,
            'contact_phone' => $contact->phone,
            'contact_zip_code' => $contact->zip_code,
            'contact_city' => $contact->city,
        ]);
        $request->request->remove('default_currency_code');
        $request->request->remove('default_currency_symbol');
        $data = $request->all();


        if ($type == 'store') {
            $data['created_by'] = $request->user()->id;
            $data['document_number'] = $this->generateDocNum(date('Y-m-d H:i:s'), $request->type);
            $data['created_at'] = Carbon::now();
            $data['status'] = 'open';
        } else {
            $data['created_at'] = Carbon::parse($request->created_at);
            $data['updated_at'] = Carbon::now();
        }

        return $data;
    }

    /**
     * @param $sysDate
     * @param $alias
     *
     * @return string
     */
    protected function generateDocNum($sysDate, $alias): string
    {
        $alias = Str::limit($alias, 2);

        $data_date = strtotime($sysDate);
        $year_val = date('y', $data_date);
        $month = date('m', $data_date);

        $day_val = date('j', $data_date);

        if ((int)$day_val === 1) {
            $document = Str::upper($alias) . '-' . sprintf('%05s', '1');
            $check_document = Document::where('document_number', '=', $document)->first();
            if (!$check_document) {
                return Str::upper($alias) . '-' . (int)$year_val . $month . sprintf('%05s', '1');
            } else {
                //SQ-220100001
                return $this->itemCode($data_date, $alias, $year_val, $month);
            }
        }
        return $this->itemCode($data_date, $alias, $year_val, $month);
    }

    /**
     * @param $data_date
     * @param $alias
     * @param $year_val
     * @param $month
     * @return string
     */
    protected function itemCode($data_date, $alias, $year_val, $month): string
    {
        $full_year = date('Y', $data_date);
        $end_date = date('t', $data_date);

        $first_date = "${full_year}-${month}-01";
        $second_date = "${full_year}-${month}-${end_date}";

        $doc_num = Document::selectRaw('document_number as code')
            ->whereBetween(DB::raw('CONVERT(created_at, date)'), [$first_date, $second_date])
            ->orderBy('code', 'DESC')
            ->first();

        $number = empty($doc_num) ? '0000000000' : $doc_num->code;
        $clear_doc_num = (int)substr($number, 7, 12);
        $number = $clear_doc_num + 1;

        return Str::upper($alias) . '-' . (int)$year_val . $month . sprintf('%05s', $number);
    }

    /**
     * @param $items
     * @param $document
     * @param $tax_details
     * @return void
     */
    public function processItems($items, $document, $tax_details)
    {
        foreach ($items as $item) {
            if (array_key_exists('id', $item)) {
                DocumentItem::where('id', $item['id'])
                    ->update($this->detailsForm($document, $item, 'update'));
                $item_detail = DocumentItem::find($item['id']);
            } else {
                $item_detail = DocumentItem::create($this->detailsForm($document, $item, 'store'));
            }
            // process tax details
            foreach ($tax_details as $tax_detail) {
                $this->processItemTax($document, $tax_detail, $item_detail);
            }
        }
    }

    /**
     * @param $document
     * @param $item
     * @param $type
     * @return array
     */
    protected function detailsForm($document, $item, $type): array
    {
        $form = [
            'company_id' => session('company_id'),
            'type' => $document->type,
            'document_id' => $document->id,
            'item_id' => $item['item_id'],
            'name' => $item['name'],
            'description' => $item['description'],
            'sku' => $item['sku'],
            'quantity' => $item['quantity'],
            'price' => $item['price'],
            'unit' => $item['unit'],
            'tax_name' => $item['tax_name'],
            'tax' => (array_key_exists('tax_name', $item)) ? $this->getTaxIdByName($item['tax_name']) : 0,
            'discount_rate' => (array_key_exists('discount_rate', $item)) ? $item['discount_rate'] : 0,
            'total' => $item['total'],
        ];

        $merge = [];
        if ($type == 'store') {
            $merge['created_by'] = auth()->user()->id;
            $form = array_merge($form, $merge);
        }

        return $form;
    }

    /**
     * @param $document
     * @param $tax
     * @param $item_detail
     * @return void
     */
    public function processItemTax($document, $tax, $item_detail)
    {
        if (count($tax) > 0) {
            DocumentItemTax::updateOrCreate(
                [
                    'document_id' => $document->id,
                    'document_item_id' => $item_detail->id,
                ],
                [
                    'company_id' => session('company_id'),
                    'type' => $document->type,
                    'document_id' => $document->id,
                    'document_item_id' => $item_detail->id,
                    'tax_id' => $this->getTaxIdByName($tax['name']),
                    'name' => $tax['name'],
                    'amount' => $tax['amount']
                ]
            );
        }
    }
}