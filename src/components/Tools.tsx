import React, { useState } from 'react';
import { Wrench, FileText, Chrome, BookOpen, Rocket } from 'lucide-react';

const Tools: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Tools Overview</h2>
            <p className="text-gray-400 mb-6">Access various recruitment tools and resources to streamline your hiring process.</p>
            <ul className="space-y-2 mb-8">
              <li className="text-blue-400 hover:underline cursor-pointer">AI-Powered Matching</li>
              <li className="text-blue-400 hover:underline cursor-pointer">FastTrack Recruiter Extension</li>
              <li className="text-blue-400 hover:underline cursor-pointer">Resource Library</li>
            </ul>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <Rocket size={48} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Future Greatness Coming Soon!</h3>
              <p className="text-gray-400">We're working on exciting new features to revolutionize your recruitment process. Stay tuned!</p>
            </div>
          </div>
        );
      case 'aiMatching':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">AI-Powered Matching</h2>
            <p className="text-gray-400">Utilize our advanced AI algorithms to match candidates to job openings with unprecedented accuracy.</p>
            <div className="mt-8 bg-gray-800 p-6 rounded-lg text-center">
              <Rocket size={48} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Enhanced AI Features Coming Soon!</h3>
              <p className="text-gray-400">We're developing cutting-edge AI capabilities to make your matching even more powerful.</p>
            </div>
          </div>
        );
      case 'extension':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">FastTrack Recruiter Extension</h2>
            <p className="text-gray-400">Learn about and install the FastTrack Recruiter browser extension for enhanced recruiting capabilities.</p>
            <div className="mt-8 bg-gray-800 p-6 rounded-lg text-center">
              <Rocket size={48} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">New Extension Features on the Horizon!</h3>
              <p className="text-gray-400">Exciting updates to our browser extension are in the works. Get ready for a more seamless experience!</p>
            </div>
          </div>
        );
      case 'resources':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Resource Library</h2>
            <p className="text-gray-400">Access a wide range of recruitment resources, guides, and best practices.</p>
            <div className="mt-8 bg-gray-800 p-6 rounded-lg text-center">
              <Rocket size={48} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Expanding Our Knowledge Base!</h3>
              <p className="text-gray-400">We're curating an extensive collection of industry insights and expert resources. Check back soon!</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 gradient-text">Tools</h1>
      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap mb-6 border-b border-gray-700">
          <button
            className={`mr-4 pb-2 flex items-center ${activeTab === 'overview' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('overview')}
          >
            <Wrench size={18} className="mr-2" /> Overview
          </button>
          <button
            className={`mr-4 pb-2 flex items-center ${activeTab === 'aiMatching' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('aiMatching')}
          >
            <FileText size={18} className="mr-2" /> AI-Powered Matching
          </button>
          <button
            className={`mr-4 pb-2 flex items-center ${activeTab === 'extension' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('extension')}
          >
            <Chrome size={18} className="mr-2" /> FastTrack Recruiter Extension
          </button>
          <button
            className={`mr-4 pb-2 flex items-center ${activeTab === 'resources' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('resources')}
          >
            <BookOpen size={18} className="mr-2" /> Resource Library
          </button>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Tools;