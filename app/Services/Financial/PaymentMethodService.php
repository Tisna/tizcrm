<?php

namespace App\Services\Financial;

use App\Models\Financial\PaymentMethod;

class PaymentMethodService
{
    /**
     * @param $request
     * @return array
     */
    public function index($request): array
    {
        $options = $request->options;
        $pages = isset($options->page) ? (int)$options->page : 1;
        $row_data = isset($options->itemsPerPage) ? (int)$options->itemsPerPage : 1000;
        $sorts = isset($options->sortBy[0]) ? (string)$options->sortBy[0] : "name";
        $order = isset($options->sortDesc[0]) ? (string)$options->sortDesc[0] : "asc";
        $offset = ($pages - 1) * $row_data;

        $result = array();
        $query = PaymentMethod::select('*');

        $result["total"] = $query->count();

        $all_data = $query->orderBy($sorts, $order)
            ->offset($offset)
            ->limit($row_data)
            ->get();

        $arr_rows = PaymentMethod::pluck('name');

        return array_merge($result, [
            "rows" => $all_data,
            "simple" => $arr_rows
        ]);
    }

    /**
     * @param $form
     * @param $request
     * @param $type
     * @return array
     */
    public function formData($form, $request, $type): array
    {
        return [
            'name' => $form['name'],
        ];
    }
}
