<?php

namespace App\Http\Controllers\Transactions;

use App\Http\Controllers\Controller;
use App\Http\Requests\Transaction\StoreTransactionRequest;
use App\Services\Transactions\TransactionService;
use IFRS\Models\Transaction;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TransactionController extends Controller
{
    public TransactionService $service;

    /**
     * MasterUserController constructor.
     *
     * @param TransactionService $service
     */
    public function __construct(TransactionService $service)
    {
        $this->service = $service;
        //    $this->middleware(['direct_permission:Roles-index'])->only(['index', 'show', 'permissionRole']);
        //    $this->middleware(['direct_permission:Roles-store'])->only(['store', 'storePermissionRole']);
        //    $this->middleware(['direct_permission:Roles-edits'])->only('update');
        //    $this->middleware(['direct_permission:Roles-erase'])->only('destroy');
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        try {
            return $this->success($this->service->index($request));
        } catch (\Exception $exception) {
            return $this->error($exception->getMessage(), 422, [
                $exception->getTrace(),
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreTransactionRequest $request
     * @return JsonResponse
     *
     * @throws \Throwable
     */
    public function store(StoreTransactionRequest $request): JsonResponse
    {
        $type = $request->type;
        $model = $this->service->mappingTable($type);
        $items = collect($request->line_items);
        $tax_details = collect($request->tax_details);
        $sales_persons = collect($request->sales_person);
        $bank_account_id = ($request->transaction_type == 'RC') ? $request->account_id['id']: 0;

        DB::beginTransaction();
        try {
            if (empty($request->main_account_amount)) {
                throw new \Exception('Transactions must have amount', 1);
            }
            // return $this->error('', 422, $this->service->formData($request, 'store'));
            $document = $model::create($this->service->formData($request, 'store'));

            if ($document->parent_id !== 0) {
                $doc = $model::find($document->parent_id);
                if ($doc) {
                    $doc->status = 'closed';
                    $doc->save();
                }
            }

            $this->service->processItems($items, $document, $tax_details, $sales_persons, $bank_account_id);

            $this->service->processSalesPerson($sales_persons, $document);

            DB::commit();

            return $this->success([
                'id' => $document->id,
                'status' => 'update',
                'type' => $request->type,
            ], 'Data inserted!');
        } catch (\Exception $exception) {
            DB::rollBack();

            return $this->error($exception->getMessage(), 422, [
                'errors' => true,
                'Trace' => $exception->getTrace(),
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function show(Request $request, int $id): JsonResponse
    {
        try {
            $type = $request->type;
            $copy_from_id = $request->copyFromId;

            if (isset($copy_from_id)) {
                if (intval($copy_from_id) != 0) {
                    $id = $copy_from_id;
                }
            }
            $model = $this->service->mappingTable($type);
            $data = $model::where('id', $id)
                ->with(['entity', 'lineItems.appliedVats', 'lineItems.vat', 'contact', 'salesPerson', 'taxDetails'])
                ->first();

            return $this->success([
                'data' => $data,
                'form' => $this->service->getForm(($data) ? $data->type : $type),
                'count' => ($data) ? 1 : 0,
                'action' => ($id != 0) ? $this->service->mappingAction($type, $id) : [],
                'audits' => ($id != 0) ? $data->audits()->with('user')->get() : [],
            ]);
        } catch (\Exception $exception) {
            return $this->error($exception->getMessage(), 422, [
                'trace' => $exception->getTrace(),
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param StoreTransactionRequest $request
     * @param int $id
     * @return JsonResponse
     *
     * @throws \Throwable
     */
    public function update(StoreTransactionRequest $request, int $id): JsonResponse
    {
        $type = $request->transaction_type;
        $model = $this->service->mappingTable($type);
        $items = collect($request->line_items);
        $tax_details = collect($request->tax_details);
        $sales_persons = collect($request->sales_person);
        $bank_account_id = ($request->transaction_type == 'RC') ? $request->account_id['id']: 0;

        try {
            // Document::where("id", "=", $id)->update($this->service->formData($request, 'update'));
            $document = $model::find($id);
            $forms = collect($this->service->formData($request, 'update'));
            //return $this->error('', 422, [$forms]);
            foreach ($forms as $index => $form) {
                $document->$index = $form;
            }
            $document->save();

            $this->service->processItems($items, $document, $tax_details, $sales_persons, $bank_account_id);

            $this->service->processSalesPerson($sales_persons, $document);

            DB::commit();

            return $this->success([
                'id' => $document->id,
                'status' => 'update',
                'type' => $request->type,
            ], 'Data updated!');
        } catch (\Exception $exception) {
            return $this->error($exception->getMessage(), 422, [
                'errors' => true,
                'Trace' => $exception->getTrace(),
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function destroy(Request $request, int $id): JsonResponse
    {
        $type = $request->type;
        $model = $this->service->mappingTable($type);
        $document = Transaction::find($id);
        if ($document) {
            $document->delete();

            return $this->success([
                'errors' => false,
            ], 'Row deleted!');
        }

        return $this->error('Row not found', 422, [
            'errors' => true,
        ]);
    }

    /**
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function getLedger(Request $request, $id): JsonResponse
    {
        $transaction = Transaction::with(['ledgers.postAccount', 'ledgers.folioAccount', 'ledgers.lineItem'])
            ->find($id);

        return $this->success([
            'data' => $transaction->ledgers
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getInvoice(Request $request): JsonResponse
    {
        $payment = $request->type;
        $contact = $request->contact;

        $type = '';
        if ($payment == 'RC') {
            $type = 'IN';
        }

        if ($payment == 'PY') {
            $type = 'BL';
        }

        $invoice = DB::table('transactions')
            ->where('transaction_type', $type)
            ->where('contact_id', $contact)
            ->select(
                DB::raw("CONCAT(narration, ' No Invoice: ', transaction_no) as narration"),
                DB::raw('CAST(due_date as DATE) as service_date'),
                'main_account_amount as sub_total'
            )
            ->get();

        return $this->success([
            'data' => $invoice
        ]);
    }
}
