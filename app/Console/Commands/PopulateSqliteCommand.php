<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Repositories\PhotoRepository;

class PopulateSqliteCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sqlite:populate {--count=5 : Number of photos to create}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Popola il database SQLite con foto di esempio';

    /**
     * Execute the console command.
     */
    public function handle(PhotoRepository $photoRepository): int
    {
        $this->info('🚀 Inizializzazione database SQLite per foto...');

        try {
            $count = (int) $this->option('count');
            
            // Crea foto di esempio
            $this->info("📸 Creazione di {$count} foto di esempio...");
            
            $photoData = [
                [
                    'title' => 'Paesaggio montano',
                    'description' => 'Bellissima vista delle montagne al tramonto',
                    'filename' => 'landscape_mountain.jpg',
                    'file_path' => '/storage/photos/landscape_mountain.jpg',
                    'file_size' => 2048576,
                    'mime_type' => 'image/jpeg'
                ],
                [
                    'title' => 'Ritratto urbano',
                    'description' => 'Architettura moderna in città',
                    'filename' => 'urban_portrait.jpg',
                    'file_path' => '/storage/photos/urban_portrait.jpg',
                    'file_size' => 1536000,
                    'mime_type' => 'image/jpeg'
                ],
                [
                    'title' => 'Natura selvaggia',
                    'description' => 'Foresta incontaminata con cascate',
                    'filename' => 'wild_nature.png',
                    'file_path' => '/storage/photos/wild_nature.png',
                    'file_size' => 3072000,
                    'mime_type' => 'image/png'
                ],
                [
                    'title' => 'Street photography',
                    'description' => 'Vita quotidiana nelle strade della città',
                    'filename' => 'street_life.jpg',
                    'file_path' => '/storage/photos/street_life.jpg',
                    'file_size' => 2560000,
                    'mime_type' => 'image/jpeg'
                ],
                [
                    'title' => 'Astronomia',
                    'description' => 'Stelle e galassie nel cielo notturno',
                    'filename' => 'astronomy.jpg',
                    'file_path' => '/storage/photos/astronomy.jpg',
                    'file_size' => 4096000,
                    'mime_type' => 'image/jpeg'
                ]
            ];

            for ($i = 0; $i < $count; $i++) {
                $photoIndex = $i % count($photoData);
                $photo = $photoRepository->create($photoData[$photoIndex]);
                $this->line("✅ Creata foto: {$photo['title']} ({$photo['filename']})");
            }

            $this->info('🎉 Database popolato con successo!');
            $this->info("📊 Statistiche:");
            $this->info("   - Foto: " . $photoRepository->count());

            return Command::SUCCESS;

        } catch (\Exception $e) {
            $this->error('❌ Errore durante la popolazione del database: ' . $e->getMessage());
            return Command::FAILURE;
        }
    }
}
