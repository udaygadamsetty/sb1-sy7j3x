import React from 'react';
import { Bell } from 'lucide-react';

const Notifications: React.FC = () => {
  return (
    <div className="absolute right-0 mt-2 w-80 bg-gray-900 rounded-md shadow-lg z-20 border border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-lg font-semibold text-white">Notifications</h3>
      </div>
      <div className="p-2">
        {/* Placeholder for when there are no notifications */}
        <div className="text-center py-8">
          <Bell size={48} className="text-gray-500 mx-auto mb-4" />
          <p className="text-gray-400">Nothing to do here right now</p>
          <p className="text-sm text-gray-500">Expect to receive more notifications as we improve your experience</p>
        </div>
        {/* Add actual notifications here when available */}
      </div>
    </div>
  );
};

export default Notifications;