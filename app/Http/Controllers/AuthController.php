<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    /**
     * Mostra la pagina di login
     */
    public function showLogin()
    {
        return Inertia::render('Login');
    }

    /**
     * Mostra la pagina di registrazione
     */
    public function showRegister()
    {
        return Inertia::render('Register');
    }

    /**
     * Gestisce il login (simulato senza verifiche)
     */
    public function login(Request $request)
    {
        // In futuro qui aggiungeremo la validazione vera
        // Per ora simuliamo il login
        session([
            'auth.user' => [
                'id' => 1,
                'name' => 'Utente Test',
                'email' => $request->email ?? 'test@example.com',
                'role' => 'user'
            ]
        ]);

        return redirect()->route('dashboard')
            ->with('success', 'Login effettuato con successo!');
    }

    /**
     * Gestisce la registrazione (simulata senza verifiche)
     */
    public function register(Request $request)
    {
        // In futuro qui aggiungeremo la validazione vera
        // Per ora simuliamo la registrazione
        session([
            'auth.user' => [
                'id' => 1,
                'name' => $request->name ?? 'Nuovo Utente',
                'email' => $request->email ?? 'nuovo@example.com',
                'role' => 'user'
            ]
        ]);

        return redirect()->route('dashboard')
            ->with('success', 'Registrazione completata con successo!');
    }

    /**
     * Gestisce il logout
     */
    public function logout()
    {
        session()->forget('auth.user');
        session()->flush();

        return redirect()->route('home')
            ->with('success', 'Logout effettuato con successo!');
    }
}
