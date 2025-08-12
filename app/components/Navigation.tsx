'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface NavigationProps {
  showBackButton?: boolean;
  backText?: string;
  backUrl?: string;
  showMenu?: boolean;
  logoColor?: 'black' | 'white';
  textColor?: string;
}

export default function Navigation({ 
  showBackButton = false, 
  backText = "BACK TO HOME", 
  backUrl = "/",
  showMenu = false,
  logoColor = 'black',
  textColor = 'text-black/60'
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="hover:opacity-75 transition-opacity duration-300">
            <img 
              src={`/images/branding/Levi-Homes_Logo-${logoColor === 'white' ? 'White' : 'Black'}.png`}
              alt="Levi Homes" 
              className="h-20 md:h-24 w-auto"
            />
          </a>
          <div className="flex items-center gap-8">
            {showMenu && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${textColor} font-medium text-lg tracking-wider flex items-center gap-2 hover:text-[#F8B702] transition-colors duration-300`}
              >
                MENU
                <FontAwesomeIcon 
                  icon={isMenuOpen ? faChevronUp : faChevronDown} 
                  className="text-sm"
                />
              </button>
            )}
            {showBackButton && (
              <a 
                href={backUrl} 
                className={`${textColor} hover:text-[#F8B702] transition-colors duration-300 text-sm font-medium tracking-wider flex items-center gap-2`}
              >
                <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
                {backText}
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Full Screen Menu */}
      {showMenu && isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex flex-col justify-center items-center">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 text-white hover:text-[#F8B702] text-2xl font-light transition-colors duration-300"
          >
            ×
          </button>
          
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
              
              {/* Services Column */}
              <div className="text-center lg:text-left">
                <h3 className="text-white/60 text-sm uppercase tracking-wider font-medium mb-12">
                  Our Services
                </h3>
                <div className="space-y-6">
                  <a 
                    href="/services/kitchen-remodeling" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white font-bold text-3xl md:text-4xl lg:text-5xl hover:text-[#F8B702] transition-all duration-500 font-serif tracking-wide whitespace-nowrap"
                  >
                    Kitchen Remodeling
                  </a>
                  <a 
                    href="/services/bathroom-remodeling" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white font-bold text-3xl md:text-4xl lg:text-5xl hover:text-[#F8B702] transition-all duration-500 font-serif tracking-wide whitespace-nowrap"
                  >
                    Bathroom Remodeling
                  </a>
                  <a 
                    href="/services/general-construction" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white font-bold text-3xl md:text-4xl lg:text-5xl hover:text-[#F8B702] transition-all duration-500 font-serif tracking-wide whitespace-nowrap"
                  >
                    General Construction
                  </a>
                  <a 
                    href="/services/room-additions" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white font-bold text-3xl md:text-4xl lg:text-5xl hover:text-[#F8B702] transition-all duration-500 font-serif tracking-wide whitespace-nowrap"
                  >
                    Room Additions
                  </a>
                  <a 
                    href="/services/garage-conversion" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white font-bold text-3xl md:text-4xl lg:text-5xl hover:text-[#F8B702] transition-all duration-500 font-serif tracking-wide whitespace-nowrap"
                  >
                    Garage Conversion
                  </a>
                  <a 
                    href="/services/attic-renovation" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white font-bold text-3xl md:text-4xl lg:text-5xl hover:text-[#F8B702] transition-all duration-500 font-serif tracking-wide whitespace-nowrap"
                  >
                    Attic Renovation
                  </a>
                </div>
              </div>

              {/* Company Column */}
              <div className="text-center lg:text-left">
                <h3 className="text-white/60 text-sm uppercase tracking-wider font-medium mb-12">
                  Company
                </h3>
                <div className="space-y-6">
                  <a 
                    href="/about" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white font-bold text-2xl md:text-3xl lg:text-4xl hover:text-[#F8B702] transition-all duration-500 font-serif tracking-wide whitespace-nowrap"
                  >
                    About Us
                  </a>
                  <a 
                    href="/portfolio" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white font-bold text-2xl md:text-3xl lg:text-4xl hover:text-[#F8B702] transition-all duration-500 font-serif tracking-wide whitespace-nowrap"
                  >
                    Portfolio
                  </a>
                  <a 
                    href="/testimonials" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white font-bold text-2xl md:text-3xl lg:text-4xl hover:text-[#F8B702] transition-all duration-500 font-serif tracking-wide whitespace-nowrap"
                  >
                    Testimonials
                  </a>
                  <a 
                    href="/contact" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white font-bold text-2xl md:text-3xl lg:text-4xl hover:text-[#F8B702] transition-all duration-500 font-serif tracking-wide whitespace-nowrap"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}