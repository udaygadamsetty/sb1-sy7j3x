import React, { useState } from 'react';
import { Calendar, Clock, Video, Phone } from 'lucide-react';

const sampleInterviews = [
  { id: 1, candidate: 'John Doe', position: 'Senior Software Engineer', date: '2023-10-25', time: '10:00 AM', type: 'Video Call' },
  { id: 2, candidate: 'Jane Smith', position: 'UX Designer', date: '2023-10-26', time: '2:00 PM', type: 'Phone Call' },
  { id: 3, candidate: 'Mike Johnson', position: 'Product Manager', date: '2023-10-27', time: '11:30 AM', type: 'Video Call' },
  { id: 4, candidate: 'Emily Brown', position: 'Marketing Specialist', date: '2023-10-28', time: '3:00 PM', type: 'Phone Call' },
];

const Interviews: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 gradient-text">Interviews</h1>
      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <div className="flex mb-6 border-b border-gray-700">
          <button
            className={`mr-4 pb-2 ${activeTab === 'all' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('all')}
          >
            All interviews
          </button>
          <button
            className={`mr-4 pb-2 ${activeTab === 'availability' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('availability')}
          >
            Interview availability
          </button>
          <button
            className={`mr-4 pb-2 ${activeTab === 'events' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('events')}
          >
            Hiring events
          </button>
        </div>

        {activeTab === 'all' && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Upcoming Interviews</h2>
            <ul className="space-y-4">
              {sampleInterviews.map((interview) => (
                <li key={interview.id} className="bg-gray-800 p-4 rounded-md">
                  <h3 className="font-medium text-lg text-white">{interview.candidate}</h3>
                  <p className="text-sm text-gray-400 mb-2">{interview.position}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center"><Calendar size={16} className="mr-1 text-gray-400" /> {interview.date}</span>
                    <span className="flex items-center"><Clock size={16} className="mr-1 text-gray-400" /> {interview.time}</span>
                    <span className="flex items-center">
                      {interview.type === 'Video Call' ? <Video size={16} className="mr-1 text-gray-400" /> : <Phone size={16} className="mr-1 text-gray-400" />}
                      {interview.type}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'availability' && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Interview Availability</h2>
            <p className="text-gray-400">Set your availability for interviews here.</p>
            {/* Add availability setting component here */}
          </div>
        )}

        {activeTab === 'events' && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Hiring Events</h2>
            <p className="text-gray-400">No upcoming hiring events scheduled.</p>
            {/* Add hiring events component here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Interviews;