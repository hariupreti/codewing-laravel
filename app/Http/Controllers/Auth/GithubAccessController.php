<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;

class GithubAccessController extends Controller
{
    public function getAccess()
    {
        $redirectUrl = Socialite::driver('github')->redirect()->getTargetUrl();
        return response('', 409)->header('X-Inertia-Location', $redirectUrl);
    }

    public function redirectCallback()
    {
        $githubUser = Socialite::driver('github')->user();
        $githubInfo = [
            'github_id' => $githubUser->id,
            'name' => $githubUser->name,
            'email' => $githubUser->email,
            'github_token' => $githubUser->token,
            'github_refresh_token' => $githubUser->refreshToken,
            'password' => bcrypt(Str::random(20)) //We are setting up a random password for now
        ];
        $updateCondition = [
            'github_id' => $githubUser->id,
        ];
        $user = User::updateOrCreate($updateCondition, $githubInfo);

        //Login and redirect user to dashboard
        Auth::login($user);
        return redirect('/dashboard');
    }
}
