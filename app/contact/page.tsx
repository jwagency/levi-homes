'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Navigation from '../components/Navigation';
import ContactModal from '../components/ContactModal';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Simple entrance animation
      const tl = gsap.timeline({ delay: 0.5 });
      
      gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 30 });
      
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.5');
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white">
      <Navigation showMenu={true} textColor="text-black" />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] sm:h-[70vh] bg-black text-white overflow-hidden pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/showcase/how-much-does-full-house-renovation-cost.jpg)' }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center h-full px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              ref={titleRef}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none mb-3"
            >
              Let's Build Your Dream
            </h1>
            <p 
              ref={subtitleRef}
              className="font-sans text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              Ready to transform your home into something extraordinary? Connect with Houston's premier luxury remodeling specialists today.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <a href="tel:+17139225715" className="bg-gradient-to-b from-[#F8B702] via-[#E6A602] to-[#D4A003] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-105 shadow-lg shadow-black/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:rounded-lg sm:before:rounded-xl w-full sm:w-[335px] text-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2 fa-fw" />
                Call Us (713) 922-5715
              </a>
              <button onClick={() => setIsContactModalOpen(true)} className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-black px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#F8B702] hover:via-[#F8B702] hover:to-[#E6A602] hover:text-white shadow-lg shadow-black/30 border border-white/50 hover:shadow-lg hover:shadow-[#F8B702]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/20 before:to-white/40 before:rounded-lg sm:before:rounded-xl hover:scale-105 w-full sm:w-[335px] text-center">
                Get Your Custom Proposal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Glassmorphism Design */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#F9FAFC] text-black">
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="mb-3 sm:mb-4">
              <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">Get In Touch</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6 leading-none">
              Our Contact Information
            </h2>
            <p className="font-sans text-base sm:text-lg md:text-xl text-black/70 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
              Ready to start your next project? We're here to help bring your vision to life.
            </p>
          </div>

          {/* Contact Info Cards with Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-4 md:gap-4 mb-16">
            
            {/* Contact Us Card */}
            <div className="process-step group cursor-pointer relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 overflow-hidden">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/images/showcase/neo-classic-tv-area-600x452.jpg)' }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/85 group-hover:bg-black/90 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex-shrink-0 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] via-[#F8B702] to-[#D4A003] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-inner shadow-black/10 border-2 border-[#FFE55C]/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/10 before:to-white/20 before:rounded-lg">
                    <FontAwesomeIcon icon={faPhone} className="text-white text-2xl drop-shadow-lg relative z-10" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[#F8B702] font-bold text-xs uppercase tracking-wider mb-2">01. Contact</div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4 group-hover:text-[#F8B702] transition-colors duration-300 text-white">
                    Contact Us
                  </h3>
                  <div className="space-y-2">
                    <p className="font-sans text-lg text-white/80 leading-relaxed">
                      Phone: <a href="tel:+17139225715" className="text-white/80 hover:text-[#F8B702] transition-colors">713-922-5715</a>
                    </p>
                    <p className="font-sans text-lg text-white/80 leading-relaxed">
                      Email: <a href="mailto:levi@levihomes.com" className="text-white/80 hover:text-[#F8B702] transition-colors">levi@levihomes.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="process-step group cursor-pointer relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 overflow-hidden">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/images/showcase/ferris-1.jpg)' }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/85 group-hover:bg-black/90 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex-shrink-0 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] via-[#F8B702] to-[#D4A003] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-inner shadow-black/10 border-2 border-[#FFE55C]/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/10 before:to-white/20 before:rounded-lg">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-2xl drop-shadow-lg relative z-10" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[#F8B702] font-bold text-xs uppercase tracking-wider mb-2">02. Location</div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4 group-hover:text-[#F8B702] transition-colors duration-300 text-white">
                    Location
                  </h3>
                  <a 
                    href="https://maps.app.goo.gl/Z8Ce76dukE9KJT6W8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-lg text-white/80 leading-relaxed hover:text-[#F8B702] transition-colors duration-300 block"
                  >
                    1001 S Dairy Ashford Rd #170,<br />
                    Houston, TX 77077
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="process-step group cursor-pointer relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 overflow-hidden">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/images/showcase/5aa8034dea685964b380ef0a17bff7a6.jpg)' }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/85 group-hover:bg-black/90 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex-shrink-0 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] via-[#F8B702] to-[#D4A003] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-inner shadow-black/10 border-2 border-[#FFE55C]/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/10 before:to-white/20 before:rounded-lg">
                    <FontAwesomeIcon icon={faClock} className="text-white text-2xl drop-shadow-lg relative z-10" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[#F8B702] font-bold text-xs uppercase tracking-wider mb-2">03. Hours</div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4 group-hover:text-[#F8B702] transition-colors duration-300 text-white">
                    Hours of Operation
                  </h3>
                  <div className="space-y-1">
                    <p className="font-sans text-lg text-white/80 leading-relaxed">Monday - Friday: 8am to 6pm</p>
                    <p className="font-sans text-lg text-white/80 leading-relaxed">Saturday & Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="relative z-10">
            <ContactForm />
          </div>
        </div>

        {/* Full Width Background Image Section with Negative Margin */}
        <div className="relative h-[500px] -mt-48 w-full -mb-24">
          <img 
            src="/images/76775055_2493544957596427_6661751652011212800_n.jpg" 
            alt="Luxury Home Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </section>

      <Footer />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}