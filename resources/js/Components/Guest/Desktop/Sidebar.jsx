const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg border-r border-gray-200 p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Menu</h3>
      <nav className="space-y-2">
        <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors">
          Chi Siamo
        </a>
        <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors">
          Servizi
        </a>
        <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors">
          Contatti
        </a>
        <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors">
          Portfolio
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
