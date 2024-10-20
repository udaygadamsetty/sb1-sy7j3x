import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center gradient-text">About Us</h1>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">
          <a href="https://www.apperion.ai" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Apperion Software Solutions
          </a>
        </h2>
        <p className="text-xl mb-6 text-gray-300">Transforming Technology, Unlocking Business Potential</p>
        <p className="text-lg mb-8 text-gray-400">
          At Apperion Software Solutions, we help businesses overcome complex challenges with cutting-edge software solutions. 
          Our expertise in data analytics, cloud integration, and custom development enables us to deliver impactful solutions 
          that drive business success.
        </p>
      </div>
    </div>
  );
};

export default About;