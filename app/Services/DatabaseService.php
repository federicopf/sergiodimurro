<?php

namespace App\Services;

use PDO;
use PDOException;
use Exception;

class DatabaseService
{
    private PDO $connection;
    private string $databasePath;

    public function __construct()
    {
        $this->databasePath = database_path('sqlite/database.sqlite');
        $this->initializeDatabase();
    }

    /**
     * Inizializza il database SQLite
     */
    private function initializeDatabase(): void
    {
        try {
            // Crea la directory se non esiste
            $directory = dirname($this->databasePath);
            if (!is_dir($directory)) {
                mkdir($directory, 0755, true);
            }

            // Crea il file database se non esiste
            if (!file_exists($this->databasePath)) {
                touch($this->databasePath);
            }

            // Connessione PDO
            $this->connection = new PDO("sqlite:{$this->databasePath}");
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

            // Crea le tabelle se non esistono
            $this->createTables();

        } catch (PDOException $e) {
            throw new Exception("Errore connessione database: " . $e->getMessage());
        }
    }

    /**
     * Crea le tabelle di base
     */
    private function createTables(): void
    {
        $sql = "
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS posts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                content TEXT,
                user_id INTEGER,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users (id)
            );
        ";

        $this->connection->exec($sql);
    }

    /**
     * Esegue una query SELECT
     */
    public function select(string $sql, array $params = []): array
    {
        try {
            $stmt = $this->connection->prepare($sql);
            $stmt->execute($params);
            return $stmt->fetchAll();
        } catch (PDOException $e) {
            throw new Exception("Errore query SELECT: " . $e->getMessage());
        }
    }

    /**
     * Esegue una query INSERT, UPDATE, DELETE
     */
    public function execute(string $sql, array $params = []): int
    {
        try {
            $stmt = $this->connection->prepare($sql);
            $stmt->execute($params);
            return $stmt->rowCount();
        } catch (PDOException $e) {
            throw new Exception("Errore query execute: " . $e->getMessage());
        }
    }

    /**
     * Ottiene l'ultimo ID inserito
     */
    public function lastInsertId(): string
    {
        return $this->connection->lastInsertId();
    }

    /**
     * Inizia una transazione
     */
    public function beginTransaction(): void
    {
        $this->connection->beginTransaction();
    }

    /**
     * Committa una transazione
     */
    public function commit(): void
    {
        $this->connection->commit();
    }

    /**
     * Rollback di una transazione
     */
    public function rollback(): void
    {
        $this->connection->rollback();
    }

    /**
     * Chiude la connessione
     */
    public function close(): void
    {
        unset($this->connection);
    }
}
