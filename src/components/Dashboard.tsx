import React from 'react';
import { BarChart, Users, FileText } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-white">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
          <BarChart className="text-blue-500 mb-2" size={32} />
          <span className="text-lg font-medium text-white">15</span>
          <span className="text-sm text-gray-400">Active Jobs</span>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
          <Users className="text-green-500 mb-2" size={32} />
          <span className="text-lg font-medium text-white">238</span>
          <span className="text-sm text-gray-400">Candidates</span>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
          <FileText className="text-purple-500 mb-2" size={32} />
          <span className="text-lg font-medium text-white">42</span>
          <span className="text-sm text-gray-400">Applications</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;