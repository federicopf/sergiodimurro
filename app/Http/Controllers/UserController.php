<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
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
     * Mostra la pagina profilo utente
     */
    public function profile()
    {
        $user = session('auth.user');
        
        return Inertia::render('Profile', [
            'user' => $user
        ]);
    }

    /**
     * Aggiorna il profilo utente
     */
    public function updateProfile(Request $request)
    {
        // In futuro qui aggiungeremo la validazione vera
        $user = session('auth.user');
        
        // Aggiorna i dati dell'utente in sessione
        $user['name'] = $request->name ?? $user['name'];
        $user['email'] = $request->email ?? $user['email'];
        
        session(['auth.user' => $user]);
        
        return redirect()->route('profile')
            ->with('success', 'Profilo aggiornato con successo!');
    }

    /**
     * Mostra la pagina impostazioni
     */
    public function settings()
    {
        return Inertia::render('Settings');
    }

    /**
     * Aggiorna le impostazioni utente
     */
    public function updateSettings(Request $request)
    {
        // In futuro qui aggiungeremo la logica per le impostazioni
        return redirect()->route('settings')
            ->with('success', 'Impostazioni aggiornate con successo!');
    }
}
