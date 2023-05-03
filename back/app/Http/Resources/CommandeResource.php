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
            'numero' => $this->numero,
            'totaux' => $this->totaux,
            'adresse' => $this->adresse_livraison,
            'date' => $this->date_livraison,
            'payement' => $this->payement,
            "status" => $this->status
        ];
    }
}