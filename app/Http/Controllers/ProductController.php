<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class ProductController extends Controller
{
    public function store(Request $request)
    {

            Product::create([
            'name' => $request->name,
            'desc' => $request->desc,
            'img' => "image.png",
            'type' => $request->type,
            'quantity' => $request->quantity,
            'price' => $request->price,
        ]);
    }

    public function index(){
        $products = Product::all();
        return response()->json($products ,200);
    }

    public function get_product($id)
    {
        $product = Product::find($id);

        return response()->json($product);
    }
    public function update_product(Request $request , $id)
    {
        $product = Product::find($id);
        $product->update([
            'name' => $request->name,
            'desc' => $request->desc,
            'img' => "image.png",
            'type' => $request->type,
            'quantity' => $request->quantity,
            'price' => $request->price,
        ]);
    }
    public function delete_product($id)
    {
        $product = Product::find($id);
        $product->delete();
    }

    public function show_product($id)
    {
        $product = Product::find($id);

        return response()->json($product);
    }
}
