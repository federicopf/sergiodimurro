<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Mostra la pagina home
     */
    public function index()
    {
        return Inertia::render('Home');
    }
}
