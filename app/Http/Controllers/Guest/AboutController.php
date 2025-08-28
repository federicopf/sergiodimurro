<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        return Inertia::render('Guest/About', [
            'data' => [
                'contact' => [
                    'email' => 'sergio.dimurro@gmail.com',
                    'phone' => '+(39) 339 297 4209'
                ]
            ]
        ]);
    }
}
