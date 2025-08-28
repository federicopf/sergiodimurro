<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Repositories\UserRepository;
use App\Repositories\PostRepository;

class PopulateSqliteCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sqlite:populate {--count=5 : Number of users to create}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Popola il database SQLite con dati di esempio';

    /**
     * Execute the console command.
     */
    public function handle(UserRepository $userRepository, PostRepository $postRepository): int
    {
        $this->info('🚀 Inizializzazione database SQLite...');

        try {
            $count = (int) $this->option('count');
            
            // Crea utenti di esempio
            $this->info("📝 Creazione di {$count} utenti...");
            $users = [];
            
            for ($i = 1; $i <= $count; $i++) {
                $user = $userRepository->create([
                    'name' => "Utente {$i}",
                    'email' => "utente{$i}@example.com"
                ]);
                $users[] = $user;
                $this->line("✅ Creato utente: {$user['name']} ({$user['email']})");
            }

            // Crea post di esempio
            $this->info('📝 Creazione post di esempio...');
            $postTitles = [
                'Benvenuto nel nostro sito',
                'Come utilizzare i nostri servizi',
                'Nuove funzionalità disponibili',
                'Guida completa per iniziare',
                'Domande frequenti e risposte'
            ];

            foreach ($users as $index => $user) {
                $title = $postTitles[$index % count($postTitles)];
                $content = "Questo è un post di esempio creato da {$user['name']}. " . 
                           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " .
                           "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
                
                $post = $postRepository->create([
                    'title' => $title,
                    'content' => $content,
                    'user_id' => $user['id']
                ]);
                $this->line("✅ Creato post: {$post['title']} di {$user['name']}");
            }

            $this->info('🎉 Database popolato con successo!');
            $this->info("📊 Statistiche:");
            $this->info("   - Utenti: " . $userRepository->count());
            $this->info("   - Post: " . $postRepository->count());

            return Command::SUCCESS;

        } catch (\Exception $e) {
            $this->error('❌ Errore durante la popolazione del database: ' . $e->getMessage());
            return Command::FAILURE;
        }
    }
}
