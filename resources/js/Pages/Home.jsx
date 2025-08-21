import React from 'react';
import { Link } from '@inertiajs/react';
import { Button, Card, CardHeader, CardBody } from '../Components/UI';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Benvenuto in{' '}
            <span className="text-blue-600">SergioDimurro</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Un'applicazione moderna e potente costruita con Laravel, Inertia.js e React.
            Scopri tutte le funzionalità disponibili.
          </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href={route('dashboard')}>
               <Button size="lg">
                 Vai alla Dashboard
               </Button>
             </Link>
             <Link href={route('login')}>
               <Button variant="outline" size="lg">
                 Accedi
               </Button>
             </Link>
           </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardBody className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600">
                Ottimizzata per velocità e scalabilità, con architettura moderna e best practices.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Affidabilità</h3>
              <p className="text-gray-600">
                Codice robusto e testato, con gestione degli errori avanzata e logging completo.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">
                Interfaccia moderna e responsive, costruita con Tailwind CSS e componenti riutilizzabili.
              </p>
            </CardBody>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card>
            <CardBody className="text-center py-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pronto per iniziare?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Unisciti a noi e scopri tutte le funzionalità disponibili.
              </p>
                             <Link href={route('register')}>
                 <Button size="lg">
                   Inizia Ora
                 </Button>
               </Link>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
  