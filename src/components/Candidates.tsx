import React, { useState } from 'react';
import { Search, MapPin, Briefcase, ChevronDown, Check, X, MoreHorizontal } from 'lucide-react';

const sampleCandidates = [
  { id: 1, name: 'Emily Johnson', title: 'Lead Preschool Teacher', location: 'Fort Worth, TX', status: 'Reviewed', appliedDate: 'Oct 12', jobTitle: 'Lead Preschool Teacher', skills: ['Early Childhood Education', 'Curriculum Development', 'Classroom Management'], activity: 'Shortlisted' },
  { id: 2, name: 'Michael Rodriguez', title: 'Preschool Teacher Assistant', location: 'Dallas, TX', status: 'Awaiting Review', appliedDate: 'Oct 14', jobTitle: 'Preschool Teacher Assistant', skills: ['Child Care', 'Activity Planning', 'First Aid'], activity: 'New applicant' },
  { id: 3, name: 'Sarah Thompson', title: 'Preschool Teacher', location: 'Arlington, TX', status: 'Interviewed', appliedDate: 'Oct 10', jobTitle: 'Preschool Teacher', skills: ['Early Literacy', 'Social-Emotional Learning', 'Parent Communication'], activity: 'Second interview scheduled' },
  { id: 4, name: 'David Lee', title: 'Associate Teacher', location: 'Plano, TX', status: 'Awaiting Review', appliedDate: 'Oct 15', jobTitle: 'Associate Preschool Teacher', skills: ['Child Development', 'Lesson Planning', 'Classroom Decoration'], activity: 'New applicant' },
  { id: 5, name: 'Jessica Martinez', title: 'Early Childhood Educator', location: 'Irving, TX', status: 'Reviewed', appliedDate: 'Oct 13', jobTitle: 'Preschool Teacher', skills: ['Montessori Method', 'Bilingual (English/Spanish)', 'Arts and Crafts'], activity: 'Shortlisted' },
];

const Candidates: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All open and paused jobs');

  const filteredCandidates = sampleCandidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold gradient-text">Candidates</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
          Post a Job
        </button>
      </div>
      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <select
              className="bg-gray-800 text-white p-2 rounded-md mr-2"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option>All open and paused jobs</option>
              <option>Active jobs</option>
              <option>Paused jobs</option>
            </select>
            <button className="text-blue-400 hover:underline">Add candidate</button>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search candidates..."
              className="bg-gray-800 text-white p-2 rounded-l-md w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-blue-600 text-white p-2 rounded-r-md">
              <Search size={20} />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-700">
                <th className="py-2">Candidate</th>
                <th className="py-2">Job applied to</th>
                <th className="py-2">Matches to job post</th>
                <th className="py-2">Activity</th>
                <th className="py-2">Interested?</th>
              </tr>
            </thead>
            <tbody>
              {filteredCandidates.map((candidate) => (
                <tr key={candidate.id} className="border-b border-gray-800">
                  <td className="py-4">
                    <div>
                      <p className="font-medium text-white">{candidate.name}</p>
                      <p className="text-sm text-gray-400">{candidate.title} • {candidate.location}</p>
                      <p className="text-sm text-gray-500">{candidate.status} • Applied: {candidate.appliedDate}</p>
                    </div>
                  </td>
                  <td className="py-4 text-gray-300">{candidate.jobTitle}</td>
                  <td className="py-4">
                    <ul className="space-y-1">
                      {candidate.skills.map((skill, index) => (
                        <li key={index} className="flex items-center text-green-400">
                          <Check size={16} className="mr-1" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-4">
                    <p className="text-gray-300">{candidate.activity}</p>
                    <button className="text-blue-400 hover:underline text-sm">Send message</button>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-green-400 hover:text-green-300">
                        <Check size={20} />
                      </button>
                      <button className="text-gray-400 hover:text-gray-300">
                        <X size={20} />
                      </button>
                      <button className="text-gray-400 hover:text-gray-300">
                        <MoreHorizontal size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Candidates;