'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import ContactModal from './ContactModal';

interface CTAProps {
  title?: string;
  description?: string;
}

export default function CTA({ 
  title = "Ready to Transform Your Home?", 
  description = "Let's discuss your vision and create the home of your dreams. Schedule your free consultation today." 
}: CTAProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#0E0E0E] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-0 sm:mb-1 md:mb-1" style={{ fontWeight: 900, textShadow: '0 0 1px currentColor' }}>
          {title}
        </h2>
        <p className="font-sans text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:+17139225715" className="bg-gradient-to-b from-[#F8B702] via-[#F8B702] to-[#E6A602] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-105 shadow-lg shadow-black/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:rounded-lg sm:before:rounded-xl w-full sm:w-[335px] text-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2 fa-fw" />
            Call Us (713) 922-5715
          </a>
          <button onClick={() => setIsContactModalOpen(true)} className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-black px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#F8B702] hover:via-[#F8B702] hover:to-[#E6A602] hover:text-white shadow-lg shadow-black/30 border border-white/50 hover:shadow-lg hover:shadow-[#F8B702]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/20 before:to-white/40 before:rounded-lg sm:before:rounded-xl hover:scale-105 w-full sm:w-[335px] text-center">
            Get Your Custom Proposal
          </button>
        </div>
      </div>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </section>
  );
}