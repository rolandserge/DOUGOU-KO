<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use App\Http\Resources\ProduitResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ImageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'name'=> $this->name,
            'url'=> $this->url,
            'description'=> $this->description,
            // 'produit' => new ProduitResource($this->produit),
        ];
    }
}