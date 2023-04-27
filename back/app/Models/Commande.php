<?php

namespace App\Models;

use App\Models\User;
use App\Models\Panier;
use App\Models\Livraison;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Commande extends Model
{
    use HasFactory;

    protected $fillable = ['date_livraison', 'payement', 'totaux', 'status', 'user_id', 'livraison_id'];

    /**
     * Get all of the comments for the Commande
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function paniers()
    {
        return $this->hasMany(Panier::class);
    }

    /**
     * Get the user that owns the Commande
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the user that owns the Commande
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

}