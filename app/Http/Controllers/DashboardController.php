<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Middleware per verificare l'autenticazione
     */
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            if (!session('auth.user')) {
                return redirect()->route('login')
                    ->with('error', 'Devi effettuare il login per accedere a questa pagina.');
            }
            return $next($request);
        });
    }

    /**
     * Mostra la dashboard principale
     */
    public function index()
    {
        return Inertia::render('Dashboard');
    }

    /**
     * Mostra la pagina components showcase
     */
    public function componentsShowcase()
    {
        return Inertia::render('ComponentsShowcase');
    }
}
