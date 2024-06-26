<?
namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Auth;

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

    // for the login, that will fetch from the db, after the user has been register inside
   public function login(Request $request){
    $credentials = $request-> validate([
        'email'=> 'require | email | exists:users, email',
        'password' => [
            'required',
        ],
        'remember' => 'boolean'
    ]);
    $remember = $credentials['remember'] ?? false;
    unset($credentials['remember']);
    if(!Auth::attempt($credentials, $remember)){
        return response([
            'error'=> 'The provided details does not match'
        ], 422);
    }
    $user = Auth::user();
    $token = $user->createToken('main')->plainTextToken;

    return response([
        'user'=> $user,
        'token' => $token
    ]);
    }

}


