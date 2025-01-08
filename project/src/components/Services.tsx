import React from 'react';
import { Code, Bot, LineChart, Building2, Share2, Shield } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Website Development',
    description: 'Custom-built, responsive websites that deliver exceptional user experiences and drive business growth.',
  },
  {
    icon: Bot,
    title: 'AI Automation Solutions',
    description: 'Intelligent automation systems that streamline operations and boost productivity.',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Strategic social media planning, content creation, and engagement optimization to boost your online presence.',
  },
  {
    icon: LineChart,
    title: 'Digital Business Solutions',
    description: 'Comprehensive digital strategies and tools to transform your business operations.',
  },
  {
    icon: Building2,
    title: 'MSME Solutions',
    description: 'Tailored digital solutions designed specifically for small and medium enterprises.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Services',
    description: 'Advanced security solutions to protect your digital assets and ensure business continuity.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1A1B1E]">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive digital solutions for modern businesses
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E32726] to-[#1A1B1E] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
              <div className="relative bg-white p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#E32726]/10 rounded-lg flex items-center justify-center group-hover:bg-[#E32726] transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-[#E32726] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#1A1B1E] group-hover:text-[#E32726] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}