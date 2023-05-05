<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use App\Http\Resources\ProduitResource;
use App\Http\Resources\CommandeResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PanierResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'totaux' => $this->price,
            'taille' => $this->taille,
            "quantite" => $this->quantite,
            "commande" => new CommandeResource($this->commande),
            "produit" => new ProduitResource($this->produit)
        ];
    }
}