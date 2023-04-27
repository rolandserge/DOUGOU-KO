<?php

namespace App\Http\Controllers\API;

use App\Models\Produit;
use App\Models\Commande;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CommandeRequest;

class CommandeController extends Controller
{
    //
    public function store(CommandeRequest $request) {

        $commande = Commande::create([
            'date_livraison' => "12/10/3000",
            'payement' => $request->payement,
            'totaux' => $request->totaux,
            "adresse_livraison" => $request->adresse,
            "numero" => $request->numero,
            "longitude" => $request->longitude,
            "latitude" => $request->latitude,
            "user_id" => $request->user 
        ]);
        
        
        $paniers = $request->paniers;
        $produits = [];
        
        foreach($paniers as $panier) {

            $produits[] = [
                'produit_id' => $panier->id,
                'quantite' => $panier->quantity,
                "price" => $panier->price,
                'couleur' => "RAS",
                'taille' => "RAS"
            ];

            $produit = Produit::where('id', '=', $panier->id)->fisrt();
            $produit->quantite->stock = $produit->stock - $panier->quantity;
            
            $produit->update();
        }

        $commande->paniers()->createMany($produits);
        
        return response()->json([
           'status' => 200,
           "message" => "Votre commande a été prise en compte" 
        ]);
    }
}