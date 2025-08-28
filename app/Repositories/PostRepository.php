<?php

namespace App\Repositories;

use App\Services\DatabaseService;
use App\Repositories\RepositoryInterface;

class PostRepository implements RepositoryInterface
{
    public function __construct(private DatabaseService $database) {}

    public function all(): array
    {
        $sql = "
            SELECT p.*, u.name as author_name 
            FROM posts p 
            LEFT JOIN users u ON p.user_id = u.id 
            ORDER BY p.created_at DESC
        ";
        return $this->database->select($sql);
    }

    public function find(int $id): ?array
    {
        $sql = "
            SELECT p.*, u.name as author_name 
            FROM posts p 
            LEFT JOIN users u ON p.user_id = u.id 
            WHERE p.id = ?
        ";
        $result = $this->database->select($sql, [$id]);
        return $result[0] ?? null;
    }

    public function create(array $data): array
    {
        $sql = "INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)";
        $this->database->execute($sql, [$data['title'], $data['content'], $data['user_id']]);
        
        $postId = $this->database->lastInsertId();
        return $this->find($postId);
    }

    public function update(int $id, array $data): bool
    {
        $updates = [];
        $params = [];
        
        if (isset($data['title'])) {
            $updates[] = "title = ?";
            $params[] = $data['title'];
        }
        
        if (isset($data['content'])) {
            $updates[] = "content = ?";
            $params[] = $data['content'];
        }
        
        if (empty($updates)) {
            return false;
        }
        
        $updates[] = "updated_at = CURRENT_TIMESTAMP";
        $params[] = $id;
        
        $sql = "UPDATE posts SET " . implode(", ", $updates) . " WHERE id = ?";
        $this->database->execute($sql, $params);
        
        return true;
    }

    public function delete(int $id): bool
    {
        $sql = "DELETE FROM posts WHERE id = ?";
        $this->database->execute($sql, [$id]);
        return true;
    }

    public function count(): int
    {
        $sql = "SELECT COUNT(*) as count FROM posts";
        $result = $this->database->select($sql);
        return (int) ($result[0]['count'] ?? 0);
    }

    // Metodi specifici per Post
    public function findByUserId(int $userId): array
    {
        $sql = "SELECT * FROM posts WHERE user_id = ? ORDER BY created_at DESC";
        return $this->database->select($sql, [$userId]);
    }

    public function search(string $query): array
    {
        $searchTerm = "%{$query}%";
        $sql = "
            SELECT p.*, u.name as author_name 
            FROM posts p 
            LEFT JOIN users u ON p.user_id = u.id 
            WHERE p.title LIKE ? OR p.content LIKE ?
            ORDER BY p.created_at DESC
        ";
        return $this->database->select($sql, [$searchTerm, $searchTerm]);
    }
}
