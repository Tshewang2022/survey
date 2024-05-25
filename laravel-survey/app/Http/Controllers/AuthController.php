<?
namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller{

    // creating the register methods
    public function register(Request $request){
        $data = $request->validate([
            'name' => 'required | string',
            'email' => 'required | email | string |unique:users, email',
            'password' => [
                'required',
                'confirmed',
                Password::min(4)->mixedCase()->numbers()
            ]
        ]);
        $user = User::create([
            'name'=> $data['name'],
            'email'=>$data['email'],
            // encrypting the user password with this function in php
            'password'=>bcrypt($data['password'])
        ]);
        $token = $user->createToken('main')->plainTextToken;
        return response ([
            'user' => $user,
            'token'=> $token
        ]);
    }

}