import { useState } from 'react';
import AdminDesktopLayout from '../Layouts/Guest/Desktop/GuestDesktopLayout';

export default function SqliteDemo({ users, posts, stats, error }) {
  const [activeTab, setActiveTab] = useState('users');

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
        <h1 className="text-3xl font-bold mb-8">Demo SQLite</h1>
        
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-blue-800 font-semibold">Utenti</h3>
            <p className="text-2xl font-bold text-blue-600">{stats.totalUsers}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-green-800 font-semibold">Post</h3>
            <p className="text-2xl font-bold text-green-600">{stats.totalPosts}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6">
          <button
            onClick={() => setActiveTab('users')}
            className={`px-4 py-2 rounded-md ${
              activeTab === 'users' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Utenti ({users.length})
          </button>
          <button
            onClick={() => setActiveTab('posts')}
            className={`px-4 py-2 rounded-md ${
              activeTab === 'posts' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Post ({posts.length})
          </button>
        </div>

        {/* Content */}
        {activeTab === 'users' && (
          <div className="space-y-4">
            {users.map(user => (
              <div key={user.id} className="bg-white p-4 rounded-lg shadow border">
                <h3 className="font-semibold text-lg">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Creato: {new Date(user.created_at).toLocaleDateString('it-IT')}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'posts' && (
          <div className="space-y-4">
            {posts.map(post => (
              <div key={post.id} className="bg-white p-4 rounded-lg shadow border">
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.content}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Autore: {post.author_name || 'Sconosciuto'} | 
                  Data: {new Date(post.created_at).toLocaleDateString('it-IT')}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminDesktopLayout>
  );
}
