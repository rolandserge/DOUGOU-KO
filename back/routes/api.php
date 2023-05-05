<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ImageControler;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\ProduitController;
use App\Http\Controllers\API\CommandeController;
use App\Http\Controllers\API\CategorieController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function() {

    Route::post('/logout', [UserController::class, 'logout']);
    Route::get('/me', [UserController::class, 'me']);

    // commande action route
    Route::post('/add-commande', [CommandeController::class, 'store']);


});

Route::get('/commandes', [CommandeController::class, 'index']);
Route::get('/commande/{id}', [CommandeController::class, 'show']);
Route::post('/updatecommande/{id}', [CommandeController::class, 'updatestatus']);


Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);


// categorie route action
Route::get('/categories', [CategorieController::class, 'index']);
Route::post('/add-categorie', [CategorieController::class, 'store']);


// produit actions route
Route::get('/produits', [ProduitController::class, 'index']);
Route::post('/add-produit', [ProduitController::class, 'store']);
Route::get('/detail-produit/{id}', [ProduitController::class, 'show']);


// image produit action route
Route::get('/image-produits', [ImageControler::class, 'index']);
Route::post('/add-image', [ImageControler::class, 'store']);



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//
//  return $request->user();
// });