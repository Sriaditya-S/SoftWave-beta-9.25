import React from 'react';
import { Code2, Cpu, Globe2, Users } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'We put our clients first, ensuring their success is our priority.',
  },
  {
    icon: Code2,
    title: 'Innovation',
    description: 'Constantly pushing boundaries with cutting-edge solutions.',
  },
  {
    icon: Globe2,
    title: 'Global Reach',
    description: 'Serving clients worldwide with localized solutions.',
  },
  {
    icon: Cpu,
    title: 'Technical Excellence',
    description: 'Delivering high-quality, scalable solutions.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#1A1B1E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">About SoftWave</h2>
            <p className="mt-6 text-gray-300 text-lg">
              SoftWave is a leading digital solutions company dedicated to transforming businesses through innovative technology. With years of experience and a team of expert developers, we deliver cutting-edge solutions that drive growth and efficiency.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold text-xl">100%</h4>
                <p className="text-gray-300">Customer Retention</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold text-xl">50+</h4>
                <p className="text-gray-300">Happy Clients</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold text-xl">10000+</h4>
                <p className="text-gray-300">Hours of Proven Expertise</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold text-xl">24/7</h4>
                <p className="text-gray-300">Support</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-lg">
                <value.icon className="h-8 w-8 text-[#E32726]" />
                <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}