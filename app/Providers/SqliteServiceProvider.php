<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\DatabaseService;
use App\Repositories\PhotoRepository;
use App\Services\PhotoService;

class SqliteServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        // Registra DatabaseService come singleton
        $this->app->singleton(DatabaseService::class, function ($app) {
            return new DatabaseService();
        });

        // Registra Repository
        $this->app->bind(PhotoRepository::class, function ($app) {
            return new PhotoRepository($app->make(DatabaseService::class));
        });

        // Registra Services
        $this->app->bind(PhotoService::class, function ($app) {
            return new PhotoService($app->make(PhotoRepository::class));
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
