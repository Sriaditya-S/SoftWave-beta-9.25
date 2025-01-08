import React from 'react';
import { Check } from 'lucide-react';
import Button from './common/Button';

const plans = [
  {
    name: 'Starter',
    price: '999',
    description: 'Perfect for small businesses',
    features: [
      'Basic Website Development',
      'Social Media Setup',
      'Email Support',
      '3 Month Support',
      'Basic SEO',
    ],
  },
  {
    name: 'Professional',
    price: '2499',
    description: 'Ideal for growing companies',
    popular: true,
    features: [
      'Advanced Website Development',
      'Social Media Management',
      'Priority Support',
      '6 Month Support',
      'Advanced SEO',
      'Content Marketing',
      'Analytics Dashboard',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Custom Development Solutions',
      'Full Digital Strategy',
      '24/7 Premium Support',
      'Yearly Support',
      'Enterprise SEO',
      'AI Integration',
      'Custom Analytics',
      'Dedicated Manager',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1A1B1E]">Transparent Pricing</h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-[#E32726]' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#E32726] text-white px-4 py-1 text-sm">
                  Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1A1B1E]">{plan.name}</h3>
                <p className="mt-2 text-gray-600">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#1A1B1E]">
                    {typeof plan.price === 'string' ? plan.price : `$${plan.price}`}
                  </span>
                  {plan.price !== 'Custom' && <span className="text-gray-600">/month</span>}
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-[#E32726] mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href="#contact"
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg"
                    icon
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}