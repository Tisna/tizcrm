<?php

namespace App\Http\Controllers\Documents;

use App\Http\Controllers\Controller;
use App\Models\Documents\Document;
use App\Services\Documents\DocumentService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class DocumentController extends Controller
{
    public $service;

    /**
     * MasterUserController constructor.
     */
    public function __construct(DocumentService $service)
    {
        $this->service = $service;
//        $this->middleware(['direct_permission:Roles-index'])->only(['index', 'show', 'permissionRole']);
//        $this->middleware(['direct_permission:Roles-store'])->only(['store', 'storePermissionRole']);
//        $this->middleware(['direct_permission:Roles-edits'])->only('update');
//        $this->middleware(['direct_permission:Roles-erase'])->only('destroy');
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request): \Illuminate\Http\JsonResponse
    {
        return $this->success($this->service->index($request));
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
            return $this->error($this->validation($request), 422, [
                "errors" => true
            ]);
        }

        $items = collect($request->items);
        $tax_details = collect($request->tax_details);

        $validate_details = $this->validateDetails($items);
        if ($validate_details['error']) {
            return $this->error($validate_details['message']);
        }

        DB::beginTransaction();
        try {
            $data = Document::create($this->service->formData($request, 'store'));

            $this->service->processItems($items, $data);

            $this->service->processItemTax($data, $tax_details);

            DB::commit();
            return $this->success([
                "errors" => false
            ], 'Data inserted!');
        } catch (\Exception $exception) {
            DB::rollBack();
            return $this->error($exception->getMessage(), 422, [
                "errors" => true,
                "Trace" => $exception->getTrace()
            ]);
        }
    }

    /**
     * @param $details
     * @return array|false[]
     */
    protected function validateDetails($details): array
    {
        if (count($details) == 0) {
            return ['error' => true, 'message' => 'Details cannot empty!'];
        }

        foreach ($details as $index => $detail) {
            $lines = $index + 1;

            if (!array_key_exists('item_id', $detail)) {
                return ['error' => true, 'message' => "Line ${lines}: Item cannot empty!"];
            } elseif (empty($detail['item_id'])) {
                return ['error' => true, 'message' => "Line ${lines}: Item cannot empty!"];
            }

            if (empty($detail['quantity'])) {
                return ['error' => true, 'message' => "Line ${lines}: Quantity cannot empty!"];
            }
            if ($detail['quantity'] == 0) {
                return ['error' => true, 'message' => "Line ${lines}: Quantity cannot 0!"];
            }
        }
        return ['error' => false];
    }

    /**
     * @param $request
     * @return false|string
     */
    protected function validation($request)
    {
        $messages = [
            'contact_id.required' => 'Customer/Vendor is required!',
        ];

        $validator = Validator::make($request->all(), [
            'document_number' => 'required',
            'contact_id' => 'required',
        ], $messages);

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
     * @param Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, $id): \Illuminate\Http\JsonResponse
    {
        $type = $request->type;
        $form = $this->service->getForm($type);
        $data = Document::where("id", "=", $id)->get();

        return $this->success([
            'rows' => $data,
            'form' => $form
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
            return $this->error($this->validation($request), 422, [
                "errors" => true
            ]);
        }

        $form = $request->form;
        try {
            Document::where("id", "=", $id)->update($this->service->formData($form, 'update'));

            return $this->success([
                "errors" => false
            ], 'Data updated!');
        } catch (\Exception $exception) {
            return $this->error($exception->getMessage(), 422, [
                "errors" => true,
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
        $details = Document::where("id", "=", $id)->first();
        if ($details) {
            Document::where("id", "=", $id)->delete();
            return $this->success([
                "errors" => false
            ], 'Row deleted!');
        }

        return $this->error('Row not found', 422, [
            "errors" => true
        ]);
    }
}
