<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Services\UserService;
use App\Services\PostService;

class InertiaController extends Controller
{
    public function __construct(
        private UserService $userService,
        private PostService $postService
    ) {}

    public function index()
    {
        try {
            $users = $this->userService->getAllUsers();
            $posts = $this->postService->getAllPosts();
            
            return Inertia::render('SqliteDemo', [
                'users' => $users,
                'posts' => $posts,
                'stats' => [
                    'totalUsers' => $this->userService->countUsers(),
                    'totalPosts' => $this->postService->countPosts()
                ]
            ]);
        } catch (\Exception $e) {
            return Inertia::render('SqliteDemo', [
                'error' => $e->getMessage(),
                'users' => [],
                'posts' => [],
                'stats' => ['totalUsers' => 0, 'totalPosts' => 0]
            ]);
        }
    }
}
