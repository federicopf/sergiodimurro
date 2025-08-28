<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Services\PhotoService;

class HomeController extends Controller
{
    public function __construct(private PhotoService $photoService) {}

    public function index()
    {
        try {
            $photos = $this->photoService->getAllPhotos();
            
            return Inertia::render('Guest/Home', [
                'photos' => $photos,
                'stats' => [
                    'totalPhotos' => $this->photoService->countPhotos()
                ]
            ]);
        } catch (\Exception $e) {
            return Inertia::render('Guest/Home', [
                'error' => $e->getMessage(),
                'photos' => [],
                'stats' => ['totalPhotos' => 0]
            ]);
        }
    }
}
