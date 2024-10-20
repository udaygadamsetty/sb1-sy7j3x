import React, { useState } from 'react';
import { Search, AlertCircle, Award } from 'lucide-react';

const SmartSourcing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('find');
  const [jobTitle, setJobTitle] = useState('Business Development & Operations Coordinator');
  const [location, setLocation] = useState('Fort Worth, TX');

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 gradient-text">Smart Sourcing</h1>
      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <div className="bg-blue-900 bg-opacity-50 p-4 rounded-md mb-6 flex items-start">
          <AlertCircle className="text-blue-400 mr-3 flex-shrink-0 mt-1" />
          <div>
            <p className="text-white mb-2">
              On October 14th, Smart Sourcing users without the 'Candidates access level' will be automatically granted access on their next outreach. The 'Candidates access level' enables Smart Sourcing users to easily continue conversations with contacted candidates in the Messages Page, as well as access the Candidates tab.
            </p>
            <p className="text-gray-300 text-sm">No action is required by your account administrator.</p>
            <button className="mt-2 bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700">
              Got it
            </button>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-md mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <Award className="text-yellow-400 mr-3" size={48} />
            <div>
              <h2 className="text-xl font-semibold text-white mb-1">Let us find the best matches for you!</h2>
              <p className="text-gray-300">
                Based on your job description, we found <span className="font-semibold">100 candidates</span> you may be interested in.
                Reach out to them yourself. Get started with a <span className="font-semibold">free trial</span> of Indeed Smart Sourcing to connect now.
              </p>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Get 5 free contacts
          </button>
        </div>

        <div className="mb-6">
          <div className="flex mb-4">
            <button
              className={`mr-4 pb-2 ${activeTab === 'find' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
              onClick={() => setActiveTab('find')}
            >
              Find candidates
            </button>
            <button
              className={`mr-4 pb-2 ${activeTab === 'projects' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
            <button
              className={`mr-4 pb-2 ${activeTab === 'saved' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
              onClick={() => setActiveTab('saved')}
            >
              Saved searches
            </button>
          </div>

          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label htmlFor="job" className="block text-sm font-medium text-gray-400 mb-1">Job</label>
              <input
                type="text"
                id="job"
                className="w-full bg-gray-800 text-white p-2 rounded-md"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="location" className="block text-sm font-medium text-gray-400 mb-1">Location</label>
              <input
                type="text"
                id="location"
                className="w-full bg-gray-800 text-white p-2 rounded-md"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex items-end">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Find
              </button>
            </div>
          </div>

          <p className="text-gray-300 mb-4">100 resumes match your criteria</p>

          {/* Placeholder for candidate results */}
          <div className="bg-gray-800 p-4 rounded-md text-center">
            <p className="text-gray-400">Candidate results will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartSourcing;