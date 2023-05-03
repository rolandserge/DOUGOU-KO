<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register(Request $request) {

        $validation = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required|min:8',
        ]);

        if($validation->fails()) {

            return response()->json([
                'status' => 422,
                'errors' => $validation->messages(),
            ]);
        } else {

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);
            
            Auth::login($user);
            
            return response()->json([
                'status' => 200,
                'message' => 'Personnel créee avec success'
            ]);

        }
    }

    public function login(Request $request) {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:8'
        ]);

        if($validator->fails()) {

            return response()->json([
                'error' => $validator->messages(),
                'status' => 422
            ]);

        } else {

            if(Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
                 
                return response()->json([
                    'status' => 200,
                    'data' => Auth::user(),
                    'message' => 'connexion reussi avec succes'
                ]);

            } else  {

                return response()->json([
                    'message' => 'Vos identifiants sont incorrect',
                    'status' => 401
                ]);
            }
        }

    }

    public function me(Request $request) {

        $auth_user = $request->user();

        return response()->json([
            'status' => 200,
            "data" => $auth_user
        ]);
    }

    public function logout(Request $request) {

        auth()->user()->tokens()->delete();

        auth('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json([
            'status' => 200,
            'message' => 'deconnexion reussie'
        ]);
    }
}