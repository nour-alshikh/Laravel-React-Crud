<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('add_product' ,[ProductController::class , 'store']);
Route::get('get_products' ,[ProductController::class , 'index']);
Route::get('get_product/{id}' ,[ProductController::class , 'get_product']);
Route::post('update_product/{id}' ,[ProductController::class , 'update_product']);
Route::get('delete_product/{id}' ,[ProductController::class , 'delete_product']);
Route::get('show_product/{id}' ,[ProductController::class , 'show_product']);
