import { Link } from '@inertiajs/react';
import { route } from '../../../helpers';

const Sidebar = () => {
  const navigation = [
    { name: 'Home', href: route('guest.home'), icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z' },
    { name: 'Chi Siamo', href: route('guest.about'), icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg border-r border-gray-200 p-6">
      {/* Logo */}
      <div className="mb-8">
        <Link href={route('guest.home')} className="text-xl font-semibold text-gray-800 tracking-wide hover:text-gray-600 transition-colors">
          Sergio Di Murro
        </Link>
      </div>
      
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Menu</h3>
      <nav className="space-y-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors group"
          >
            <svg
              className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
            </svg>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
