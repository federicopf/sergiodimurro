import React, { useState } from 'react';
import { AuthenticatedLayout } from '../Layouts';
import { 
  Button, 
  Input, 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  Badge, 
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  DataTable
} from '../Components/UI';
import { useLocalStorage } from '../Hooks';

const ComponentsShowcase = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('primary');
  const [selectedSize, setSelectedSize] = useState('md');

  // Sample data for DataTable
  const sampleData = [
    { id: 1, name: 'Mario Rossi', email: 'mario@example.com', role: 'admin', status: 'active', date: '2024-01-15' },
    { id: 2, name: 'Giulia Bianchi', email: 'giulia@example.com', role: 'user', status: 'inactive', date: '2024-01-14' },
    { id: 3, name: 'Luca Verdi', email: 'luca@example.com', role: 'moderator', status: 'active', date: '2024-01-13' },
  ];

  const tableColumns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Nome' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Ruolo' },
    { key: 'status', label: 'Stato', type: 'status' },
    { key: 'date', label: 'Data', type: 'date' },
  ];

  return (
    <AuthenticatedLayout header="Showcase Componenti">
      <div className="space-y-8">
        {/* Buttons Section */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900">Buttons</h2>
          </CardHeader>
          <CardBody>
            <div className="space-y-6">
              {/* Button Variants */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Varianti</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="danger">Danger</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>

              {/* Button Sizes */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Dimensioni</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
              </div>

              {/* Button States */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Stati</h3>
                <div className="flex flex-wrap gap-3">
                  <Button loading={true}>Loading</Button>
                  <Button disabled={true}>Disabled</Button>
                  <Button variant="outline" disabled={true}>Disabled Outline</Button>
                </div>
              </div>

              {/* Interactive Button */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Interattivo</h3>
                <div className="flex items-center gap-4">
                  <select
                    value={selectedVariant}
                    onChange={(e) => setSelectedVariant(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2"
                  >
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                    <option value="success">Success</option>
                    <option value="danger">Danger</option>
                    <option value="outline">Outline</option>
                    <option value="ghost">Ghost</option>
                  </select>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2"
                  >
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                  </select>
                  <Button variant={selectedVariant} size={selectedSize}>
                    Button Dinamico
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Inputs Section */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900">Inputs</h2>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Input Standard"
                placeholder="Placeholder standard"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              
              <Input
                label="Input con Icona"
                placeholder="Input con icona a sinistra"
                leftIcon={
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                }
              />
              
              <Input
                label="Input con Errore"
                placeholder="Input con messaggio di errore"
                error="Questo campo è obbligatorio"
              />
              
              <Input
                label="Input con Helper Text"
                placeholder="Input con testo di aiuto"
                helperText="Questo testo ti aiuta a capire cosa inserire"
              />
              
              <Input
                label="Input Disabilitato"
                placeholder="Input disabilitato"
                disabled={true}
              />
              
              <Input
                label="Input Password"
                type="password"
                placeholder="Inserisci la password"
                rightIcon={
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                }
              />
            </div>
          </CardBody>
        </Card>

        {/* Badges Section */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900">Badges</h2>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Varianti</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="danger">Danger</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Dimensioni</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Cards Section */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900">Cards</h2>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-medium text-gray-900">Card Completa</h3>
                </CardHeader>
                <CardBody>
                  <p className="text-gray-600">
                    Questa è una card completa con header, body e footer.
                    Può contenere qualsiasi tipo di contenuto.
                  </p>
                </CardBody>
                <CardFooter>
                  <Button size="sm">Azione</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardBody>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Card Semplice</h3>
                  <p className="text-gray-600">
                    Questa è una card semplice con solo il body.
                    Perfetta per contenuti semplici.
                  </p>
                </CardBody>
              </Card>
            </div>
          </CardBody>
        </Card>

        {/* DataTable Section */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900">DataTable</h2>
          </CardHeader>
          <CardBody>
            <DataTable
              data={sampleData}
              columns={tableColumns}
              searchable={true}
              sortable={true}
              pagination={false}
            />
          </CardBody>
        </Card>

        {/* Modal Section */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900">Modal</h2>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <p className="text-gray-600">
                Clicca il pulsante qui sotto per aprire un modal di esempio.
              </p>
              <Button onClick={() => setShowModal(true)}>
                Apri Modal
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Modal Example */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <ModalHeader onClose={() => setShowModal(false)}>
          <h3 className="text-lg font-medium text-gray-900">Modal di Esempio</h3>
        </ModalHeader>
        <ModalBody>
          <div className="space-y-4">
            <p className="text-gray-600">
              Questo è un modal di esempio che mostra come utilizzare i componenti Modal.
              Può contenere qualsiasi tipo di contenuto, inclusi form, immagini, o testo.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Caratteristiche del Modal:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Responsive e mobile-friendly</li>
                <li>• Chiusura con ESC o click fuori</li>
                <li>• Focus management automatico</li>
                <li>• Overlay con backdrop</li>
                <li>• Dimensioni configurabili</li>
              </ul>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={() => setShowModal(false)}>
            Chiudi
          </Button>
          <Button onClick={() => setShowModal(false)}>
            Conferma
          </Button>
        </ModalFooter>
      </Modal>
    </AuthenticatedLayout>
  );
};

export default ComponentsShowcase;
