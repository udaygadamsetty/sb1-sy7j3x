import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const AIAssistant = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the message to your AI backend
    console.log('Sending message to AI:', message);
    setMessage('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">AI Assistant</h2>
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Ask our AI assistant for help with job descriptions, candidate matching, or interview questions.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask the AI assistant..."
          className="flex-grow p-2 border rounded-l-md outline-none"
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded-r-md">
          <MessageSquare size={20} />
        </button>
      </form>
    </div>
  );
};

export default AIAssistant;