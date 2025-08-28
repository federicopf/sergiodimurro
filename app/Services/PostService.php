<?php

namespace App\Services;

use App\Repositories\PostRepository;
use App\Repositories\UserRepository;
use Exception;

class PostService
{
    public function __construct(
        private PostRepository $postRepository,
        private UserRepository $userRepository
    ) {}

    /**
     * Crea un nuovo post
     */
    public function createPost(string $title, string $content, int $userId): array
    {
        try {
            // Validazione business logic
            if (empty($title) || empty($content)) {
                throw new Exception("Titolo e contenuto sono obbligatori");
            }

            if (strlen($title) > 255) {
                throw new Exception("Titolo troppo lungo (max 255 caratteri)");
            }

            if ($userId <= 0) {
                throw new Exception("ID utente non valido");
            }

            // Verifica se l'utente esiste
            if (!$this->userRepository->find($userId)) {
                throw new Exception("Utente non trovato");
            }

            return $this->postRepository->create([
                'title' => $title,
                'content' => $content,
                'user_id' => $userId
            ]);
        } catch (Exception $e) {
            throw new Exception("Errore creazione post: " . $e->getMessage());
        }
    }

    /**
     * Ottiene tutti i post con informazioni utente
     */
    public function getAllPosts(): array
    {
        try {
            return $this->postRepository->all();
        } catch (Exception $e) {
            throw new Exception("Errore recupero post: " . $e->getMessage());
        }
    }

    /**
     * Ottiene un post per ID
     */
    public function getPostById(int $id): ?array
    {
        try {
            if ($id <= 0) {
                throw new Exception("ID post non valido");
            }

            return $this->postRepository->find($id);
        } catch (Exception $e) {
            throw new Exception("Errore recupero post: " . $e->getMessage());
        }
    }

    /**
     * Ottiene i post di un utente specifico
     */
    public function getPostsByUserId(int $userId): array
    {
        try {
            if ($userId <= 0) {
                throw new Exception("ID utente non valido");
            }

            // Verifica se l'utente esiste
            if (!$this->userRepository->find($userId)) {
                throw new Exception("Utente non trovato");
            }

            return $this->postRepository->findByUserId($userId);
        } catch (Exception $e) {
            throw new Exception("Errore recupero post utente: " . $e->getMessage());
        }
    }

    /**
     * Aggiorna un post
     */
    public function updatePost(int $id, array $data): bool
    {
        try {
            if ($id <= 0) {
                throw new Exception("ID post non valido");
            }

            // Validazione business logic
            if (isset($data['title']) && (empty($data['title']) || strlen($data['title']) > 255)) {
                throw new Exception("Titolo non valido");
            }

            // Verifica se il post esiste
            if (!$this->postRepository->find($id)) {
                throw new Exception("Post non trovato");
            }

            return $this->postRepository->update($id, $data);
        } catch (Exception $e) {
            throw new Exception("Errore aggiornamento post: " . $e->getMessage());
        }
    }

    /**
     * Elimina un post
     */
    public function deletePost(int $id): bool
    {
        try {
            if ($id <= 0) {
                throw new Exception("ID post non valido");
            }

            // Verifica se il post esiste
            if (!$this->postRepository->find($id)) {
                throw new Exception("Post non trovato");
            }

            return $this->postRepository->delete($id);
        } catch (Exception $e) {
            throw new Exception("Errore eliminazione post: " . $e->getMessage());
        }
    }

    /**
     * Cerca post per titolo o contenuto
     */
    public function searchPosts(string $query): array
    {
        try {
            if (strlen($query) < 2) {
                throw new Exception("Query di ricerca troppo corta (min 2 caratteri)");
            }

            return $this->postRepository->search($query);
        } catch (Exception $e) {
            throw new Exception("Errore ricerca post: " . $e->getMessage());
        }
    }

    /**
     * Conta il numero totale di post
     */
    public function countPosts(): int
    {
        try {
            return $this->postRepository->count();
        } catch (Exception $e) {
            throw new Exception("Errore conteggio post: " . $e->getMessage());
        }
    }
}
