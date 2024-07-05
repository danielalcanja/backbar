<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Excel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Intervention\Image\ImageManagerStatic as Image;

class BrandsController extends Controller
{

    //------------ GET ALL Brands -----------\\

    public function index(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', Brand::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        $brands = Brand::where('deleted_at', '=', null)

        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('name', 'LIKE', "%{$request->search}%")
                        ->orWhere('description', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $brands->count();
        if($perPage == "-1"){
            $perPage = $totalRows;
        }
        $brands = $brands->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'brands' => $brands,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Brand -------------\\

    public function store(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'create', Brand::class);

        request()->validate([
            'name' => 'required',
        ]);

        \DB::transaction(function () use ($request) {

            if ($request->hasFile('image')) {

                $image = $request->file('image');
                $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

                $image_resize = Image::make($image->getRealPath());
                $image_resize->resize(200, 200);
                $image_resize->save(public_path('/images/brands/' . $filename));

            } else {
                $filename = 'no-image.png';
            }

            $Brand = new Brand;

            $Brand->name = $request['name'];
            $Brand->description = $request['description'];
            $Brand->image = $filename;
            $Brand->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Brand -------------\\

     public function update(Request $request, $id)
     {
 
         $this->authorizeForUser($request->user('api'), 'update', Brand::class);
 
         request()->validate([
             'name' => 'required',
         ]);
         \DB::transaction(function () use ($request, $id) {
             $Brand = Brand::findOrFail($id);
             $currentImage = $Brand->image;
 
             if ($currentImage && $request->image != $currentImage) {
                 $image = $request->file('image');
                 $path = public_path() . '/images/brands';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/brands/' . $filename));
 
                 $BrandImage = $path . '/' . $currentImage;
                 if (file_exists($BrandImage)) {
                     if ($currentImage != 'no-image.png') {
                         @unlink($BrandImage);
                     }
                 }
             } else if (!$currentImage && $request->image !='null'){
                 $image = $request->file('image');
                 $path = public_path() . '/images/brands';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/brands/' . $filename));
             }
 
             else {
                 $filename = $currentImage?$currentImage:'no-image.png';
             }
 
             Brand::whereId($id)->update([
                 'name' => $request['name'],
                 'description' => $request['description'],
                 'image' => $filename,
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Brand -----------\\

    public function destroy(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'delete', Brand::class);

        Brand::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\\

    public function delete_by_selection(Request $request)
    {

        $this->authorizeForUser($request->user('api'), 'delete', Brand::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $brand_id) {
            Brand::whereId($brand_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

     // import Brand
     public function import_brand(Request $request)
     {
         ini_set('max_execution_time', 600); //600 seconds = 10 minutes 
        
         $file = $request->file('products');
         $ext = pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
         if ($ext != 'csv') {
             return response()->json([
                 'msg' => 'must be in csv format',
                 'status' => false,
             ]);
         } else {
             // Read the CSV file
             $data = [];
             $rowcount = 0;
             if (($handle = fopen($file->getPathname(), "r")) !== false) {
                 $max_line_length = defined('MAX_LINE_LENGTH') ? MAX_LINE_LENGTH : 10000;
                 $header = fgetcsv($handle, $max_line_length, ';'); // Use semicolon as the delimiter
 
                 // Process the header row
                 $escapedHeader = [];
                 foreach ($header as $key => $value) {
                     $lheader = strtolower($value);
                     $escapedItem = preg_replace('/[^a-z]/', '', $lheader);
                     $escapedHeader[] = $escapedItem;
                 }
 
                 $header_colcount = count($header);
                 while (($row = fgetcsv($handle, $max_line_length, ';')) !== false) { // Use semicolon as the delimiter
                     $row_colcount = count($row);
                     if ($row_colcount == $header_colcount) {
                         $entry = array_combine($escapedHeader, $row);
                         $data[] = $entry;
                     } else {
                         return null;
                     }
                     $rowcount++;
                 }
                 fclose($handle);
             } else {
                 return null;
             }
             
             
               // Create a new instance of Illuminate\Http\Request and pass the imported data to it.
              
             $cleanedData = [];
 
             foreach ($data as $row) {
                 $cleanedRow = [];
                 foreach ($row as $key => $value) {
                     $cleanedKey = trim($key);
                     $cleanedRow[$cleanedKey] = $value;
                 }
                 $cleanedData[] = $cleanedRow;
             }
             
             $rules = [];
             
             foreach ($cleanedData as $index => $row) {
                 // $rules[$index . '.name'] = 'required';
                 $rules[$index . '.name'] = [
                     'required',
                     Rule::unique('brands', 'name')->whereNull('deleted_at'),
                 ];
             }
             
             $validator = Validator::make($cleanedData, $rules);
             
             if ($validator->fails()) {
                 // Validation failed
                 return response()->json([
                     'msg' => 'Validation failed',
                     'errors' => $validator->errors(),
                     'status' => false,
                 ]);
             }
            
             try { 
                     //-- Create New Brand
                     foreach ($cleanedData as $key => $value) {
                         Brand::create([
                             'description' => null,
                             'name' => htmlspecialchars(trim($value['name'])),
                             'image' => 'no-image.png',
                         ]);
                        
                     }
 
                 // Return success response
                 return response()->json(['status' => true]);
 
             } catch (QueryException $e) {
                 // Transaction failed, handle the exception
                 $errorCode = $e->getCode();
                 $errorMessage = $e->getMessage();
                 
                 // Additional error handling or logging can be performed here
                 
                 return response()->json(['status' => false, 'error' => $errorMessage]);
             }
             
         }
 
     }

}
