<?php

namespace App\Services;

use App\Repositories\PhotoRepository;
use Exception;

class PhotoService
{
    public function __construct(private PhotoRepository $photoRepository) {}

    /**
     * Crea una nuova foto
     */
    public function createPhoto(array $data): array
    {
        try {
            // Validazione business logic
            if (empty($data['title']) || empty($data['filename'])) {
                throw new Exception("Titolo e filename sono obbligatori");
            }

            if (strlen($data['title']) > 255) {
                throw new Exception("Titolo troppo lungo (max 255 caratteri)");
            }

            if (empty($data['file_path'])) {
                throw new Exception("Percorso file è obbligatorio");
            }

            if (!isset($data['file_size']) || $data['file_size'] <= 0) {
                throw new Exception("Dimensione file non valida");
            }

            if (empty($data['mime_type'])) {
                throw new Exception("Tipo MIME è obbligatorio");
            }

            // Validazione tipo file
            $allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
            if (!in_array($data['mime_type'], $allowedMimeTypes)) {
                throw new Exception("Tipo file non supportato. Tipi supportati: " . implode(', ', $allowedMimeTypes));
            }

            // Validazione dimensione file (max 10MB)
            if ($data['file_size'] > 10 * 1024 * 1024) {
                throw new Exception("File troppo grande (max 10MB)");
            }

            return $this->photoRepository->create($data);
        } catch (Exception $e) {
            throw new Exception("Errore creazione foto: " . $e->getMessage());
        }
    }

    /**
     * Ottiene tutte le foto
     */
    public function getAllPhotos(): array
    {
        try {
            return $this->photoRepository->all();
        } catch (Exception $e) {
            throw new Exception("Errore recupero foto: " . $e->getMessage());
        }
    }

    /**
     * Ottiene una foto per ID
     */
    public function getPhotoById(int $id): ?array
    {
        try {
            if ($id <= 0) {
                throw new Exception("ID foto non valido");
            }

            return $this->photoRepository->find($id);
        } catch (Exception $e) {
            throw new Exception("Errore recupero foto: " . $e->getMessage());
        }
    }

    /**
     * Aggiorna una foto
     */
    public function updatePhoto(int $id, array $data): bool
    {
        try {
            if ($id <= 0) {
                throw new Exception("ID foto non valido");
            }

            // Validazione business logic
            if (isset($data['title']) && (empty($data['title']) || strlen($data['title']) > 255)) {
                throw new Exception("Titolo non valido");
            }

            if (isset($data['file_size']) && $data['file_size'] <= 0) {
                throw new Exception("Dimensione file non valida");
            }

            if (isset($data['mime_type'])) {
                $allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
                if (!in_array($data['mime_type'], $allowedMimeTypes)) {
                    throw new Exception("Tipo file non supportato");
                }
            }

            // Verifica se la foto esiste
            if (!$this->photoRepository->find($id)) {
                throw new Exception("Foto non trovata");
            }

            return $this->photoRepository->update($id, $data);
        } catch (Exception $e) {
            throw new Exception("Errore aggiornamento foto: " . $e->getMessage());
        }
    }

    /**
     * Elimina una foto
     */
    public function deletePhoto(int $id): bool
    {
        try {
            if ($id <= 0) {
                throw new Exception("ID foto non valido");
            }

            // Verifica se la foto esiste
            if (!$this->photoRepository->find($id)) {
                throw new Exception("Foto non trovata");
            }

            return $this->photoRepository->delete($id);
        } catch (Exception $e) {
            throw new Exception("Errore eliminazione foto: " . $e->getMessage());
        }
    }

    /**
     * Cerca foto per titolo
     */
    public function searchPhotosByTitle(string $title): array
    {
        try {
            if (strlen($title) < 2) {
                throw new Exception("Query di ricerca troppo corta (min 2 caratteri)");
            }

            return $this->photoRepository->findByTitle($title);
        } catch (Exception $e) {
            throw new Exception("Errore ricerca foto: " . $e->getMessage());
        }
    }

    /**
     * Ottiene foto recenti
     */
    public function getRecentPhotos(int $limit = 10): array
    {
        try {
            if ($limit <= 0 || $limit > 100) {
                throw new Exception("Limite non valido (1-100)");
            }

            return $this->photoRepository->getRecentPhotos($limit);
        } catch (Exception $e) {
            throw new Exception("Errore recupero foto recenti: " . $e->getMessage());
        }
    }

    /**
     * Ottiene foto per tipo MIME
     */
    public function getPhotosByMimeType(string $mimeType): array
    {
        try {
            $allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
            if (!in_array($mimeType, $allowedMimeTypes)) {
                throw new Exception("Tipo MIME non supportato");
            }

            return $this->photoRepository->findByMimeType($mimeType);
        } catch (Exception $e) {
            throw new Exception("Errore recupero foto per tipo: " . $e->getMessage());
        }
    }

    /**
     * Conta il numero totale di foto
     */
    public function countPhotos(): int
    {
        try {
            return $this->photoRepository->count();
        } catch (Exception $e) {
            throw new Exception("Errore conteggio foto: " . $e->getMessage());
        }
    }
}
