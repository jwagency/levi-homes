'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Navigation from '../components/Navigation';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

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
      <section ref={heroRef} className="relative h-[70vh] bg-black text-white overflow-hidden pt-20">
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
              className="font-sans text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              Ready to transform your home? Get in touch with Houston's premier luxury remodeling experts.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <a href="tel:+17139225715" className="bg-gradient-to-b from-[#F8B702] via-[#F8B702] to-[#E6A602] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-105 shadow-lg shadow-black/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:rounded-lg sm:before:rounded-xl w-full sm:w-[335px] text-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2 fa-fw" />
                Call Us (713) 922-5715
              </a>
              <a href="#contact-form" className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-black px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#F8B702] hover:via-[#F8B702] hover:to-[#E6A602] hover:text-white shadow-lg shadow-black/30 border border-white/50 hover:shadow-lg hover:shadow-[#F8B702]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/20 before:to-white/40 before:rounded-lg sm:before:rounded-xl hover:scale-105 w-full sm:w-[335px] text-center">
                Get Your Custom Proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - New Layout */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">
              Our Contact Information
            </h2>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* Contact Us Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#F8B702] rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faPhone} className="text-white text-xl" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-black mb-4">Contact Us:</h3>
              <div className="space-y-2">
                <p className="text-black/70">Phone: <a href="tel:+17139225715" className="text-black/70 hover:text-[#F8B702] transition-colors">713-922-5715</a></p>
                <p className="text-black/70">Email: <a href="mailto:levi@levihomes.com" className="text-black/70 hover:text-[#F8B702] transition-colors">levi@levihomes.com</a></p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#F8B702] rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-xl" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-black mb-4">Location:</h3>
              <a 
                href="https://maps.app.goo.gl/Z8Ce76dukE9KJT6W8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/70 hover:text-[#F8B702] transition-colors duration-300 block"
              >
                1001 S Dairy Ashford Rd #170,<br />
                Houston, TX 77077
              </a>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#F8B702] rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faClock} className="text-white text-xl" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-black mb-4">Hours of Operation:</h3>
              <div className="space-y-1">
                <p className="text-black/70">Monday - Friday: 8am to 6pm</p>
                <p className="text-black/70">Saturday & Sunday: Closed</p>
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
            src="/images/showcase/ferris-1.jpg" 
            alt="Luxury Home Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}