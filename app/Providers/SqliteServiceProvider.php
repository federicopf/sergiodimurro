<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\DatabaseService;
use App\Repositories\UserRepository;
use App\Repositories\PostRepository;
use App\Services\UserService;
use App\Services\PostService;

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
        $this->app->bind(UserRepository::class, function ($app) {
            return new UserRepository($app->make(DatabaseService::class));
        });

        $this->app->bind(PostRepository::class, function ($app) {
            return new PostRepository($app->make(DatabaseService::class));
        });

        // Registra Services
        $this->app->bind(UserService::class, function ($app) {
            return new UserService($app->make(UserRepository::class));
        });

        $this->app->bind(PostService::class, function ($app) {
            return new PostService(
                $app->make(PostRepository::class),
                $app->make(UserRepository::class)
            );
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
