<?php

use Illuminate\Support\Facades\Route;

Route::prefix('admin')
    ->as('admin.')
    ->middleware(['auth', 'admin'])
    ->group(base_path('routes/admin.php'));

Route::prefix('/')
    ->as('guest.')
    ->group(base_path('routes/guest.php'));
