export default function AboutContent({ data }) {
  const { contact } = data;

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
            SERGIO DI MURRO
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 italic font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            "Solo la macchina fotografica può fermare il tempo…"
          </p>
          <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Classe 1979. La fotografia non è solo un hobby, è una passione che si è trasformata in professione.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light text-gray-800 mb-6 tracking-wide">FOTOGRAFO PROFESSIONISTA</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Specializzato nella fotografia commerciale, still life, ritratto, moda, look book, ADV | campaign, architettura ed eventi. Ogni scatto racconta una storia, ogni immagine cattura un momento unico.
                </p>
              </div>

              {/* Specializzazioni */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-light text-gray-800 mb-6 tracking-wide">SPECIALIZZAZIONI</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    'Fotografia Commerciale',
                    'Still Life',
                    'Ritratto',
                    'Moda',
                    'Look Book',
                    'ADV & Campaign',
                    'Architettura',
                    'Eventi'
                  ].map((specialty, index) => (
                    <div key={index} className="flex items-center group">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4 group-hover:bg-gray-600 transition-colors"></div>
                      <span className="text-gray-600 group-hover:text-gray-800 transition-colors tracking-wide">
                        {specialty}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Photo Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center border border-gray-100">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm tracking-wide font-medium">SERGIO DI MURRO</p>
                  <p className="text-gray-500 text-xs mt-1">CLASSE 1979</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-800 mb-8 tracking-wide">CONTATTI</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a 
              href={`mailto:${contact.email}`} 
              className="group flex items-center px-8 py-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-gray-300"
            >
              <svg className="w-6 h-6 text-gray-500 mr-3 group-hover:text-gray-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors tracking-wide font-medium">{contact.email}</span>
            </a>
            <a 
              href={`tel:${contact.phone}`} 
              className="group flex items-center px-8 py-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-gray-300"
            >
              <svg className="w-6 h-6 text-gray-500 mr-3 group-hover:text-gray-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors tracking-wide font-medium">{contact.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
