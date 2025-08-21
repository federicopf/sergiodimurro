import React from 'react';
import { Link } from '@inertiajs/react';

const GuestLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Benvenuto nella tua app
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Accedi o registrati per continuare
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {children}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          Hai bisogno di aiuto?{' '}
          <Link href="/support" className="font-medium text-blue-600 hover:text-blue-500">
            Contattaci
          </Link>
        </p>
      </div>
    </div>
  );
};

export default GuestLayout;
