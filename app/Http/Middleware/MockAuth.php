<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class MockAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Simula un utente autenticato per testing
        // In produzione, questo dovrebbe essere sostituito con il vero middleware di autenticazione
        
        // Aggiungi dati utente mock alla sessione
        if (!session()->has('auth.user')) {
            session(['auth.user' => [
                'id' => 1,
                'name' => 'Utente Test',
                'email' => 'test@example.com',
                'role' => 'user'
            ]]);
        }
        
        return $next($request);
    }
}
