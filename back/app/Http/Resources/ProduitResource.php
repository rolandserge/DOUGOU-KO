<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use App\Http\Resources\ImageResource;
use App\Http\Resources\CategorieResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ProduitResource extends JsonResource
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
            'id' => $this->id,
            "name" => $this->name,
            "price" => $this->price,
            "top" => $this->top,
            "stock" => $this->stock,
            "reduction" => $this->reduction,
            "description" => $this->description,
            "categorie" => new CategorieResource($this->categorie),
            "image" => ImageResource::collection($this->whenLoaded('images'))
        ];
    }
}
