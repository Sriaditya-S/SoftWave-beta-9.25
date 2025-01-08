import React from 'react';
import { Construction } from 'lucide-react';
import Popup from './common/Popup';

interface WelcomePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WelcomePopup({ isOpen, onClose }: WelcomePopupProps) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Construction className="h-12 w-12 text-[#E32726] animate-pulse" />
        </div>
        <h2 className="text-2xl font-bold text-[#1A1B1E] mb-4">Welcome to SoftWave</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            Our website is currently under construction as we work to bring you an enhanced digital experience.
          </p>
          <div className="bg-yellow-50 p-4 rounded-md">
            <p className="text-yellow-800 font-medium">
              Please Note:
            </p>
            <p className="text-yellow-700 text-sm mt-1">
              Some features are experimental and may be updated or modified. We appreciate your understanding as we continue to improve our services.
            </p>
          </div>
          <p className="text-[#E32726] font-medium">
            🚀 Stay tuned for exciting updates!
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 bg-[#E32726] text-white px-6 py-2 rounded-md hover:bg-[#c71f1f] transition-all duration-300 transform hover:scale-105"
        >
          Continue to Site
        </button>
      </div>
    </Popup>
  );
}