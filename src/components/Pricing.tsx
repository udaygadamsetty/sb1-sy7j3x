import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PricingProps {
  openAuthModal: () => void;
}

const plans = [
  {
    name: 'Essential Plan',
    description: 'For institutions with occasional hiring needs but looking for flexible options.',
    features: [
      'Up to 3 candidate placements per month',
      'Pay-as-you-place option with flat fees per placement',
      'Full recruitment process',
      '30-day replacement guarantee',
      'Weekly subscription model with flexibility',
    ],
    price: '$300/week',
    originalPrice: '$499/week',
    billingPeriod: 'or pay-per-placement',
  },
  {
    name: 'Professional Plan',
    description: 'For institutions with regular recruitment needs throughout the year.',
    features: [
      'Unlimited candidate placements',
      'End-to-end recruitment support',
      '60-day replacement guarantee',
      'Access to pre-vetted talent pool',
      'Quarterly recruitment strategy sessions',
    ],
    price: '$1,999/week',
    originalPrice: '$2,499/week',
    billingPeriod: 'billed weekly',
  },
  {
    name: 'Enterprise Plan',
    description: 'For institutions with high-volume or specialized staffing needs.',
    features: [
      'All features of the Professional Plan',
      'Comprehensive background verification checks',
      'Dedicated account manager',
      'Priority access to top candidates within 14 days',
      'Customized recruitment events',
      'Continuous onboarding and staff training support',
      'Bi-annual market insights and salary benchmarking',
    ],
    price: 'Custom pricing',
    billingPeriod: 'Contact us for a quote',
  },
];

const Pricing: React.FC<PricingProps> = ({ openAuthModal }) => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleChoosePlan = (index: number) => {
    setSelectedPlan(index);
    openAuthModal();
    // After opening the auth modal, we'll navigate to the dashboard
    // This should be called after successful authentication
    navigate('/dashboard');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center gradient-text">Pricing Plans</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-gray-900 rounded-xl p-8 flex flex-col border ${
              selectedPlan === index ? 'border-blue-500 ring-4 ring-blue-500 ring-opacity-50' : 'border-gray-800'
            } transition-all duration-300`}
          >
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-4 text-white">{plan.name}</h2>
              <p className="text-gray-400 mb-6 h-20">{plan.description}</p>
              <div className="mb-6">
                <p className="text-3xl font-bold text-blue-500 mb-2">{plan.price}</p>
                {plan.originalPrice && (
                  <p className="text-sm text-gray-500 line-through">{plan.originalPrice}</p>
                )}
                <p className="text-sm text-gray-500">
                  {plan.billingPeriod}
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button 
              className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition duration-300 font-semibold"
              onClick={() => handleChoosePlan(index)}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;