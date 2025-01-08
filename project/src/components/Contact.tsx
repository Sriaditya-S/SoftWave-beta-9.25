import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import LoadingSpinner from './common/LoadingSpinner';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#1A1B1E]">Get in Touch</h2>
            <p className="mt-4 text-gray-600">
              Ready to transform your business? Contact us today for a free consultation.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center group">
                <div className="p-3 bg-[#E32726]/10 rounded-full group-hover:bg-[#E32726] transition-colors duration-300">
                  <Phone className="h-6 w-6 text-[#E32726] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="ml-4 text-gray-600">+91 6382083873</span>
              </div>
              <div className="flex items-center group">
                <div className="p-3 bg-[#E32726]/10 rounded-full group-hover:bg-[#E32726] transition-colors duration-300">
                  <Mail className="h-6 w-6 text-[#E32726] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="ml-4 text-gray-600">softwavesolutions135@gmail.com</span>
              </div>
              <div className="flex items-center group">
                <div className="p-3 bg-[#E32726]/10 rounded-full group-hover:bg-[#E32726] transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-[#E32726] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="ml-4 text-gray-600">TT004 Technology Tower, VIT Vellore Campus, Vellore, 632014</span>
              </div>
              <div className="flex items-center group">
                <div className="p-3 bg-[#E32726]/10 rounded-full group-hover:bg-[#E32726] transition-colors duration-300">
                  <Clock className="h-6 w-6 text-[#E32726] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="ml-4 text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#E32726] focus:ring focus:ring-[#E32726] focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#E32726] focus:ring focus:ring-[#E32726] focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#E32726] focus:ring focus:ring-[#E32726] focus:ring-opacity-50"
              />
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#E32726] focus:ring focus:ring-[#E32726] focus:ring-opacity-50"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full bg-[#E32726] text-white py-3 px-4 rounded-md hover:bg-[#c71f1f] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <LoadingSpinner variant="light" />
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
            {formStatus === 'success' && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center animate-fade-in">
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}