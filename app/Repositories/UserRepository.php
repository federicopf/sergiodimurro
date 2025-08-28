<?php

namespace App\Repositories;

use App\Services\DatabaseService;
use App\Repositories\RepositoryInterface;

class UserRepository implements RepositoryInterface
{
    public function __construct(private DatabaseService $database) {}

    public function all(): array
    {
        $sql = "SELECT * FROM users ORDER BY created_at DESC";
        return $this->database->select($sql);
    }

    public function find(int $id): ?array
    {
        $sql = "SELECT * FROM users WHERE id = ?";
        $result = $this->database->select($sql, [$id]);
        return $result[0] ?? null;
    }

    public function create(array $data): array
    {
        $sql = "INSERT INTO users (name, email) VALUES (?, ?)";
        $this->database->execute($sql, [$data['name'], $data['email']]);
        
        $userId = $this->database->lastInsertId();
        return $this->find($userId);
    }

    public function update(int $id, array $data): bool
    {
        $updates = [];
        $params = [];
        
        if (isset($data['name'])) {
            $updates[] = "name = ?";
            $params[] = $data['name'];
        }
        
        if (isset($data['email'])) {
            $updates[] = "email = ?";
            $params[] = $data['email'];
        }
        
        if (empty($updates)) {
            return false;
        }
        
        $updates[] = "updated_at = CURRENT_TIMESTAMP";
        $params[] = $id;
        
        $sql = "UPDATE users SET " . implode(", ", $updates) . " WHERE id = ?";
        $this->database->execute($sql, $params);
        
        return true;
    }

    public function delete(int $id): bool
    {
        $sql = "DELETE FROM users WHERE id = ?";
        $this->database->execute($sql, [$id]);
        return true;
    }

    public function count(): int
    {
        $sql = "SELECT COUNT(*) as count FROM users";
        $result = $this->database->select($sql);
        return (int) ($result[0]['count'] ?? 0);
    }

    // Metodi specifici per User
    public function findByEmail(string $email): ?array
    {
        $sql = "SELECT * FROM users WHERE email = ?";
        $result = $this->database->select($sql, [$email]);
        return $result[0] ?? null;
    }
}
