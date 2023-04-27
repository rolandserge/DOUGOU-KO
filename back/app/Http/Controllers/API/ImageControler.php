<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ImageRequest;
use App\Http\Resources\ImageResource;
use App\Models\Image;
use Illuminate\Http\Request;

class ImageControler extends Controller
{

    public function index() {

        $image = Image::all();

        return ImageResource::collection($image);
    }
    public function store(ImageRequest $request) {

        if($request->hasFile('url')) {

            $file = $request->file("url");
            $extension = $file->getClientOriginalExtension();
            $filename = time().'.'.$extension;
            $file->move(public_path('uploads/produit/'), $filename);
            $image = 'uploads/produit/'.$filename;
        }

        Image::create([
            'name' => $request->name,
            'url' => $image,
            'description' => $request->description,
            'produit_id' => $request->produit,
        ]);

        return response()->json([
            'status' => 'success',
        ]);
    }
}