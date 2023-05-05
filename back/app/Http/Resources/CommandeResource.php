<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommandeResource extends JsonResource
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
            'numero' => $this->numero,
            'totaux' => $this->totaux,
            'adresse' => $this->adresse_livraison,
            "date_commande" => $this->created_at,
            'date_livraison' => $this->date_livraison,
            'payement' => $this->payement,
            "status" => $this->status
        ];
    }
}