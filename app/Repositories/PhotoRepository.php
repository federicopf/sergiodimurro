<?php

namespace App\Repositories;

use App\Services\DatabaseService;
use App\Repositories\RepositoryInterface;

class PhotoRepository implements RepositoryInterface
{
    public function __construct(private DatabaseService $database) {}

    public function all(): array
    {
        $sql = "SELECT * FROM photos ORDER BY created_at DESC";
        return $this->database->select($sql);
    }

    public function find(int $id): ?array
    {
        $sql = "SELECT * FROM photos WHERE id = ?";
        $result = $this->database->select($sql, [$id]);
        return $result[0] ?? null;
    }

    public function create(array $data): array
    {
        $sql = "INSERT INTO photos (title, description, filename, file_path, file_size, mime_type) VALUES (?, ?, ?, ?, ?, ?)";
        $this->database->execute($sql, [
            $data['title'],
            $data['description'] ?? null,
            $data['filename'],
            $data['file_path'],
            $data['file_size'],
            $data['mime_type']
        ]);
        
        $photoId = $this->database->lastInsertId();
        return $this->find($photoId);
    }

    public function update(int $id, array $data): bool
    {
        $updates = [];
        $params = [];
        
        if (isset($data['title'])) {
            $updates[] = "title = ?";
            $params[] = $data['title'];
        }
        
        if (isset($data['description'])) {
            $updates[] = "description = ?";
            $params[] = $data['description'];
        }
        
        if (isset($data['filename'])) {
            $updates[] = "filename = ?";
            $params[] = $data['filename'];
        }
        
        if (isset($data['file_path'])) {
            $updates[] = "file_path = ?";
            $params[] = $data['file_path'];
        }
        
        if (isset($data['file_size'])) {
            $updates[] = "file_size = ?";
            $params[] = $data['file_size'];
        }
        
        if (isset($data['mime_type'])) {
            $updates[] = "mime_type = ?";
            $params[] = $data['mime_type'];
        }
        
        if (empty($updates)) {
            return false;
        }
        
        $updates[] = "updated_at = CURRENT_TIMESTAMP";
        $params[] = $id;
        
        $sql = "UPDATE photos SET " . implode(", ", $updates) . " WHERE id = ?";
        $this->database->execute($sql, $params);
        
        return true;
    }

    public function delete(int $id): bool
    {
        $sql = "DELETE FROM photos WHERE id = ?";
        $this->database->execute($sql, [$id]);
        return true;
    }

    public function count(): int
    {
        $sql = "SELECT COUNT(*) as count FROM photos";
        $result = $this->database->select($sql);
        return (int) ($result[0]['count'] ?? 0);
    }

    // Metodi specifici per Photo
    public function findByTitle(string $title): array
    {
        $sql = "SELECT * FROM photos WHERE title LIKE ? ORDER BY created_at DESC";
        $searchTerm = "%{$title}%";
        return $this->database->select($sql, [$searchTerm]);
    }

    public function findByMimeType(string $mimeType): array
    {
        $sql = "SELECT * FROM photos WHERE mime_type = ? ORDER BY created_at DESC";
        return $this->database->select($sql, [$mimeType]);
    }

    public function getRecentPhotos(int $limit = 10): array
    {
        $sql = "SELECT * FROM photos ORDER BY created_at DESC LIMIT ?";
        return $this->database->select($sql, [$limit]);
    }

    public function getPhotosBySizeRange(int $minSize, int $maxSize): array
    {
        $sql = "SELECT * FROM photos WHERE file_size BETWEEN ? AND ? ORDER BY file_size ASC";
        return $this->database->select($sql, [$minSize, $maxSize]);
    }
}
