<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;
 
class TestController extends Controller
{
    /**
     * Show the profile for a given user.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function show()
    {
        return Inertia::render('Users/Profile', [
            'user' => 1
        ]);
    }
}