<?php

namespace App\Models;

use App\Models\Produit;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Caracteristique extends Model
{
    use HasFactory;

    protected $fillable = ['taille', 'couleur', 'poids', 'produit_id',];

    /**
     * Get the user that owns the Caracteristique
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function produit()
    {
        return $this->belongsTo(Produit::class);
    }
}