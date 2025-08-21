# 🛣️ Rotte dell'Applicazione

Questo documento descrive tutte le rotte disponibili nell'applicazione Laravel Inertia React.

## 🌐 Rotte Pubbliche

### Home
- **GET** `/` → `HomeController@index` → Home page pubblica

### Autenticazione
- **GET** `/login` → `AuthController@showLogin` → Pagina di login
- **GET** `/register` → `AuthController@showRegister` → Pagina di registrazione

## 🔐 Rotte di Autenticazione

### Login
- **POST** `/login` → `AuthController@login` → Gestisce il login (simulato)

### Registrazione  
- **POST** `/register` → `AuthController@register` → Gestisce la registrazione (simulata)

### Logout
- **POST** `/logout` → `AuthController@logout` → Gestisce il logout

## 🔒 Rotte Protette (Richiedono Autenticazione)

### Dashboard
- **GET** `/dashboard` → `DashboardController@index` → Dashboard principale
- **GET** `/components-showcase` → `DashboardController@componentsShowcase` → Mostra tutti i componenti

### Profilo Utente
- **GET** `/profile` → `UserController@profile` → Pagina profilo utente
- **POST** `/profile` → `UserController@updateProfile` → Aggiorna profilo utente

### Impostazioni
- **GET** `/settings` → `UserController@settings` → Pagina impostazioni
- **POST** `/settings` → `UserController@updateSettings` → Aggiorna impostazioni

## 🎯 Controller Utilizzati

### HomeController
- Gestisce le pagine pubbliche
- **Metodi**: `index()`

### AuthController  
- Gestisce l'autenticazione
- **Metodi**: `showLogin()`, `showRegister()`, `login()`, `register()`, `logout()`

### DashboardController
- Gestisce le pagine della dashboard
- **Metodi**: `index()`, `componentsShowcase()`
- **Middleware**: Controllo autenticazione personalizzato

### UserController
- Gestisce le funzionalità utente
- **Metodi**: `profile()`, `updateProfile()`, `settings()`, `updateSettings()`
- **Middleware**: Controllo autenticazione personalizzato

## 🔧 Middleware

### Controllo Autenticazione
I controller `DashboardController` e `UserController` includono un middleware personalizzato che:
- Verifica se esiste un utente in sessione (`session('auth.user')`)
- Reindirizza al login se non autenticato
- Mostra messaggio di errore appropriato

### Gestione Sessione
- **Login**: Crea sessione utente simulata
- **Logout**: Rimuove sessione utente
- **Protezione**: Verifica sessione per rotte protette

## 📝 Note di Sviluppo

### Autenticazione Simulata
- **Login/Register**: Non richiedono credenziali valide
- **Sessione**: Utilizza sessioni Laravel per simulare autenticazione
- **Futuro**: Sostituire con sistema di autenticazione reale (Laravel Breeze/Jetstream)

### Validazione
- **Client-side**: Validazione nei componenti React
- **Server-side**: Validazione base nei controller
- **Futuro**: Aggiungere Request classes per validazione avanzata

### Sicurezza
- **CSRF**: Protezione CSRF attiva per tutte le richieste POST
- **Sessione**: Gestione sicura delle sessioni
- **Futuro**: Aggiungere middleware di autenticazione Laravel standard

## 🚀 Come Aggiungere Nuove Rotte

### 1. Creare il Controller
```bash
php artisan make:controller NomeController
```

### 2. Aggiungere i Metodi
```php
public function index()
{
    return Inertia::render('NomePagina');
}
```

### 3. Registrare la Rotta
```php
Route::get('/nome-rotta', [NomeController::class, 'index'])->name('nome.rotta');
```

### 4. Creare la Pagina React
```jsx
// resources/js/Pages/NomePagina.jsx
export default function NomePagina() {
    return <div>Contenuto pagina</div>;
}
```

## 📚 Riferimenti

- **Laravel Routing**: https://laravel.com/docs/routing
- **Inertia.js**: https://inertiajs.com/
- **Controller**: https://laravel.com/docs/controllers
- **Middleware**: https://laravel.com/docs/middleware
