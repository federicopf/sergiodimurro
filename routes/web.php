<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;

// Rotte pubbliche
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
// Route::get('/register', [AuthController::class, 'showRegister'])->name('register');

// Rotte di autenticazione
Route::post('/login', [AuthController::class, 'login'])->name('login.post');
Route::post('/register', [AuthController::class, 'register'])->name('register.post');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

// Rotte protette
Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
Route::get('/components-showcase', [DashboardController::class, 'componentsShowcase'])->name('components.showcase');

// Rotte utente
Route::get('/profile', [UserController::class, 'profile'])->name('profile');
Route::post('/profile', [UserController::class, 'updateProfile'])->name('profile.update');
Route::get('/settings', [UserController::class, 'settings'])->name('settings');
Route::post('/settings', [UserController::class, 'updateSettings'])->name('settings.update');
