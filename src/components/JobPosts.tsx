import React, { useState } from 'react';
import { Search, MapPin, Briefcase, ChevronDown, Tag } from 'lucide-react';

const sampleJobs = [
  { id: 1, title: 'Lead Preschool Teacher', company: 'Sunshine Preschool', location: 'Fort Worth, TX', type: 'Full-time', salary: '$35,000 - $45,000 per year', posted: '2 days ago', applicants: 12, tags: ['Early Childhood Education', 'Curriculum Development', 'Leadership'] },
  { id: 2, title: 'Preschool Teacher Assistant', company: 'Little Learners Academy', location: 'Dallas, TX', type: 'Part-time', salary: '$15 - $18 per hour', posted: '1 week ago', applicants: 8, tags: ['Child Care', 'Activity Planning', 'First Aid'] },
  { id: 3, title: 'Preschool Teacher', company: 'Happy Hearts Daycare', location: 'Arlington, TX', type: 'Full-time', salary: '$30,000 - $40,000 per year', posted: '3 days ago', applicants: 15, tags: ['Early Literacy', 'Social-Emotional Learning', 'Parent Communication'] },
  { id: 4, title: 'Associate Preschool Teacher', company: 'Bright Beginnings Preschool', location: 'Plano, TX', type: 'Full-time', salary: '$28,000 - $35,000 per year', posted: '5 days ago', applicants: 10, tags: ['Child Development', 'Lesson Planning', 'Classroom Management'] },
  { id: 5, title: 'Bilingual Preschool Teacher', company: 'Multicultural Kids Center', location: 'Irving, TX', type: 'Full-time', salary: '$32,000 - $42,000 per year', posted: '1 day ago', applicants: 6, tags: ['Bilingual (English/Spanish)', 'Cultural Diversity', 'Early Childhood Education'] },
];

const JobPosts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [activeTab, setActiveTab] = useState('all');
  const [tags, setTags] = useState<string[]>([]);

  const filteredJobs = sampleJobs.filter(job =>
    (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) &&
    (filter === 'All' || job.type === filter) &&
    (tags.length === 0 || tags.some(tag => job.tags.includes(tag)))
  );

  const allTags = Array.from(new Set(sampleJobs.flatMap(job => job.tags)));

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 gradient-text">Job Posts</h1>
      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search jobs..."
              className="bg-gray-800 text-white p-2 rounded-l-md w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-blue-600 text-white p-2 rounded-r-md">
              <Search size={20} />
            </button>
          </div>
          <div className="flex items-center">
            <span className="text-gray-300 mr-2">Filter:</span>
            <select
              className="bg-gray-800 text-white p-2 rounded-md"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option>All</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
            </select>
          </div>
        </div>
        <ul className="space-y-4">
          {filteredJobs.map((job) => (
            <li key={job.id} className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-medium text-lg text-white">{job.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{job.company}</p>
              <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-500 mb-2">
                <span className="flex items-center"><MapPin size={16} className="mr-1 text-gray-400" /> {job.location}</span>
                <span className="flex items-center"><Briefcase size={16} className="mr-1 text-gray-400" /> {job.type}</span>
                <span className="text-gray-400">{job.salary}</span>
              </div>
              <div className="flex flex-wrap mb-2">
                {job.tags.map(tag => (
                  <span key={tag} className="mr-2 mb-2 px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Posted {job.posted} • {job.applicants} applicants</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition duration-300">Apply</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobPosts;