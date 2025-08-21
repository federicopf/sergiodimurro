import React, { useState } from 'react';
import { AuthenticatedLayout } from '../Layouts';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  Badge, 
  DataTable,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from '../Components/UI';
import { useLocalStorage, useDebounce } from '../Hooks';
import { formatDate, formatCurrency } from '../utils';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  // Sample data for the dashboard
  const stats = [
    { name: 'Utenti Totali', value: '2,847', change: '+12%', changeType: 'positive' },
    { name: 'Vendite Mensili', value: formatCurrency(45600), change: '+8.2%', changeType: 'positive' },
    { name: 'Ordini Pendenti', value: '23', change: '-2.1%', changeType: 'negative' },
    { name: 'Tasso di Conversione', value: '3.24%', change: '+0.8%', changeType: 'positive' },
  ];

  const recentOrders = [
    { id: 1, customer: 'Mario Rossi', amount: 120.50, status: 'completed', date: '2024-01-15' },
    { id: 2, customer: 'Giulia Bianchi', amount: 89.99, status: 'pending', date: '2024-01-14' },
    { id: 3, customer: 'Luca Verdi', amount: 245.00, status: 'completed', date: '2024-01-13' },
    { id: 4, customer: 'Anna Neri', amount: 67.50, status: 'cancelled', date: '2024-01-12' },
  ];

  const tableColumns = [
    { key: 'id', label: 'ID', sortable: false },
    { key: 'customer', label: 'Cliente' },
    { key: 'amount', label: 'Importo', type: 'number' },
    { key: 'status', label: 'Stato', type: 'status' },
    { key: 'date', label: 'Data', type: 'date' },
    {
      key: 'actions',
      label: 'Azioni',
      sortable: false,
      render: (value, item) => (
        <div className="flex space-x-2">
          <Button size="sm" variant="outline">Visualizza</Button>
          <Button size="sm" variant="danger">Elimina</Button>
        </div>
      )
    }
  ];

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <AuthenticatedLayout header="Dashboard">
      <div className="space-y-6">
        {/* Header with actions */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Panoramica generale della tua attività</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" onClick={toggleTheme}>
              {theme === 'light' ? '🌙' : '☀️'} Tema
            </Button>
            <Button onClick={() => setShowModal(true)}>
              Nuovo Ordine
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.name}>
              <CardBody>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <Badge 
                    variant={stat.changeType === 'positive' ? 'success' : 'danger'}
                    size="sm"
                  >
                    {stat.change}
                  </Badge>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-medium text-gray-900">Ordini Recenti</h3>
          </CardHeader>
          <CardBody>
            <DataTable
              data={recentOrders}
              columns={tableColumns}
              searchable={true}
              sortable={true}
              pagination={false}
            />
          </CardBody>
          <CardFooter>
            <Button variant="outline" size="sm">
              Visualizza Tutti gli Ordini
            </Button>
          </CardFooter>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardBody className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Nuovo Prodotto</h4>
              <p className="text-sm text-gray-600 mb-4">Aggiungi un nuovo prodotto al catalogo</p>
              <Button size="sm">Inizia</Button>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Report</h4>
              <p className="text-sm text-gray-600 mb-4">Genera report dettagliati</p>
              <Button size="sm" variant="outline">Genera</Button>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Impostazioni</h4>
              <p className="text-sm text-gray-600 mb-4">Configura le preferenze</p>
              <Button size="sm" variant="outline">Configura</Button>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Modal Example */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <ModalHeader onClose={() => setShowModal(false)}>
          <h3 className="text-lg font-medium text-gray-900">Nuovo Ordine</h3>
        </ModalHeader>
        <ModalBody>
          <div className="space-y-4">
            <Input
              label="Nome Cliente"
              placeholder="Inserisci il nome del cliente"
              required
            />
            <Input
              label="Email"
              type="email"
              placeholder="cliente@example.com"
              required
            />
            <Input
              label="Importo"
              type="number"
              placeholder="0.00"
              step="0.01"
              required
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Note
              </label>
              <textarea
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                rows={3}
                placeholder="Note aggiuntive..."
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={() => setShowModal(false)}>
            Annulla
          </Button>
          <Button onClick={() => setShowModal(false)}>
            Crea Ordine
          </Button>
        </ModalFooter>
      </Modal>
    </AuthenticatedLayout>
  );
};

export default Dashboard;
