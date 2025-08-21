# 🚀 Setup Progetto Laravel Inertia React

Questa guida ti aiuterà a configurare e utilizzare il progetto Laravel Inertia React con la nuova struttura frontend.

## 📋 Prerequisiti

- PHP 8.1+
- Composer
- Node.js 18+
- npm o yarn
- MySQL/PostgreSQL

## 🛠️ Installazione

### 1. Clona il Progetto
```bash
git clone <repository-url>
cd sergiodimurro
```

### 2. Installazione Dipendenze PHP
```bash
composer install
```

### 3. Installazione Dipendenze Node.js
```bash
npm install
```

### 4. Configurazione Ambiente
```bash
cp .env.example .env
php artisan key:generate
```

### 5. Configurazione Database
Modifica il file `.env` con le tue credenziali database:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=sergiodimurro
DB_USERNAME=root
DB_PASSWORD=
```

### 6. Migrazione Database
```bash
php artisan migrate
```

### 7. Avvio Sviluppo
```bash
# Terminal 1: Laravel
php artisan serve

# Terminal 2: Vite (Frontend)
npm run dev
```

## 🎯 Struttura Frontend

### Componenti Disponibili
- **Button**: Pulsanti con varianti multiple
- **Input**: Campi input con validazione
- **Card**: Sistema di card modulare
- **Badge**: Badge colorati per stati
- **Modal**: Modal responsive
- **DataTable**: Tabella dati avanzata

### Layouts
- **AuthenticatedLayout**: Per utenti loggati
- **GuestLayout**: Per utenti non autenticati

### Hooks Personalizzati
- **useLocalStorage**: Gestione localStorage
- **useDebounce**: Debounce valori
- **useClickOutside**: Rileva click fuori

## 📱 Pagine di Esempio

### Home (`/`)
- Landing page con hero section
- Features grid
- Call-to-action

### Dashboard (`/dashboard`)
- Layout autenticato
- Statistiche
- Tabella ordini recenti
- Azioni rapide

### Login (`/login`)
- Form di accesso
- Validazione client-side
- Layout guest

### Components Showcase (`/components-showcase`)
- Mostra tutti i componenti
- Esempi interattivi
- Documentazione visuale

## 🔧 Configurazione Tailwind

Il progetto include una configurazione Tailwind personalizzata:

```js
// tailwind.config.js
module.exports = {
  content: ["./resources/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { /* palette personalizzata */ },
        success: { /* palette personalizzata */ },
        warning: { /* palette personalizzata */ },
        danger: { /* palette personalizzata */ },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
```

## 📚 Come Utilizzare i Componenti

### Import Componenti
```jsx
import { Button, Input, Card } from '../Components/UI';
```

### Utilizzo Base
```jsx
<Button variant="primary" size="lg">
  Cliccami
</Button>

<Input
  label="Email"
  type="email"
  placeholder="la-tua-email@example.com"
/>

<Card>
  <CardBody>
    Contenuto della card
  </CardBody>
</Card>
```

### Layouts
```jsx
import { AuthenticatedLayout } from '../Layouts';

export default function Dashboard() {
  return (
    <AuthenticatedLayout header="Dashboard">
      {/* Contenuto della pagina */}
    </AuthenticatedLayout>
  );
}
```

### Hooks
```jsx
import { useLocalStorage, useDebounce } from '../Hooks';

function MyComponent() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const debouncedSearch = useDebounce(searchTerm, 500);
  
  // ...
}
```

## 🎨 Personalizzazione

### Colori
Modifica i colori nel file `tailwind.config.js`:

```js
colors: {
  primary: {
    500: '#your-color-here',
    // ...
  }
}
```

### Componenti
I componenti sono facilmente personalizzabili tramite props:

```jsx
<Button 
  variant="custom" 
  className="bg-purple-600 hover:bg-purple-700"
>
  Pulsante Personalizzato
</Button>
```

### Layouts
Crea nuovi layout estendendo quelli esistenti:

```jsx
import { AuthenticatedLayout } from '../Layouts';

const CustomLayout = ({ children, ...props }) => (
  <AuthenticatedLayout {...props}>
    <div className="custom-wrapper">
      {children}
    </div>
  </AuthenticatedLayout>
);
```

## 🚀 Sviluppo

### Creare Nuovi Componenti
1. Crea il file nella cartella appropriata
2. Aggiungi l'export nel file `index.js`
3. Documenta le props e l'utilizzo
4. Aggiungi esempi nel showcase

### Creare Nuove Pagine
1. Crea il file nella cartella `Pages`
2. Utilizza i layout appropriati
3. Importa i componenti necessari
4. Aggiungi la rotta in Laravel

### Testing
```bash
# Test PHP
php artisan test

# Test Frontend (se configurato)
npm run test
```

## 📖 Documentazione

- **FRONTEND_STRUCTURE.md**: Documentazione completa della struttura
- **Componenti**: Ogni componente ha commenti inline
- **Showcase**: Pagina interattiva con tutti i componenti

## 🔍 Debugging

### Laravel
```bash
php artisan route:list
php artisan config:cache
php artisan view:clear
```

### Frontend
```bash
npm run build
npm run dev -- --host
```

### Browser
- React DevTools
- Laravel Debugbar
- Network tab per API calls

## 🌟 Best Practices

1. **Componenti**: Riutilizzabili e modulari
2. **Props**: Interfacce chiare e documentate
3. **Layouts**: Separazione logica delle responsabilità
4. **Hooks**: Logica riutilizzabile
5. **Utilities**: Funzioni pure e testabili
6. **Responsive**: Mobile-first design
7. **Accessibilità**: ARIA e keyboard navigation

## 🆘 Supporto

- Controlla la documentazione
- Esamina i componenti esistenti
- Utilizza il showcase per esempi
- Controlla la console per errori

## 📝 Note

- Il progetto utilizza Tailwind CSS v4
- Inertia.js per SPA-like experience
- React 18 con hooks moderni
- Vite per build veloce
- Laravel 10+ per backend

---

**Happy Coding! 🎉**
