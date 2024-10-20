import React, { useState } from 'react';
import { MessageSquare, Search, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Messages: React.FC = () => {
  const [filter, setFilter] = useState('All jobs');
  const navigate = useNavigate();

  return (
    <div className="absolute right-0 mt-2 w-96 bg-gray-900 rounded-md shadow-lg z-20 border border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-2">Messages</h3>
        <div className="flex items-center">
          <span className="text-green-500 mr-2">●</span>
          <span className="text-sm text-gray-400">Online status: On</span>
        </div>
      </div>
      <div className="p-4 border-b border-gray-700">
        <div className="flex space-x-2 mb-2">
          <button className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm">Inbox</button>
          <button className="text-gray-400 px-3 py-1 rounded-md text-sm hover:bg-gray-800">Unread</button>
        </div>
        <div className="relative">
          <select
            className="w-full bg-gray-800 text-white p-2 rounded-md appearance-none"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>Filter by job: All jobs</option>
            {/* Add more job options here */}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <ChevronDown size={20} className="text-gray-400" />
          </div>
        </div>
      </div>
      <div className="p-2">
        {/* Placeholder for when there are no messages */}
        <div className="text-center py-8">
          <MessageSquare size={48} className="text-gray-500 mx-auto mb-4" />
          <p className="text-gray-400">Welcome to Messages</p>
          <p className="text-sm text-gray-500 mb-4">When you contact a candidate, it will appear here.</p>
          <button 
            className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700"
            onClick={() => navigate('/jobs')}
          >
            View jobs
          </button>
        </div>
        {/* Add actual messages here when available */}
      </div>
    </div>
  );
};

export default Messages;