<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        return Inertia::render('Guest/About', [
            'contact' => [
                'email' => 'sergio.dimurro@gmail.com',
                'phone' => '+393392974209'
            ]
        ]);
    }
}
