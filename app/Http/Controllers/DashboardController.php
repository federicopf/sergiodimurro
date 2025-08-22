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
        // Verifica autenticazione in ogni metodo
    }

    /**
     * Mostra la dashboard principale
     */
    public function index()
    {
        if (!session('auth.user')) {
            return redirect('/login')
                ->with('error', 'Devi effettuare il login per accedere a questa pagina.');
        }
        
        return Inertia::render('Dashboard');
    }

    /**
     * Mostra la pagina components showcase
     */
    public function componentsShowcase()
    {
        if (!session('auth.user')) {
            return redirect('/login')
                ->with('error', 'Devi effettuare il login per accedere a questa pagina.');
        }
        
        return Inertia::render('ComponentsShowcase');
    }
}
