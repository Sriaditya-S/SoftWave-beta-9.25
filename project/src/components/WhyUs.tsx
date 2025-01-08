import React from 'react';
import { Shield, Clock, Trophy, Users2 } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'VIT TBI CERTIFIED',
    description: 'Professionally certified by VIT Technology Business Incubator',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Quick implementation without compromising on quality.',
  },
  {
    icon: Trophy,
    title: 'Award-Winning Solutions',
    description: 'Recognized for excellence in digital innovation.',
  },
  {
    icon: Users2,
    title: 'Dedicated Support',
    description: '24/7 customer support and maintenance services.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1A1B1E]">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-600">
            What sets us apart in delivering digital excellence
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#E32726]/10 rounded-full group-hover:bg-[#E32726] transition-colors duration-300">
                <reason.icon className="h-8 w-8 text-[#E32726] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-center text-[#1A1B1E]">
                {reason.title}
              </h3>
              <p className="mt-2 text-center text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-4xl font-bold text-[#E32726]">98%</h4>
            <p className="mt-2 text-gray-600">Client Satisfaction Rate</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-4xl font-bold text-[#E32726]">75+</h4>
            <p className="mt-2 text-gray-600">Projects Completed</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-4xl font-bold text-[#E32726]">50+</h4>
            <p className="mt-2 text-gray-600">Expert Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
}