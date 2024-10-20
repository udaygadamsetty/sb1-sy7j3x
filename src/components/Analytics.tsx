import React, { useState } from 'react';
import { BarChart2, Users, Calendar, Briefcase, TrendingUp } from 'lucide-react';

const Analytics: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Analytics Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded-md">
                <h3 className="text-lg font-medium text-white mb-2">Total Job Postings</h3>
                <p className="text-3xl font-bold text-blue-500">24</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-md">
                <h3 className="text-lg font-medium text-white mb-2">Total Applicants</h3>
                <p className="text-3xl font-bold text-green-500">342</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-md">
                <h3 className="text-lg font-medium text-white mb-2">Interviews Scheduled</h3>
                <p className="text-3xl font-bold text-purple-500">56</p>
              </div>
            </div>
          </div>
        );
      case 'jobs':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Jobs and Campaigns</h2>
            <p className="text-gray-400">Detailed analytics for your job postings and recruitment campaigns.</p>
            {/* Add job and campaign analytics components here */}
          </div>
        );
      case 'sourcing':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Candidate Sourcing</h2>
            <p className="text-gray-400">Analytics on candidate sourcing channels and effectiveness.</p>
            {/* Add candidate sourcing analytics components here */}
          </div>
        );
      case 'interviews':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Interviews and Events</h2>
            <p className="text-gray-400">Statistics on interviews conducted and hiring events.</p>
            {/* Add interview and event analytics components here */}
          </div>
        );
      case 'branding':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Employer Branding Ads</h2>
            <p className="text-gray-400">Performance metrics for your employer branding advertisements.</p>
            {/* Add employer branding ad analytics components here */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 gradient-text">Analytics</h1>
      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap mb-6 border-b border-gray-700">
          <button
            className={`mr-4 pb-2 flex items-center ${activeTab === 'overview' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('overview')}
          >
            <BarChart2 size={18} className="mr-2" /> Overview
          </button>
          <button
            className={`mr-4 pb-2 flex items-center ${activeTab === 'jobs' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('jobs')}
          >
            <Briefcase size={18} className="mr-2" /> Jobs and campaigns
          </button>
          <button
            className={`mr-4 pb-2 flex items-center ${activeTab === 'sourcing' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('sourcing')}
          >
            <Users size={18} className="mr-2" /> Candidate sourcing
          </button>
          <button
            className={`mr-4 pb-2 flex items-center ${activeTab === 'interviews' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('interviews')}
          >
            <Calendar size={18} className="mr-2" /> Interviews and events
          </button>
          <button
            className={`mr-4 pb-2 flex items-center ${activeTab === 'branding' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('branding')}
          >
            <TrendingUp size={18} className="mr-2" /> Employer Branding Ads
          </button>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Analytics;