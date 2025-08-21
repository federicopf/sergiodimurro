# Frontend Structure - Laravel Inertia React

Questa documentazione descrive la struttura frontend migliorata del progetto Laravel Inertia React, seguendo le best practices moderne.

## 📁 Struttura delle Cartelle

```
resources/js/
├── Components/           # Componenti riutilizzabili
│   ├── UI/              # Componenti UI di base
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   ├── Modal.jsx
│   │   ├── DataTable.jsx
│   │   └── index.js
│   └── index.js
├── Layouts/              # Layout delle pagine
│   ├── AuthenticatedLayout.jsx
│   ├── GuestLayout.jsx
│   └── index.js
├── Hooks/                # Hooks personalizzati
│   ├── useLocalStorage.js
│   ├── useDebounce.js
│   ├── useClickOutside.js
│   └── index.js
├── utils/                # Utility functions
│   ├── cn.js            # Gestione classi CSS
│   ├── format.js        # Formattazione date/numeri
│   ├── validation.js    # Validazione form
│   └── index.js
├── constants/            # Costanti dell'applicazione
│   └── index.js
├── Pages/                # Pagine dell'applicazione
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   └── ...
├── app.jsx              # Entry point principale
└── bootstrap.js
```

## 🧩 Componenti UI

### Button
Componente pulsante con varianti multiple:
- **Varianti**: primary, secondary, success, danger, outline, ghost
- **Dimensioni**: sm, md, lg, xl
- **Stati**: loading, disabled
- **Props**: onClick, className, children

```jsx
<Button variant="primary" size="lg" loading={isLoading}>
  Salva
</Button>
```

### Input
Campo di input con validazione e icone:
- **Props**: label, error, helperText, leftIcon, rightIcon
- **Validazione**: error state con messaggi
- **Accessibilità**: label associato, focus states

```jsx
<Input
  label="Email"
  type="email"
  error={errors.email}
  leftIcon={<EmailIcon />}
  placeholder="la-tua-email@example.com"
/>
```

### Card
Sistema di card modulare:
- **Componenti**: Card, CardHeader, CardBody, CardFooter
- **Responsive**: adattivo a diverse dimensioni
- **Personalizzabile**: className, children

```jsx
<Card>
  <CardHeader>
    <h3>Titolo Card</h3>
  </CardHeader>
  <CardBody>
    Contenuto della card
  </CardBody>
  <CardFooter>
    <Button>Azione</Button>
  </CardFooter>
</Card>
```

### Modal
Modal responsive con overlay:
- **Dimensioni**: sm, md, lg, xl, full
- **Accessibilità**: ESC per chiudere, focus management
- **Componenti**: ModalHeader, ModalBody, ModalFooter

```jsx
<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
  <ModalHeader onClose={() => setShowModal(false)}>
    Titolo Modal
  </ModalHeader>
  <ModalBody>
    Contenuto del modal
  </ModalBody>
  <ModalFooter>
    <Button onClick={() => setShowModal(false)}>Chiudi</Button>
  </ModalFooter>
</Modal>
```

### DataTable
Tabella dati avanzata con:
- **Ricerca**: filtro in tempo reale
- **Ordinamento**: click per ordinare colonne
- **Paginazione**: navigazione tra pagine
- **Personalizzabile**: colonne, rendering custom

```jsx
<DataTable
  data={orders}
  columns={columns}
  searchable={true}
  sortable={true}
  pagination={true}
  pageSize={10}
/>
```

## 🎨 Layouts

### AuthenticatedLayout
Layout per utenti autenticati con:
- **Sidebar**: navigazione principale
- **Header**: barra superiore con azioni
- **Responsive**: mobile-first design
- **Navigazione**: menu dinamico

### GuestLayout
Layout per utenti non autenticati:
- **Centrato**: design pulito e moderno
- **Branding**: logo e titolo app
- **Link**: navigazione verso login/register

## 🪝 Hooks Personalizzati

### useLocalStorage
Gestione sicura del localStorage:
- **SSR Safe**: funziona con server-side rendering
- **Error Handling**: gestione errori JSON
- **API**: simile a useState

```jsx
const [theme, setTheme] = useLocalStorage('theme', 'light');
```

### useDebounce
Debounce di valori per performance:
- **Delay**: configurabile
- **Cleanup**: automatico
- **Use case**: ricerca, filtri

```jsx
const debouncedSearch = useDebounce(searchTerm, 500);
```

### useClickOutside
Rileva click fuori da elemento:
- **Eventi**: mouse e touch
- **Cleanup**: automatico
- **Use case**: dropdown, modal

```jsx
const ref = useClickOutside(() => setIsOpen(false));
```

## 🛠️ Utility Functions

### cn (className)
Gestione classi CSS condizionali:
- **clsx**: combinazione classi
- **tailwind-merge**: merge intelligente Tailwind
- **TypeScript**: supporto completo

```jsx
className={cn(
  'base-classes',
  condition && 'conditional-classes',
  className
)}
```

### Formattazione
Utility per formattazione dati:
- **Date**: formatDate, formatRelativeTime
- **Numeri**: formatNumber, formatCurrency
- **Stringhe**: capitalize, truncate, slugify

### Validazione
Sistema di validazione form:
- **Regole**: required, email, minLength, pattern
- **Messaggi**: personalizzabili
- **Validazione**: client-side e server-side

## 🎯 Best Practices Implementate

### 1. Componenti Riutilizzabili
- **Composizione**: componenti modulari e flessibili
- **Props**: interfacce chiare e documentate
- **Varianti**: sistema di varianti coerente

### 2. Performance
- **Memoization**: useMemo per calcoli costosi
- **Debouncing**: per input e ricerche
- **Lazy Loading**: componenti caricati on-demand

### 3. Accessibilità
- **ARIA**: attributi per screen reader
- **Keyboard**: navigazione da tastiera
- **Focus**: gestione focus states

### 4. Responsive Design
- **Mobile First**: design mobile-first
- **Breakpoints**: sistema breakpoint coerente
- **Flexbox/Grid**: layout moderni e flessibili

### 5. Type Safety
- **PropTypes**: validazione props
- **Default Props**: valori di default
- **Error Boundaries**: gestione errori

## 🚀 Come Utilizzare

### 1. Import Componenti
```jsx
import { Button, Input, Card } from '../Components/UI';
```

### 2. Import Layouts
```jsx
import { AuthenticatedLayout } from '../Layouts';
```

### 3. Import Hooks
```jsx
import { useLocalStorage, useDebounce } from '../Hooks';
```

### 4. Import Utilities
```jsx
import { cn, formatDate, validateForm } from '../utils';
```

## 📱 Responsive Breakpoints

- **sm**: 640px+
- **md**: 768px+
- **lg**: 1024px+
- **xl**: 1280px+
- **2xl**: 1536px+

## 🎨 Sistema Colori

- **Primary**: Blu (#3B82F6)
- **Success**: Verde (#22C55E)
- **Warning**: Giallo (#F59E0B)
- **Danger**: Rosso (#EF4444)
- **Gray**: Scala grigi neutri

## 🔧 Configurazione Tailwind

Il progetto include:
- **Plugin**: forms, typography, aspect-ratio
- **Colori**: palette personalizzata
- **Animazioni**: keyframes custom
- **Spacing**: valori aggiuntivi
- **Shadows**: ombre personalizzate

## 📚 Risorse Aggiuntive

- **Tailwind CSS**: https://tailwindcss.com/
- **React**: https://reactjs.org/
- **Inertia.js**: https://inertiajs.com/
- **Heroicons**: https://heroicons.com/

## 🤝 Contribuire

1. Segui la struttura esistente
2. Mantieni la coerenza dei componenti
3. Aggiungi documentazione per nuovi componenti
4. Testa su diversi dispositivi
5. Verifica l'accessibilità
