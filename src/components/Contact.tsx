import React from 'react';
import { Phone, Mail, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center gradient-text">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <div className="space-y-8">
          <div className="flex items-center">
            <Phone size={24} className="text-blue-500 mr-4" />
            <div>
              <p className="text-lg font-semibold text-white">Phone Numbers:</p>
              <p className="text-gray-300">Toll Free: 888-339-2696</p>
              <p className="text-gray-300">Direct: 214-612-5414</p>
            </div>
          </div>
          <div className="flex items-center">
            <Mail size={24} className="text-blue-500 mr-4" />
            <div>
              <p className="text-lg font-semibold text-white">Email:</p>
              <a href="mailto:sales@apperion.ai" className="text-blue-400 hover:underline">sales@apperion.ai</a>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar size={24} className="text-blue-500 mr-4" />
            <div>
              <p className="text-lg font-semibold text-white">Book a Meeting:</p>
              <a href="https://calendly.com/sales-apperion/30min" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Schedule a 30-minute call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;