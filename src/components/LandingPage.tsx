import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar } from 'lucide-react';

interface LandingPageProps {
  openAuthModal: () => void;
}

const services = [
  {
    title: 'AI-Powered Matching',
    description: 'Our advanced AI algorithms match candidates to job openings with unprecedented accuracy, saving you time and resources.',
    features: [
      'Machine learning-based candidate ranking',
      'Skill gap analysis',
      'Personality and culture fit assessment'
    ]
  },
  {
    title: 'Streamlined Hiring',
    description: 'From job posting to offer letter, our streamlined hiring process reduces time-to-hire by up to 50%.',
    features: [
      'Automated screening and shortlisting',
      'Integrated video interviews',
      'Collaborative decision-making tools'
    ]
  },
  {
    title: 'Talent Pool Access',
    description: 'Gain access to a vast, pre-vetted talent pool across various industries and specializations.',
    features: [
      'Diverse candidate database',
      'Passive candidate engagement',
      'Talent pipeline management'
    ]
  }
];

const LandingPage: React.FC<LandingPageProps> = ({ openAuthModal }) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">Welcome to FastTrack</h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-300">Revolutionizing recruitment across industries with AI-powered solutions</p>
        <button
          onClick={openAuthModal}
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
        >
          Get Started
        </button>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-6 text-sm">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Ready to Transform Your Recruitment?</h2>
        <button
          onClick={() => navigate('/pricing')}
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
        >
          View Pricing
        </button>
      </section>
    </div>
  );
};

export default LandingPage;