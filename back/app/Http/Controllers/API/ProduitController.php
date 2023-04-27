<?php

namespace App\Http\Controllers\API;

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

    public function store(ProduitRequest $request) {

        if($request->hasFile('image')) {

            $file = $request->file("image");
            $extension = $file->getClientOriginalExtension();
            $filename = time().'.'.$extension;
            $file->move(public_path('uploads/produit/'), $filename);
            $image = 'uploads/produit/'.$filename;
        }

        Produit::create([
            "name" => $request->name,
            "price" => $request->price,
            "stock" => $request->stock,
            "top" => $request->top,
            "reduction" => $request->reduction,
            "description" => $request->description,
            "categorie_id" => $request->categorie
        ]);

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
