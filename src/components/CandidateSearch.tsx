import React from 'react';
import { Search } from 'lucide-react';

const CandidateSearch = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Candidate Search</h2>
      <div className="flex items-center border rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search candidates..."
          className="flex-grow p-2 outline-none"
        />
        <button className="bg-blue-500 text-white p-2">
          <Search size={20} />
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Use AI-powered search to find the perfect candidates for your job openings.
      </p>
    </div>
  );
};

export default CandidateSearch;