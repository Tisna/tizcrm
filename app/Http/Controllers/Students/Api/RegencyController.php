<?php

namespace App\Http\Controllers\Students\Api;

use App\Http\Controllers\Controller;
use App\Models\Student\Regency;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RegencyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $options = json_decode($request->options);
        $year_local = date('Y');
        $pages = isset($options->page) ? (int)$options->page : 1;
        $filter = isset($request->filter) ? (string)$request->filter : $year_local;
        $row_data = isset($options->itemsPerPage) ? (int)$options->itemsPerPage : 10000000;
        $sorts = isset($options->sortBy[0]) ? (string)$options->sortBy[0] : "id";
        $order = isset($options->sortDesc[0]) ? "DESC" : "ASC";

        $search = isset($request->q) ? (string)$request->q : "";
        $type = isset($request->type) ? $request->type : null;
        $select_data = isset($request->selectData) ? (string)$request->selectData : "name";
        $offset = ($pages - 1) * $row_data;
        $username = $request->user()->U_UserCode;

        $result = array();
        $query = Regency::orderBy($sorts, $order);

        $result["total"] = $query->count();
        $all_data = $query->offset($offset)
            ->where("province_id", "=", $request->province_id)
            ->limit($row_data)
            ->get();

        $regency_by_province = Regency::where("province_id", "=", $request->province_id)->get();

        $result = array_merge($result, [
            "rows" => $all_data,
            "filter" => ['All'],
            "all_data" => $regency_by_province
        ]);
        return response()->json($result);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        if ($this->validation($request)) {
            return response()->json([
                "errors" => true,
                "validHeader" => true,
                "message" => $this->validation($request)
            ]);
        }

        try {
            $data = new Regency();
            $data->name = $request->name;
            $data->province_id = $request->province_id;
            $data->save();

            return response()->json([
                "errors" => false,
                "message" => "Data inserted!"
            ]);
        } catch (\Exception $exception) {
            return response()->json([
                "errors" => true,
                "message" => $exception->getMessage(),
                "Trace" => $exception->getTrace()
            ]);
        }
    }

    /**
     * @param $request
     * @return false|string
     */
    protected function validation($request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'province_id' => 'province_id',
        ]);

        $string_data = "";
        if ($validator->fails()) {
            foreach (collect($validator->messages()) as $error) {
                foreach ($error as $items) {
                    $string_data .= $items . " \n  ";
                }
            }
            return $string_data;
        } else {
            return false;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id): \Illuminate\Http\JsonResponse
    {
        $data = Regency::where("id", "=", $id)->first();
        return response()->json([
            'rows' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        if ($this->validation($request)) {
            return response()->json([
                "errors" => true,
                "validHeader" => true,
                "message" => $this->validation($request)
            ]);
        }

        try {
            $data = Regency::where("id", "=", $id)->first();
            $data->name = $request->name;
            $data->province_id = $request->province_id;
            $data->updated_at = Carbon::now();
            $data->save();

            return response()->json([
                "errors" => false,
                "message" => "Data updated!"
            ]);
        } catch (\Exception $exception) {
            return response()->json([
                "errors" => true,
                "message" => $exception->getMessage(),
                "Trace" => $exception->getTrace()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id): \Illuminate\Http\JsonResponse
    {
        $details = Regency::where("id", "=", $id)->first();
        if ($details) {
            Regency::where("id", "=", $id)->delete();
            return response()->json([
                'message' => 'Row deleted'
            ]);
        }
        return response()->json([
            'message' => 'Row not found'
        ]);
    }
}