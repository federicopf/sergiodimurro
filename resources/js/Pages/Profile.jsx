import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { AuthenticatedLayout } from '../Layouts';
import { Card, CardHeader, CardBody, Button, Input } from '../Components/UI';

const Profile = ({ user }) => {
  const { data, setData, post, processing, errors } = useForm({
    name: user?.name || '',
    email: user?.email || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('profile.update'));
  };

  return (
    <AuthenticatedLayout header="Profilo">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900">Informazioni Personali</h2>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{user?.name || 'Nome Utente'}</h3>
                  <p className="text-gray-600">{user?.email || 'email@example.com'}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Nome"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  error={errors.name}
                  placeholder="Il tuo nome"
                />
                <Input
                  label="Email"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  error={errors.email}
                  placeholder="la-tua-email@example.com"
                />
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" disabled={processing} loading={processing}>
                  {processing ? 'Salvando...' : 'Salva Modifiche'}
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </AuthenticatedLayout>
  );
};

export default Profile;
