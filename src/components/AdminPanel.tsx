import React from 'react';

const AdminPanel: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 gradient-text">Admin Panel</h1>
      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <p className="text-xl text-center text-gray-300">
          The Admin Panel is currently unavailable.
        </p>
        <p className="text-center text-gray-400 mt-4">
          We're working on improving this feature. Please check back later.
        </p>
      </div>
    </div>
  );
};

export default AdminPanel;