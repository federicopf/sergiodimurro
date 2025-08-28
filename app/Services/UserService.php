<?php

namespace App\Services;

use App\Repositories\UserRepository;
use Exception;

class UserService
{
    public function __construct(private UserRepository $userRepository) {}

    /**
     * Crea un nuovo utente
     */
    public function createUser(string $name, string $email): array
    {
        try {
            // Validazione business logic
            if (empty($name) || empty($email)) {
                throw new Exception("Nome ed email sono obbligatori");
            }

            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                throw new Exception("Email non valida");
            }

            // Verifica se l'email esiste già
            if ($this->userRepository->findByEmail($email)) {
                throw new Exception("Email già registrata");
            }

            return $this->userRepository->create([
                'name' => $name,
                'email' => $email
            ]);
        } catch (Exception $e) {
            throw new Exception("Errore creazione utente: " . $e->getMessage());
        }
    }

    /**
     * Ottiene tutti gli utenti
     */
    public function getAllUsers(): array
    {
        try {
            return $this->userRepository->all();
        } catch (Exception $e) {
            throw new Exception("Errore recupero utenti: " . $e->getMessage());
        }
    }

    /**
     * Ottiene un utente per ID
     */
    public function getUserById(int $id): ?array
    {
        try {
            if ($id <= 0) {
                throw new Exception("ID utente non valido");
            }

            return $this->userRepository->find($id);
        } catch (Exception $e) {
            throw new Exception("Errore recupero utente: " . $e->getMessage());
        }
    }

    /**
     * Ottiene un utente per email
     */
    public function getUserByEmail(string $email): ?array
    {
        try {
            if (empty($email)) {
                throw new Exception("Email non può essere vuota");
            }

            return $this->userRepository->findByEmail($email);
        } catch (Exception $e) {
            throw new Exception("Errore recupero utente per email: " . $e->getMessage());
        }
    }

    /**
     * Aggiorna un utente
     */
    public function updateUser(int $id, array $data): bool
    {
        try {
            if ($id <= 0) {
                throw new Exception("ID utente non valido");
            }

            // Validazione business logic
            if (isset($data['email']) && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
                throw new Exception("Email non valida");
            }

            // Verifica se l'utente esiste
            if (!$this->userRepository->find($id)) {
                throw new Exception("Utente non trovato");
            }

            return $this->userRepository->update($id, $data);
        } catch (Exception $e) {
            throw new Exception("Errore aggiornamento utente: " . $e->getMessage());
        }
    }

    /**
     * Elimina un utente
     */
    public function deleteUser(int $id): bool
    {
        try {
            if ($id <= 0) {
                throw new Exception("ID utente non valido");
            }

            // Verifica se l'utente esiste
            if (!$this->userRepository->find($id)) {
                throw new Exception("Utente non trovato");
            }

            return $this->userRepository->delete($id);
        } catch (Exception $e) {
            throw new Exception("Errore eliminazione utente: " . $e->getMessage());
        }
    }

    /**
     * Conta il numero totale di utenti
     */
    public function countUsers(): int
    {
        try {
            return $this->userRepository->count();
        } catch (Exception $e) {
            throw new Exception("Errore conteggio utenti: " . $e->getMessage());
        }
    }
}
