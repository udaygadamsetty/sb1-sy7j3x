import React from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const jobs = [
  { id: 1, title: 'Senior React Developer', company: 'TechCorp', location: 'Remote', type: 'Full-time', salary: '$120,000 - $150,000', posted: '2 days ago' },
  { id: 2, title: 'UX Designer', company: 'DesignHub', location: 'New York, NY', type: 'Full-time', salary: '$90,000 - $120,000', posted: '1 week ago' },
  { id: 3, title: 'Data Scientist', company: 'DataWorks', location: 'San Francisco, CA', type: 'Contract', salary: '$100,000 - $130,000', posted: '3 days ago' },
  { id: 4, title: 'DevOps Engineer', company: 'CloudSys', location: 'Chicago, IL', type: 'Full-time', salary: '$110,000 - $140,000', posted: '5 days ago' },
  { id: 5, title: 'Product Manager', company: 'InnovateCo', location: 'Austin, TX', type: 'Full-time', salary: '$100,000 - $130,000', posted: '1 day ago' },
];

const JobListings = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Job Listings</h2>
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li key={job.id} className="border-b pb-4">
            <h3 className="font-medium text-lg">{job.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{job.company}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center"><MapPin size={16} className="mr-1" /> {job.location}</span>
              <span className="flex items-center"><Briefcase size={16} className="mr-1" /> {job.type}</span>
              <span className="flex items-center"><Clock size={16} className="mr-1" /> {job.posted}</span>
            </div>
            <p className="text-sm font-medium mt-2">{job.salary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;