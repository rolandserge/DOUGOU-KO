<?php

namespace App\Models;

use App\Models\Avis;
use App\Models\Image;
use App\Models\Panier;
use App\Models\Categorie;
use App\Models\Caracteristique;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Produit extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'price', 'top', 'stock','image', 'status', 'reduction', 'description', 'categorie_id'];

    /**
     * Get the user that owns the Produit
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function categorie()
    {
        return $this->belongsTo(Categorie::class);
    }

    /**
        return $this->hasMany(Avis::class);
    }

    /**
     * Get all of the comments for the Produit
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function caracteristiques()
    {
        return $this->hasMany(Caracteristique::class);
    }

    /**
     * Get all of the comments for the Produit
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function paniers()
    {
        return $this->hasMany(Panier::class);
    }

    /**
     * Get all of the images produit for the Produit
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function images()
    {
        return $this->hasMany(Image::class);
    }
}