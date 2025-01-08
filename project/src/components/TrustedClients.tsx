import React from 'react';
import { Building2 } from 'lucide-react';

const clients = [
  {
    name: 'Aarvasa',
    description: 'Strategic Partner'
  },
  {
    name: 'Timeslotter pvt Ltd',
    description: 'Technology Solutions'
  },
  {
    name: 'PSAssociates',
    description: 'Business Consulting'
  },
  {
    name: 'Paramjyoti pvt Ltd',
    description: 'Industry Leader'
  },
  {
    name: 'Ealth Technologies',
    description: 'Healthcare Innovation'
  }
];

export default function TrustedClients() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1A1B1E]">Trusted By Industry Leaders</h2>
          <p className="mt-4 text-xl text-gray-600">
            Partnering with innovative companies to deliver exceptional results
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-[#E32726]/10 rounded-full group-hover:bg-[#E32726] transition-colors duration-300">
                <Building2 className="h-6 w-6 text-[#E32726] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-center text-[#1A1B1E]">
                {client.name}
              </h3>
              <p className="mt-2 text-sm text-center text-gray-600">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}