import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { AuthenticatedLayout } from '../Layouts';
import { Card, CardHeader, CardBody, Button, Badge } from '../Components/UI';

const Settings = () => {
  const { post, processing } = useForm();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    theme: 'light'
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('settings.update'), {
      data: settings
    });
  };

  return (
    <AuthenticatedLayout header="Impostazioni">
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-gray-900">Preferenze Account</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Notifiche Email</h3>
                    <p className="text-sm text-gray-500">Ricevi notifiche via email</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.emailNotifications}
                      onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Notifiche Push</h3>
                    <p className="text-sm text-gray-500">Ricevi notifiche push</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.pushNotifications}
                      onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Tema</h3>
                    <p className="text-sm text-gray-500">Scegli il tema dell'interfaccia</p>
                  </div>
                  <select 
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    value={settings.theme}
                    onChange={(e) => handleSettingChange('theme', e.target.value)}
                  >
                    <option value="light">Chiaro</option>
                    <option value="dark">Scuro</option>
                    <option value="auto">Automatico</option>
                  </select>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-gray-900">Sicurezza</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Autenticazione a due fattori</h3>
                    <p className="text-sm text-gray-500">Aggiungi un livello di sicurezza</p>
                  </div>
                  <Badge variant="danger">Disabilitato</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Sessione attiva</h3>
                    <p className="text-sm text-gray-500">Disconnetti da tutti i dispositivi</p>
                  </div>
                  <Button variant="outline" size="sm">Disconnetti</Button>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-gray-900">Pericolo</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-red-900">Elimina Account</h3>
                  <p className="text-sm text-red-600">Questa azione non può essere annullata</p>
                </div>
                <Button variant="danger">Elimina Account</Button>
              </div>
            </CardBody>
          </Card>

          <div className="flex justify-end">
            <Button type="submit" disabled={processing} loading={processing}>
              {processing ? 'Salvando...' : 'Salva Impostazioni'}
            </Button>
          </div>
        </div>
      </form>
    </AuthenticatedLayout>
  );
};

export default Settings;
