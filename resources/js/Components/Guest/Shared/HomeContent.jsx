export default function HomeContent({ data }) {
  const { photos, stats, error } = data;

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Errore Database</h2>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative py-20 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-gray-300 rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-gray-300 rounded-full"></div>
          <div className="absolute bottom-32 left-32 w-16 h-16 border border-gray-300 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-light text-gray-800 mb-6 tracking-wide">
            BENVENUTO
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Scopri la galleria fotografica di Sergio Di Murro
          </p>
          <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>
          
          {/* Stats Card */}
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-center">
              <div className="text-4xl font-light text-gray-800 mb-2">{stats.totalPhotos}</div>
              <div className="text-gray-600 uppercase tracking-wider text-sm">Foto Disponibili</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {photos.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Nessuna foto disponibile</h3>
              <p className="text-gray-600 mb-4">La galleria è vuota al momento</p>
              <div className="bg-gray-100 rounded-lg p-4 inline-block">
                <code className="text-sm text-gray-700">php artisan sqlite:populate</code>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {photos.map(photo => (
                <div key={photo.id} className="group bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Photo Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-400 transition-colors">
                        <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-xs uppercase tracking-wide">Foto</p>
                    </div>
                  </div>
                  
                  {/* Photo Info */}
                  <div className="p-6">
                    <h3 className="font-medium text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                      {photo.title}
                    </h3>
                    {photo.description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{photo.description}</p>
                    )}
                    <div className="space-y-2 text-xs text-gray-500">
                      <div className="flex justify-between">
                        <span>Tipo:</span>
                        <span className="font-medium">{photo.mime_type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dimensione:</span>
                        <span className="font-medium">{(photo.file_size / 1024 / 1024).toFixed(2)} MB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Data:</span>
                        <span className="font-medium">{new Date(photo.created_at).toLocaleDateString('it-IT')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
