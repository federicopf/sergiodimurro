import { useState } from 'react';
import AdminDesktopLayout from '../Layouts/Guest/Desktop/GuestDesktopLayout';

export default function SqliteDemo({ photos, stats, error }) {
  const [activeTab, setActiveTab] = useState('photos');

  if (error) {
    return (
      <AdminDesktopLayout>
        <div className="container mx-auto px-6 py-12">
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <h2 className="text-red-800 font-semibold">Errore Database</h2>
            <p className="text-red-600 mt-2">{error}</p>
          </div>
        </div>
      </AdminDesktopLayout>
    );
  }

  return (
    <AdminDesktopLayout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Demo SQLite - Foto</h1>
        
        {/* Stats */}
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-blue-800 font-semibold text-lg mb-2">Statistiche</h3>
          <p className="text-2xl font-bold text-blue-600">{stats.totalPhotos} foto totali</p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {photos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Nessuna foto trovata</p>
              <p className="text-gray-400 mt-2">Usa il comando <code className="bg-gray-100 px-2 py-1 rounded">php artisan sqlite:populate</code> per creare foto di esempio</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map(photo => (
                <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden border">
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">{photo.title}</h3>
                    {photo.description && (
                      <p className="text-gray-600 text-sm mb-3">{photo.description}</p>
                    )}
                    <div className="space-y-2 text-sm text-gray-500">
                      <p><span className="font-medium">File:</span> {photo.filename}</p>
                      <p><span className="font-medium">Tipo:</span> {photo.mime_type}</p>
                      <p><span className="font-medium">Dimensione:</span> {(photo.file_size / 1024 / 1024).toFixed(2)} MB</p>
                      <p><span className="font-medium">Percorso:</span> {photo.file_path}</p>
                      <p><span className="font-medium">Data:</span> {new Date(photo.created_at).toLocaleDateString('it-IT')}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminDesktopLayout>
  );
}
