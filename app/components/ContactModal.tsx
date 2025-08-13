'use client';

import { useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Handle escape key
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-[#F8B702] transition-colors duration-300 z-60"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Modal Content */}
        <div 
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl shadow-black/20 border border-gray-200 relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button on form */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-black mb-4">
              Get Your Custom Proposal
            </h3>
            <p className="text-black/70 text-lg">
              Ready to transform your home? Tell us about your project and we'll provide a detailed proposal.
            </p>
          </div>

          <form className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-semibold text-black mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="modal-name" 
                  name="name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg text-black font-medium text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="modal-phone" className="block text-sm font-semibold text-black mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="modal-phone" 
                  name="phone"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg text-black font-medium text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300"
                  placeholder="(713) 922-5715"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="modal-email" className="block text-sm font-semibold text-black mb-2">Email Address</label>
              <input 
                type="email" 
                id="modal-email" 
                name="email"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg text-black font-medium text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="modal-project-type" className="block text-sm font-semibold text-black mb-2">Project Type</label>
              <select 
                id="modal-project-type" 
                name="project-type"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg text-black font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300"
              >
                <option value="" className="bg-white text-black">Select a project type</option>
                <option value="kitchen" className="bg-white text-black">Kitchen Remodeling</option>
                <option value="bathroom" className="bg-white text-black">Bathroom Renovation</option>
                <option value="addition" className="bg-white text-black">Room Addition</option>
                <option value="garage-conversion" className="bg-white text-black">Garage Conversion</option>
                <option value="attic-renovation" className="bg-white text-black">Attic Renovation</option>
                <option value="general-construction" className="bg-white text-black">General Construction</option>
                <option value="full-remodel" className="bg-white text-black">Full Home Remodel</option>
                <option value="other" className="bg-white text-black">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="modal-message" className="block text-sm font-semibold text-black mb-2">Project Details</label>
              <textarea 
                id="modal-message" 
                name="message"
                rows={3}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg text-black font-medium text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300 resize-none"
                placeholder="Tell us about your vision, timeline, and any specific requirements..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-[#F8B702] to-[#FFD700] text-black px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-500 hover:shadow-2xl hover:shadow-[#F8B702]/40 hover:scale-[1.02] relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                Send My Proposal Request
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#F8B702] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg sm:rounded-xl"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}