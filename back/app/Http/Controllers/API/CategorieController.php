<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategorieRequest;
use App\Http\Resources\CategorieResource;
use App\Models\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{

    public function index() {

        $categorie = Categorie::orderBy('id', 'DESC')->get();

        return CategorieResource::collection($categorie);
    }

    public function store(CategorieRequest $request) {
        
        // return response()->json([
        //     "status" => "success",
        //     "request" => $request->all()
        // ]);
        
        if($request->hasFile('image')) {

            $file = $request->file("image");
            $extension = $file->getClientOriginalExtension();
            $filename = time().'.'.$extension;
            $file->move(public_path('uploads/categorie/'), $filename);
            $image = 'uploads/categorie/'.$filename;
            
            Categorie::create([
                'name' => $request->name,
                "description" => $request->description,
                "image" => $image
            ]);
    
            return response()->json([
                "status" => "success",
            ]);
        } else {

            return response()->json([
                "status" => "erreur grave",
            ]);
        }

    }
}