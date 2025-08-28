# Integrazione SQLite con Architettura a Servizi

Questo progetto include un'integrazione completa di SQLite nel backend Laravel con architettura a servizi.

## 🏗️ Struttura dell'Architettura

```
app/
├── Services/
│   ├── DatabaseService.php      # Servizio base per SQLite
│   ├── UserService.php          # Gestione utenti
│   └── PostService.php          # Gestione post
├── Http/Controllers/
│   └── ApiController.php        # Controller API per test
├── Console/Commands/
│   └── PopulateSqliteCommand.php # Comando per popolare il DB
└── Providers/
    └── SqliteServiceProvider.php # Service Provider
```

## 🚀 Installazione e Setup

### 1. Il database SQLite viene creato automaticamente
Il `DatabaseService` crea automaticamente:
- Directory: `database/sqlite/`
- File: `database/sqlite/database.sqlite`
- Tabelle: `users` e `posts`

### 2. Registrazione dei Servizi
I servizi sono registrati nel `SqliteServiceProvider` e disponibili per dependency injection.

## 📡 API Endpoints

### Test
- `GET /api/sqlite/test` - Verifica funzionamento

### Utenti
- `POST /api/sqlite/users` - Crea utente
- `GET /api/sqlite/users` - Lista tutti gli utenti
- `GET /api/sqlite/users/{id}` - Dettagli utente

### Post
- `POST /api/sqlite/posts` - Crea post
- `GET /api/sqlite/posts` - Lista tutti i post
- `GET /api/sqlite/posts/{id}` - Dettagli post
- `GET /api/sqlite/posts/search?q=query` - Cerca post

## 🛠️ Comandi Artisan

### Popola il database con dati di esempio
```bash
php artisan sqlite:populate
```

### Crea un numero specifico di utenti
```bash
php artisan sqlite:populate --count=10
```

## 💻 Utilizzo dei Servizi

### Nel Controller
```php
use App\Services\UserService;
use App\Services\PostService;

class MyController extends Controller
{
    public function __construct(
        private UserService $userService,
        private PostService $postService
    ) {}

    public function index()
    {
        $users = $this->userService->getAllUsers();
        $posts = $this->postService->getAllPosts();
        
        return response()->json([
            'users' => $users,
            'posts' => $posts
        ]);
    }
}
```

### Creazione Utente
```php
$user = $this->userService->createUser('Mario Rossi', 'mario@example.com');
```

### Creazione Post
```php
$post = $this->postService->createPost('Titolo', 'Contenuto', $userId);
```

## 🔧 Caratteristiche dei Servizi

### DatabaseService
- ✅ Connessione PDO SQLite
- ✅ Creazione automatica tabelle
- ✅ Gestione transazioni
- ✅ Prepared statements sicuri
- ✅ Gestione errori

### UserService
- ✅ CRUD completo utenti
- ✅ Ricerca per ID e email
- ✅ Conteggio utenti
- ✅ Validazione dati

### PostService
- ✅ CRUD completo post
- ✅ Ricerca per titolo/contenuto
- ✅ Join con utenti
- ✅ Ordinamento per data

## 🧪 Test dell'Integrazione

### 1. Avvia il server
```bash
php artisan serve
```

### 2. Popola il database
```bash
php artisan sqlite:populate
```

### 3. Testa gli endpoint
```bash
# Test generale
curl http://localhost:8000/api/sqlite/test

# Lista utenti
curl http://localhost:8000/api/sqlite/users

# Lista post
curl http://localhost:8000/api/sqlite/posts
```

## 📊 Struttura Database

### Tabella `users`
```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Tabella `posts`
```sql
CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT,
    user_id INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id)
);
```

## 🔒 Sicurezza

- ✅ Prepared statements per prevenire SQL injection
- ✅ Validazione input con Laravel
- ✅ Gestione errori centralizzata
- ✅ Transazioni per operazioni complesse

## 🚀 Vantaggi dell'Architettura

1. **Separazione delle responsabilità** - Ogni servizio ha un compito specifico
2. **Riutilizzabilità** - I servizi possono essere usati in più controller
3. **Testabilità** - Facile da testare con mock
4. **Manutenibilità** - Codice organizzato e documentato
5. **Scalabilità** - Facile aggiungere nuovi servizi

## 📝 Note

- Il database SQLite è perfetto per sviluppo e test
- Per produzione, considera MySQL/PostgreSQL
- I servizi sono registrati come singleton/bind nel container Laravel
- Tutti i metodi includono gestione errori robusta
