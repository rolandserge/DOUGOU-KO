<?php

namespace App\Http\Controllers\API;

use App\Models\Image;
use App\Models\Panier;
use App\Models\Produit;
use App\Models\Commande;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CommandeRequest;
use App\Http\Resources\PanierResource;
use App\Http\Resources\CommandeResource;

class CommandeController extends Controller
{
    //
    public function index() {

        $commande = Commande::orderBy('id', 'DESC')->get();

        return CommandeResource::collection($commande);
    }

    public function store(CommandeRequest $request) {

        $commande = Commande::create([
            'payement' => $request->payement,
            'totaux' => $request->totaux,
            "adresse_livraison" => $request->adresse,
            "numero" => $request->numero,
            "ville" => $request->ville,
            "longitude" => -3.9368538,
            "latitude" => 5.3708667,
            "user_id" => $request->user
        ]);


        $paniers[] = $request->panier;
        $produits = [];

        foreach($paniers[0] as $panier) {

            $produits[] = [
                'produit_id' => $panier['id'],
                'quantite' => $panier['quantity'],
                "price" => $panier['price'] * $panier['quantity'],
                'couleur' => "RAS",
                'taille' => "RAS"
            ];

            $produit = Produit::where('id', '=', $panier['id'])->get();

            $produit[0]->stock = $produit[0]->stock - $panier['quantity'];

            $produit[0]->update();
        }

        $commande->paniers()->createMany($produits);

        return response()->json([
           'status' => 200,
           "message" => "Votre commande a été prise en compte",
        ]);
    }

    public function show($id) {

        $produits = Panier::where('commande_id', $id)->get();

        if($produits) {

            return PanierResource::collection($produits);
        } else {

            return response()->json([
                'status' => 200
            ]);
        }
    }

    public function updatestatus(Request $request, $id) {

        $commande = Commande::find($id);

        $commande->status = $request->status;

        $commande->update();

        return response()->json([
            'status' => 200
        ]);
    }
}
