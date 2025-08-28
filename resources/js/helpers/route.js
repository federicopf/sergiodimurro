// Helper per generare URL dalle route nominate
export function route(name, parameters = {}) {
  const routes = {
    // Route Guest
    'guest.home': '/',
    'guest.about': '/about',
    
    // Route Admin (per il futuro)
    'admin.dashboard': '/admin/dashboard',
    'admin.photos': '/admin/photos',
    'admin.categories': '/admin/categories',
  };

  let url = routes[name];
  
  if (!url) {
    console.warn(`Route '${name}' non trovata`);
    return '#';
  }

  // Sostituisce i parametri nell'URL se presenti
  Object.keys(parameters).forEach(key => {
    url = url.replace(`{${key}}`, parameters[key]);
  });

  return url;
}

// Helper per verificare se una route è attiva
export function routeIs(name) {
  const currentPath = window.location.pathname;
  const routePath = route(name);
  return currentPath === routePath;
}

// Helper per verificare se una route inizia con un pattern
export function routeStartsWith(name) {
  const currentPath = window.location.pathname;
  const routePath = route(name);
  return currentPath.startsWith(routePath);
}
