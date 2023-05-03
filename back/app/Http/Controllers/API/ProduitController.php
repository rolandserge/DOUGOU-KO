<?php

namespace App\Http\Controllers\API;

use App\Models\Image;
use App\Models\Produit;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProduitRequest;
use App\Http\Resources\ProduitResource;

class ProduitController extends Controller
{
    public function index() {

        $produits = Produit::where('stock','>=', 1)->orderBy('id', 'DESC')->with("images")->get();

        return ProduitResource::collection($produits);

    }

    public function store(Request $request) {
        
        return response()->json([
            'status' => 'success',
        ]);
        
        $produit = Produit::create([
            "name" => $request->name,
            "price" => $request->price,
            "stock" => $request->stock,
            "top" => $request->top,
            "reduction" => $request->reduction,
            "description" => $request->description,
            "categorie_id" => $request->categorie
        ]);
        
        $files = $request->file("images");
        $images = [];

        foreach($files as $file) {
                
                $extension = $file->getClientOriginalExtension();
                $filename = time().rand(1,900000).'.'. $extension;
                $file->move(public_path('uploads/produit/'), $filename);
                $image = 'uploads/produit/'.$filename;
                
                $images[] = [
                    'name' => $request->name,
                    "url" => $image,
                    "description" => $request->description
                ];
        }

        $produit->images()->createMany($images);
        
        return response()->json([
            'status' => 'success',
        ]);
        
    }

    public function show($id) {

        $produit = Produit::where('id', $id)->with('images')->get();

        if($produit) {

            return ProduitResource::collection($produit);
            // return response()->json([
            //     'status' => 404,
            //     'message' => $produit
            // ]);

        } else {

            return response()->json([
                'status' => 404,
                'message' => 'produit non trouvé'
            ]);
        }
    }

    public function update(ProduitRequest $request) {


    }
}