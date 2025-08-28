<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Services\PhotoService;

class InertiaController extends Controller
{
    public function __construct(private PhotoService $photoService) {}

    public function index()
    {
        try {
            $photos = $this->photoService->getAllPhotos();
            
            return Inertia::render('SqliteDemo', [
                'photos' => $photos,
                'stats' => [
                    'totalPhotos' => $this->photoService->countPhotos()
                ]
            ]);
        } catch (\Exception $e) {
            return Inertia::render('SqliteDemo', [
                'error' => $e->getMessage(),
                'photos' => [],
                'stats' => ['totalPhotos' => 0]
            ]);
        }
    }
}
