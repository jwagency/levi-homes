'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoWords } from './utils/textSplit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faRuler, faHammer, faStar, faPhone, faEnvelope, faMapMarkerAlt, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesTitleRef = useRef<HTMLHeadingElement>(null);
  const servicesSubtitleRef = useRef<HTMLParagraphElement>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const portfolioTitleRef = useRef<HTMLHeadingElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const processTitleRef = useRef<HTMLHeadingElement>(null);
  const processSubtitleRef = useRef<HTMLParagraphElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const testimonialsTitleRef = useRef<HTMLHeadingElement>(null);
  const testimonialsSubtitleRef = useRef<HTMLParagraphElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const contactTitleRef = useRef<HTMLHeadingElement>(null);
  const contactSubtitleRef = useRef<HTMLParagraphElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Simple entrance animation for hero text
      const tl = gsap.timeline({ delay: 0.5 });
      
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 30 });
      
      // Animate in
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

      // Services section animations
      ScrollTrigger.create({
        trigger: servicesRef.current,
        start: 'top 80%',
        onEnter: () => {
          // Split services title into words
          const servicesTitle = servicesTitleRef.current;
          let servicesTitleWords: HTMLElement[] = [];
          if (servicesTitle) {
            servicesTitleWords = splitTextIntoWords(servicesTitle);
          }

          // Set initial states
          gsap.set(servicesTitleWords, { y: '100%', opacity: 0 });
          gsap.set(servicesSubtitleRef.current, { y: 30, opacity: 0 });

          // Animate title words
          gsap.to(servicesTitleWords, {
            y: '0%',
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
          });

          // Animate subtitle
          gsap.to(servicesSubtitleRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.4,
            ease: 'power2.out'
          });
        }
      });

      // Portfolio section animations
      ScrollTrigger.create({
        trigger: portfolioRef.current,
        start: 'top 80%',
        onEnter: () => {
          // Split portfolio title into words
          const portfolioTitle = portfolioTitleRef.current;
          let portfolioTitleWords: HTMLElement[] = [];
          if (portfolioTitle) {
            portfolioTitleWords = splitTextIntoWords(portfolioTitle);
          }

          // Set initial states
          gsap.set(portfolioTitleWords, { y: '100%', opacity: 0 });
          gsap.set('.portfolio-item', { y: 60, opacity: 0 });

          // Animate title words
          gsap.to(portfolioTitleWords, {
            y: '0%',
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out'
          });

          // Animate portfolio items
          gsap.to('.portfolio-item', {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            delay: 0.4,
            ease: 'power2.out'
          });
        }
      });

      // Process section animations
      ScrollTrigger.create({
        trigger: processRef.current,
        start: 'top bottom',
        onEnter: () => {
          // Split process title into words
          const processTitle = processTitleRef.current;
          let processTitleWords: HTMLElement[] = [];
          if (processTitle) {
            processTitleWords = splitTextIntoWords(processTitle);
          }

          // Set initial states
          gsap.set(processTitleWords, { y: '100%', opacity: 0 });
          gsap.set(processSubtitleRef.current, { y: 24, opacity: 0 });
          gsap.set('.process-step', { y: 40, opacity: 0 });

          // Animate title words
          gsap.to(processTitleWords, {
            y: '0%',
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
          });

          // Animate subtitle
          gsap.to(processSubtitleRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.4,
            ease: 'power2.out'
          });

          // Animate process steps
          gsap.to('.process-step', {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            delay: 0.6,
            ease: 'power2.out'
          });
        }
      });

      // Testimonials section animations - disabled to prevent React DOM conflicts
      // ScrollTrigger.create({
      //   trigger: testimonialsRef.current,
      //   start: 'top 80%',
      //   onEnter: () => {
      //     // Split testimonials title into words
      //     const testimorialsTitle = testimonialsTitleRef.current;
      //     let testimonialsTitleWords: HTMLElement[] = [];
      //     if (testimorialsTitle) {
      //       testimonialsTitleWords = splitTextIntoWords(testimorialsTitle);
      //     }

      //     // Set initial states
      //     gsap.set(testimonialsTitleWords, { y: '100%', opacity: 0 });
      //     gsap.set(testimonialsSubtitleRef.current, { y: 24, opacity: 0 });
      //     gsap.set('.testimonial-card', { y: 40, opacity: 0 });

      //     // Animate title words
      //     gsap.to(testimonialsTitleWords, {
      //       y: '0%',
      //       opacity: 1,
      //       duration: 0.8,
      //       stagger: 0.1,
      //       ease: 'power3.out'
      //     });

      //     // Animate subtitle
      //     gsap.to(testimonialsSubtitleRef.current, {
      //       y: 0,
      //       opacity: 1,
      //       duration: 1,
      //       delay: 0.4,
      //       ease: 'power2.out'
      //     });

      //     // Animate testimonial cards
      //     gsap.to('.testimonial-card', {
      //       y: 0,
      //       opacity: 1,
      //       duration: 0.8,
      //       stagger: 0.15,
      //       delay: 0.6,
      //       ease: 'power2.out'
      //     });
      //   }
      // });

      // Contact section animations - disabled to prevent React DOM conflicts
      // ScrollTrigger.create({
      //   trigger: contactRef.current,
      //   start: 'top 80%',
      //   onEnter: () => {
      //     // Split contact title into words
      //     const contactTitle = contactTitleRef.current;
      //     let contactTitleWords: HTMLElement[] = [];
      //     if (contactTitle) {
      //       contactTitleWords = splitTextIntoWords(contactTitle);
      //     }

      //     // Set initial states
      //     gsap.set(contactTitleWords, { y: '100%', opacity: 0 });
      //     gsap.set(contactSubtitleRef.current, { y: 24, opacity: 0 });
      //     gsap.set('.contact-cta', { y: 40, opacity: 0 });
      //     gsap.set('.contact-form', { y: 40, opacity: 0 });

      //     // Animate title words
      //     gsap.to(contactTitleWords, {
      //       y: '0%',
      //       opacity: 1,
      //       duration: 0.8,
      //       stagger: 0.1,
      //       ease: 'power3.out'
      //     });

      //     // Animate subtitle
      //     gsap.to(contactSubtitleRef.current, {
      //       y: 0,
      //       opacity: 1,
      //       duration: 1,
      //       delay: 0.4,
      //       ease: 'power2.out'
      //     });

      //     // Animate CTAs and form
      //     gsap.to('.contact-cta', {
      //       y: 0,
      //       opacity: 1,
      //       duration: 0.8,
      //       stagger: 0.1,
      //       delay: 0.6,
      //       ease: 'power2.out'
      //     });

      //     gsap.to('.contact-form', {
      //       y: 0,
      //       opacity: 1,
      //       duration: 0.8,
      //       delay: 0.8,
      //       ease: 'power2.out'
      //     });
      //   }
      // });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="hover:opacity-75 transition-opacity duration-300">
            <img 
              src="/images/branding/Levi-Homes_Logo-White.png" 
              alt="Levi Homes" 
              className="h-16 sm:h-20 md:h-24 w-auto"
            />
          </a>
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="relative">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white font-medium text-base sm:text-lg tracking-wider flex items-center gap-2 hover:text-[#F8B702] transition-colors duration-300"
              >
                MENU
                <FontAwesomeIcon 
                  icon={isMenuOpen ? faChevronUp : faChevronDown} 
                  className="text-sm" 
                />
              </button>
              
              {/* Full Screen Menu Overlay */}
              {isMenuOpen && (
                <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex flex-col justify-center items-center">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-8 right-8 text-white hover:text-[#F8B702] transition-colors duration-300 text-2xl"
                  >
                    ✕
                  </button>

                  {/* Menu Content - Two Column Layout */}
                  <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
                      {/* Services Column */}
                      <div className="text-center lg:text-left">
                        <div className="mb-12">
                          <span className="text-[#F8B702] text-sm uppercase tracking-[0.3em] font-medium">Services</span>
                        </div>
                        <div className="space-y-10">
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
                        <div className="mb-12">
                          <span className="text-[#F8B702] text-sm uppercase tracking-[0.3em] font-medium">Company</span>
                        </div>
                        <div className="space-y-12">
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
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen Video Background */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center text-white">
          <h1
            ref={titleRef}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-[0.85] tracking-tight mb-2 sm:mb-3"
          >
            LUXURY LIVING REFINED
          </h1>
          <p 
            ref={subtitleRef}
            className="font-sans text-xs sm:text-sm md:text-base text-white/80 tracking-wider uppercase font-medium max-w-xs sm:max-w-none mb-8"
          >
            Houston's Premier Home Transformation Specialists
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a href="tel:+17139225715" className="bg-gradient-to-b from-[#F8B702] via-[#F8B702] to-[#E6A602] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-105 shadow-lg shadow-black/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:rounded-lg sm:before:rounded-xl w-full sm:w-[335px] text-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2 fa-fw" />
              Call Us (713) 922-5715
            </a>
            <button onClick={() => setIsContactModalOpen(true)} className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-black px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#F8B702] hover:via-[#F8B702] hover:to-[#E6A602] hover:text-white shadow-lg shadow-black/30 border border-white/50 hover:shadow-lg hover:shadow-[#F8B702]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/20 before:to-white/40 before:rounded-lg sm:before:rounded-xl hover:scale-105 w-full sm:w-[335px] text-center">
              Get Your Custom Proposal
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Where Vision Meets Craftsmanship */}
      <section ref={portfolioRef} className="min-h-screen bg-black text-white relative z-10 py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="mb-3 sm:mb-4">
              <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">Our Portfolio</span>
            </div>
            <h2 
              ref={portfolioTitleRef}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-0 sm:mb-1 md:mb-1 text-white leading-none"
              style={{ fontWeight: 900, textShadow: '0 0 1px currentColor' }}
            >
              Where Vision Meets Craftsmanship
            </h2>
            <p className="font-sans text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
              Experience the future of luxury home remodeling in Houston's most prestigious neighborhoods.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project 1 */}
            <div className="portfolio-item group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '16/10' }}>
                <img
                  src="/images/showcase/5aa8034dea685964b380ef0a17bff7a6.jpg"
                  alt="Luxury Home Renovation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-serif text-xl font-medium mb-2">Covered Patio Design</h3>
                  <p className="font-sans text-sm text-white/80">Outdoor living space transformation</p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="portfolio-item group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '16/10' }}>
                <img
                  src="/images/showcase/Million Dollar Listing–Los Angeles.jpeg"
                  alt="Kitchen Remodeling"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-serif text-xl font-medium mb-2">Kitchen Remodeling</h3>
                  <p className="font-sans text-sm text-white/80">Modern culinary workspace design</p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="portfolio-item group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '16/10' }}>
                <img
                  src="/images/showcase/Screen-Shot-2019-08-09-at-11.15.51-AM.jpg"
                  alt="Primary Bathroom Renovation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-serif text-xl font-medium mb-2">Primary Bathroom Renovation</h3>
                  <p className="font-sans text-sm text-white/80">Spa-inspired luxury retreat</p>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="portfolio-item group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '16/10' }}>
                <img
                  src="/images/showcase/ferris-1.jpg"
                  alt="Primary Bedroom Suite"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-serif text-xl font-medium mb-2">Primary Bedroom Suite</h3>
                  <p className="font-sans text-sm text-white/80">Elegant master bedroom transformation</p>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="portfolio-item group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '16/10' }}>
                <img
                  src="/images/showcase/how-much-does-full-house-renovation-cost.jpg"
                  alt="Kitchen Design"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-serif text-xl font-medium mb-2">Kitchen Design</h3>
                  <p className="font-sans text-sm text-white/80">Contemporary kitchen transformation</p>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="portfolio-item group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '16/10' }}>
                <img
                  src="/images/showcase/neo-classic-tv-area-600x452.jpg"
                  alt="Living Room Design"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-serif text-xl font-medium mb-2">Living Room Design</h3>
                  <p className="font-sans text-sm text-white/80">Neo-classic entertainment space</p>
                </div>
              </div>
            </div>

          </div>

          {/* View More Button */}
          <div className="text-center mt-16">
            <button className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-black px-6 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#F8B702] hover:via-[#F8B702] hover:to-[#E6A602] hover:text-white shadow-lg shadow-black/20 border border-white/30 hover:shadow-lg hover:shadow-[#F8B702]/15 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/20 before:to-white/40 before:rounded-lg sm:before:rounded-xl hover:scale-105 w-full sm:w-[335px]">
              View All Projects
            </button>
          </div>
        </div>
      </section>
      
      {/* Services Section - Floating Cards */}
      <section ref={servicesRef} className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-black relative z-10 py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-22 sm:mb-26 md:mb-30">
            <div className="mb-3 sm:mb-4">
              <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">What We Do</span>
            </div>
            <h2 
              ref={servicesTitleRef}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-0 sm:mb-1 md:mb-1 text-black leading-none"
              style={{ fontWeight: 900, textShadow: '0 0 1px currentColor' }}
            >
              Our Services
            </h2>
            <p 
              ref={servicesSubtitleRef}
              className="font-sans text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0 mb-8 sm:mb-10 md:mb-12"
            >
              Transform your vision into reality with our comprehensive luxury home remodeling services.
            </p>
          </div>

          {/* Service Cards - REBUILT */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:flex md:flex-row justify-center items-start gap-8 sm:gap-4 md:gap-4">
            
            <a href="/services/kitchen-remodeling" className="bg-white rounded-lg sm:rounded-2xl shadow-xl shadow-black/25 overflow-hidden w-full sm:max-w-[300px] flex-shrink-0 sm:mx-auto transition-all duration-500 hover:shadow-2xl hover:shadow-black/40 hover:scale-105 hover:border-2 hover:border-[#F8B702] group cursor-pointer relative before:absolute before:inset-0 before:rounded-lg sm:before:rounded-2xl before:shadow-inner before:shadow-white/20 before:pointer-events-none block">
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <img src="/images/showcase/Million Dollar Listing–Los Angeles.jpeg" alt="Kitchen" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <div className="p-4 sm:p-4">
                <h4 className="text-base sm:text-base lg:text-lg font-medium text-center mb-1 sm:mb-2 group-hover:text-[#F8B702] transition-colors duration-300">Kitchen Remodeling</h4>
                <p className="text-sm sm:text-sm lg:text-base text-gray-600 text-center">Culinary masterpieces</p>
              </div>
            </a>

            <a href="/services/bathroom-remodeling" className="bg-white rounded-lg sm:rounded-2xl shadow-xl shadow-black/25 overflow-hidden w-full sm:max-w-[300px] flex-shrink-0 sm:mx-auto transition-all duration-500 hover:shadow-2xl hover:shadow-black/40 hover:scale-105 hover:border-2 hover:border-[#F8B702] group cursor-pointer sm:md:-translate-y-12 relative before:absolute before:inset-0 before:rounded-lg sm:before:rounded-2xl before:shadow-inner before:shadow-white/20 before:pointer-events-none block">
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <img src="/images/showcase/Screen-Shot-2019-08-09-at-11.15.51-AM.jpg" alt="Bathroom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <div className="p-4 sm:p-4">
                <h4 className="text-base sm:text-base lg:text-lg font-medium text-center mb-1 sm:mb-2 group-hover:text-[#F8B702] transition-colors duration-300">Bathroom Remodeling</h4>
                <p className="text-sm sm:text-sm lg:text-base text-gray-600 text-center">Luxury spa experiences</p>
              </div>
            </a>

            <a href="/services/general-construction" className="bg-white rounded-lg sm:rounded-2xl shadow-xl shadow-black/25 overflow-hidden w-full sm:max-w-[300px] flex-shrink-0 sm:mx-auto transition-all duration-500 hover:shadow-2xl hover:shadow-black/40 hover:scale-105 hover:border-2 hover:border-[#F8B702] group cursor-pointer relative before:absolute before:inset-0 before:rounded-lg sm:before:rounded-2xl before:shadow-inner before:shadow-white/20 before:pointer-events-none block">
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <img src="/images/showcase/5aa8034dea685964b380ef0a17bff7a6.jpg" alt="Construction" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <div className="p-4 sm:p-4">
                <h4 className="text-base sm:text-base lg:text-lg font-medium text-center mb-1 sm:mb-2 group-hover:text-[#F8B702] transition-colors duration-300">General Construction</h4>
                <p className="text-sm sm:text-sm lg:text-base text-gray-600 text-center">Dream it, we build it</p>
              </div>
            </a>

            <a href="/services/room-additions" className="bg-white rounded-lg sm:rounded-2xl shadow-xl shadow-black/25 overflow-hidden w-full sm:max-w-[300px] flex-shrink-0 sm:mx-auto transition-all duration-500 hover:shadow-2xl hover:shadow-black/40 hover:scale-105 hover:border-2 hover:border-[#F8B702] group cursor-pointer sm:md:-translate-y-12 relative before:absolute before:inset-0 before:rounded-lg sm:before:rounded-2xl before:shadow-inner before:shadow-white/20 before:pointer-events-none block">
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <img src="/images/showcase/ferris-1.jpg" alt="Room Addition" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <div className="p-4 sm:p-4">
                <h4 className="text-base sm:text-base lg:text-lg font-medium text-center mb-1 sm:mb-2 group-hover:text-[#F8B702] transition-colors duration-300">Room Additions</h4>
                <p className="text-sm sm:text-sm lg:text-base text-gray-600 text-center">Seamless home additions</p>
              </div>
            </a>

            <a href="/services/garage-conversion" className="bg-white rounded-lg sm:rounded-2xl shadow-xl shadow-black/25 overflow-hidden w-full sm:max-w-[300px] flex-shrink-0 sm:mx-auto transition-all duration-500 hover:shadow-2xl hover:shadow-black/40 hover:scale-105 hover:border-2 hover:border-[#F8B702] group cursor-pointer relative before:absolute before:inset-0 before:rounded-lg sm:before:rounded-2xl before:shadow-inner before:shadow-white/20 before:pointer-events-none block">
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <img src="/images/showcase/neo-classic-tv-area-600x452.jpg" alt="Garage" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <div className="p-4 sm:p-4">
                <h4 className="text-base sm:text-base lg:text-lg font-medium text-center mb-1 sm:mb-2 group-hover:text-[#F8B702] transition-colors duration-300">Garage Conversion</h4>
                <p className="text-sm sm:text-sm lg:text-base text-gray-600 text-center">Amazing extra spaces</p>
              </div>
            </a>

            <a href="/services/attic-renovation" className="bg-white rounded-lg sm:rounded-2xl shadow-xl shadow-black/25 overflow-hidden w-full sm:max-w-[300px] flex-shrink-0 sm:mx-auto transition-all duration-500 hover:shadow-2xl hover:shadow-black/40 hover:scale-105 hover:border-2 hover:border-[#F8B702] group cursor-pointer sm:md:-translate-y-12 relative before:absolute before:inset-0 before:rounded-lg sm:before:rounded-2xl before:shadow-inner before:shadow-white/20 before:pointer-events-none block">
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <img src="/images/showcase/how-much-does-full-house-renovation-cost.jpg" alt="Attic" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <div className="p-4 sm:p-4">
                <h4 className="text-base sm:text-base lg:text-lg font-medium text-center mb-1 sm:mb-2 group-hover:text-[#F8B702] transition-colors duration-300">Attic Renovation</h4>
                <p className="text-sm sm:text-sm lg:text-base text-gray-600 text-center">Transform unused spaces</p>
              </div>
            </a>

          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16 md:mt-24 relative z-20">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+17139225715" className="bg-gradient-to-b from-[#F8B702] via-[#F8B702] to-[#E6A602] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-105 shadow-lg shadow-black/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:rounded-lg sm:before:rounded-xl w-full sm:w-[335px] text-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Call Us (713) 922-5715
              </a>
              <button onClick={() => setIsContactModalOpen(true)} className="bg-gradient-to-b from-gray-800 via-black to-gray-900 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#F8B702] hover:via-[#F8B702] hover:to-[#E6A602] hover:text-black shadow-lg shadow-black/50 border border-gray-700 hover:shadow-lg hover:shadow-[#F8B702]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/10 before:to-white/20 before:rounded-lg sm:before:rounded-xl hover:scale-105 w-full sm:w-[335px] text-center">
                Get Your Custom Proposal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} id="process" className="bg-black text-white relative z-10 py-8 sm:py-12 md:py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/AdobeStock_100737957.jpeg)' }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30 z-[1]"></div>
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="mb-3 sm:mb-4">
              <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">How We Work</span>
            </div>
            <h2 
              ref={processTitleRef}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-0 sm:mb-1 md:mb-1 text-white leading-none"
              style={{ fontWeight: 900, textShadow: '0 0 1px currentColor' }}
            >
              Our Process
            </h2>
            <p 
              ref={processSubtitleRef}
              className="font-sans text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0"
            >
              A proven, collaborative approach—built around you.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-4 md:gap-4">
            
            {/* Step 1 - Consultation */}
            <div className="process-step group cursor-pointer bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#F8B702]/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] via-[#F8B702] to-[#D4A003] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-inner shadow-black/10 border-2 border-[#FFE55C]/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/10 before:to-white/20 before:rounded-lg">
                    <FontAwesomeIcon icon={faComments} className="text-white text-2xl drop-shadow-lg relative z-10" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[#F8B702] font-bold text-xs uppercase tracking-wider mb-2">01. Consultation</div>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4 group-hover:text-[#F8B702] transition-colors duration-300">
                    Discovery & Vision
                  </h3>
                  <p className="font-sans text-lg text-white/80 leading-relaxed">
                    We begin with an in-depth consultation to understand your vision, lifestyle, and project goals, ensuring every detail aligns with your dreams.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 - Design & Planning */}
            <div className="process-step group cursor-pointer bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#F8B702]/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] via-[#F8B702] to-[#D4A003] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-inner shadow-black/10 border-2 border-[#FFE55C]/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/10 before:to-white/20 before:rounded-lg">
                    <FontAwesomeIcon icon={faRuler} className="text-white text-2xl drop-shadow-lg relative z-10" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[#F8B702] font-bold text-xs uppercase tracking-wider mb-2">02. Design & Planning</div>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4 group-hover:text-[#F8B702] transition-colors duration-300">
                    Blueprint to Reality
                  </h3>
                  <p className="font-sans text-lg text-white/80 leading-relaxed">
                    Our designers create detailed architectural plans and 3D renderings, allowing you to visualize your space before construction begins.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 - Construction */}
            <div className="process-step group cursor-pointer bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#F8B702]/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] via-[#F8B702] to-[#D4A003] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-inner shadow-black/10 border-2 border-[#FFE55C]/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/10 before:to-white/20 before:rounded-lg">
                    <FontAwesomeIcon icon={faHammer} className="text-white text-2xl drop-shadow-lg relative z-10" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[#F8B702] font-bold text-xs uppercase tracking-wider mb-2">03. Construction</div>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4 group-hover:text-[#F8B702] transition-colors duration-300">
                    Expert Craftsmanship
                  </h3>
                  <p className="font-sans text-lg text-white/80 leading-relaxed">
                    Master craftsmen bring your vision to life with meticulous attention to detail, premium materials, and time-tested techniques.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 - Completion & Walkthrough */}
            <div className="process-step group cursor-pointer bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#F8B702]/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] via-[#F8B702] to-[#D4A003] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-inner shadow-black/10 border-2 border-[#FFE55C]/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/10 before:to-white/20 before:rounded-lg">
                    <FontAwesomeIcon icon={faStar} className="text-white text-2xl drop-shadow-lg relative z-10" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[#F8B702] font-bold text-xs uppercase tracking-wider mb-2">04. Completion</div>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4 group-hover:text-[#F8B702] transition-colors duration-300">
                    Your Dream Realized
                  </h3>
                  <p className="font-sans text-lg text-white/80 leading-relaxed">
                    We conduct a thorough walkthrough, ensuring every element exceeds your expectations before celebrating your transformed space.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-10 md:mt-12 relative z-20">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 md:gap-4 justify-center items-center">
              <a href="tel:+17139225715" className="bg-gradient-to-b from-[#F8B702] via-[#F8B702] to-[#E6A602] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-105 shadow-lg shadow-black/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:rounded-lg sm:before:rounded-xl w-full sm:w-[335px] text-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Call Us (713) 922-5715
              </a>
              <a href="/contact" className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-black px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#F8B702] hover:via-[#F8B702] hover:to-[#E6A602] hover:text-white shadow-lg shadow-black/30 border border-white/50 hover:shadow-lg hover:shadow-[#F8B702]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/20 before:to-white/40 before:rounded-lg sm:before:rounded-xl hover:scale-105 w-full sm:w-[335px] text-center">
                Get Your Custom Proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} id="testimonials" className="bg-[#F8F7F5] text-[#0E0E0E] relative z-10 py-12 sm:py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-8 pb-0 -mb-24">
          {/* Section Header */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            {/* Header Content */}
            <div className="text-center">
              <div className="mb-3 sm:mb-4">
                <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">Client Stories</span>
              </div>
              <h2 
                ref={testimonialsTitleRef}
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-0 sm:mb-1 md:mb-1 text-[#0E0E0E] leading-none"
                style={{ fontWeight: 900, textShadow: '0 0 1px currentColor' }}
              >
                What Our Clients Are Saying
              </h2>
              <p 
                ref={testimonialsSubtitleRef}
                className="font-sans text-base sm:text-lg md:text-xl text-[#0E0E0E]/80 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0"
              >
                Real homeowners. Real transformations. Real praise.
              </p>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Testimonial 1 */}
            <div className="testimonial-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group h-96 flex flex-col">
              <div className="flex-1">
                <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face" alt="Sarah Chen" className="w-full h-full object-cover" />
                </div>
                <blockquote className="font-serif text-lg text-[#0E0E0E] italic leading-relaxed mb-4">
                  "Levi Homes transformed our dated kitchen into the heart of our home. Their attention to detail and craftsmanship exceeded every expectation we had."
                </blockquote>
              </div>
              <div className="mt-auto">
                <h3 className="font-sans font-semibold text-[#0E0E0E] text-base mb-1">Sarah Chen</h3>
                <p className="font-sans text-sm text-[#0E0E0E]/60">Frisco, TX</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group h-96 flex flex-col">
              <div className="flex-1">
                <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" alt="Michael Rodriguez" className="w-full h-full object-cover" />
                </div>
                <blockquote className="font-serif text-lg text-[#0E0E0E] italic leading-relaxed mb-4">
                  "From concept to completion, the Levi Homes team delivered luxury at every turn. Our master bathroom renovation is nothing short of spectacular."
                </blockquote>
              </div>
              <div className="mt-auto">
                <h3 className="font-sans font-semibold text-[#0E0E0E] text-base mb-1">Michael Rodriguez</h3>
                <p className="font-sans text-sm text-[#0E0E0E]/60">The Woodlands, TX</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group h-96 flex flex-col">
              <div className="flex-1">
                <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" alt="Jennifer Thompson" className="w-full h-full object-cover" />
                </div>
                <blockquote className="font-serif text-lg text-[#0E0E0E] italic leading-relaxed mb-4">
                  "Professional, punctual, and perfectionist. Levi Homes turned our whole house renovation dreams into reality with unmatched quality and service."
                </blockquote>
              </div>
              <div className="mt-auto">
                <h3 className="font-sans font-semibold text-[#0E0E0E] text-base mb-1">Jennifer Thompson</h3>
                <p className="font-sans text-sm text-[#0E0E0E]/60">Sugar Land, TX</p>
              </div>
            </div>

          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16 md:mt-24 mb-48">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+17139225715" className="bg-gradient-to-b from-[#F8B702] via-[#F8B702] to-[#E6A602] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-105 shadow-lg shadow-black/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:rounded-lg sm:before:rounded-xl w-full sm:w-[335px] text-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Call Us (713) 922-5715
              </a>
              <button onClick={() => setIsContactModalOpen(true)} className="bg-gradient-to-b from-gray-800 via-black to-gray-900 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#F8B702] hover:via-[#F8B702] hover:to-[#E6A602] hover:text-black shadow-lg shadow-black/50 border border-gray-700 hover:shadow-lg hover:shadow-[#F8B702]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/10 before:to-white/20 before:rounded-lg sm:before:rounded-xl hover:scale-105 w-full sm:w-[335px] text-center">
                Get Your Custom Proposal
              </button>
            </div>
          </div>

        </div>

        {/* Full Width Image Carousel */}
        <div 
          className="overflow-x-auto cursor-grab active:cursor-grabbing hide-scrollbar"
          style={{
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          onMouseDown={(e) => {
            const slider = e.currentTarget;
            const startX = e.pageX;
            const scrollLeft = slider.scrollLeft;
            let isDown = true;
            
            // Get the total scroll width and individual image width for loop calculations
            const totalWidth = slider.scrollWidth;
            const containerWidth = slider.clientWidth;
            const halfWidth = totalWidth / 2; // Since we have duplicate images
            
            // Temporarily disable smooth scrolling for immediate response
            slider.style.scrollBehavior = 'auto';
            
            const handleMouseMove = (e: MouseEvent) => {
              if (!isDown) return;
              const x = e.pageX;
              const walk = (startX - x); // Direct 1:1 mapping for free drag
              let newScrollLeft = scrollLeft + walk;
              
              // Handle infinite loop for dragging
              if (newScrollLeft >= halfWidth) {
                newScrollLeft = newScrollLeft - halfWidth;
              } else if (newScrollLeft < 0) {
                newScrollLeft = halfWidth + newScrollLeft;
              }
              
              slider.scrollLeft = newScrollLeft;
            };
            
            const handleMouseUp = () => {
              isDown = false;
              document.removeEventListener('mousemove', handleMouseMove);
              document.removeEventListener('mouseup', handleMouseUp);
              document.removeEventListener('mouseleave', handleMouseLeave);
              slider.style.cursor = 'grab';
              slider.style.userSelect = 'auto';
              slider.style.scrollBehavior = 'smooth'; // Re-enable smooth scrolling
            };
            
            const handleMouseLeave = () => {
              isDown = false;
              document.removeEventListener('mousemove', handleMouseMove);
              document.removeEventListener('mouseup', handleMouseUp);
              document.removeEventListener('mouseleave', handleMouseLeave);
              slider.style.cursor = 'grab';
              slider.style.userSelect = 'auto';
              slider.style.scrollBehavior = 'smooth';
            };
            
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('mouseleave', handleMouseLeave);
            slider.style.cursor = 'grabbing';
            slider.style.userSelect = 'none';
            e.preventDefault();
          }}
        >
            <div className="flex gap-6 animate-scroll hover:animate-pause">
              {/* Image Set 1 */}
              <div className="flex-shrink-0 w-96 h-72 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/showcase/ferris-1.jpg" 
                  alt="Luxury Kitchen Renovation" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex-shrink-0 w-96 h-72 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/showcase/how-much-does-full-house-renovation-cost.jpg" 
                  alt="Modern Bathroom Design" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex-shrink-0 w-96 h-72 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/showcase/neo-classic-tv-area-600x452.jpg" 
                  alt="Living Room Transformation" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex-shrink-0 w-96 h-72 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/showcase/5aa8034dea685964b380ef0a17bff7a6.jpg" 
                  alt="Luxury Master Suite" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex-shrink-0 w-96 h-72 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/showcase/Screen-Shot-2019-08-09-at-11.15.51-AM.jpg" 
                  alt="Custom Home Addition" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex-shrink-0 w-96 h-72 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/showcase/Million Dollar Listing–Los Angeles.jpeg" 
                  alt="High-End Renovation" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 w-96 h-72 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/showcase/ferris-1.jpg" 
                  alt="Luxury Kitchen Renovation" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex-shrink-0 w-96 h-72 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/showcase/how-much-does-full-house-renovation-cost.jpg" 
                  alt="Modern Bathroom Design" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex-shrink-0 w-96 h-72 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/showcase/neo-classic-tv-area-600x452.jpg" 
                  alt="Living Room Transformation" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex-shrink-0 w-96 h-72 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/showcase/5aa8034dea685964b380ef0a17bff7a6.jpg" 
                  alt="Luxury Master Suite" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex-shrink-0 w-96 h-72 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/showcase/Screen-Shot-2019-08-09-at-11.15.51-AM.jpg" 
                  alt="Custom Home Addition" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex-shrink-0 w-96 h-72 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/showcase/Million Dollar Listing–Los Angeles.jpeg" 
                  alt="High-End Renovation" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
      </section>



      {/* Contact CTA Section */}
      <section ref={contactRef} id="contact" className="bg-[#0E0E0E] text-white relative z-20 py-12 sm:py-16 overflow-hidden">
        
        {/* Large LEVI HOMES Text Background */}
        <div className="absolute inset-0 flex items-end justify-center pb-20 sm:pb-28 md:pb-36 z-0">
          <h2 className="font-serif text-[20vw] sm:text-[18vw] md:text-[15vw] lg:text-[13vw] xl:text-[12vw] font-black text-black leading-[0.8] tracking-[0.1em] sm:tracking-[0.2em] select-none whitespace-nowrap">
            LEVI HOMES
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="mb-3 sm:mb-4">
              <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">Get Started Today</span>
            </div>
            <h2 
              ref={contactTitleRef}
              className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-0 sm:mb-1 md:mb-1 text-white px-4 sm:px-0"
              style={{ fontWeight: 900, textShadow: '0 0 1px currentColor' }}
            >
              Ready to Transform <span className="text-transparent bg-gradient-to-r from-[#F8B702] to-[#FFD700] bg-clip-text">Your Home?</span>
            </h2>
            <p 
              ref={contactSubtitleRef}
              className="font-sans text-base sm:text-lg md:text-xl text-white/80 leading-relaxed px-4 sm:px-0"
            >
              Let's talk about what's possible.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
            
            {/* Left Column - Enhanced CTAs */}
            <div className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8 -mt-[175px]">
              
              {/* Quick Contact Options */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#F8B702] to-[#E6A602] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-[#F8B702]/30 transition-all duration-300 group-hover:scale-110">
                    <FontAwesomeIcon icon={faPhone} className="text-black text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base sm:text-lg">Call Directly</h4>
                    <a href="tel:+17139225715" className="text-[#F8B702] text-lg sm:text-xl font-bold hover:text-[#FFD700] transition-colors duration-300">
                      (713) 922-5715
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#F8B702] to-[#E6A602] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-[#F8B702]/30 transition-all duration-300 group-hover:scale-110">
                    <FontAwesomeIcon icon={faEnvelope} className="text-black text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base sm:text-lg">Email Us</h4>
                    <a href="mailto:levi@levihomes.com" className="text-[#F8B702] text-lg sm:text-xl font-bold hover:text-[#FFD700] transition-colors duration-300 break-all sm:break-normal">
                      levi@levihomes.com
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Enhanced Contact Form */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Let's Connect</h3>
                <p className="text-white/70 text-sm sm:text-base">Tell us about your dream project and we'll make it reality.</p>
              </div>
              
              <form className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium text-sm sm:text-base placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300 hover:bg-white/15"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium text-sm sm:text-base placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300 hover:bg-white/15"
                      placeholder="(713) 922-5715"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium text-sm sm:text-base placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300 hover:bg-white/15"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="project-type" className="block text-sm font-semibold text-white mb-2">Project Type</label>
                  <select 
                    id="project-type" 
                    name="project-type"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300 hover:bg-white/15"
                  >
                    <option value="" className="bg-[#0E0E0E] text-white">Select a project type</option>
                    <option value="kitchen" className="bg-[#0E0E0E] text-white">Kitchen Remodeling</option>
                    <option value="bathroom" className="bg-[#0E0E0E] text-white">Bathroom Renovation</option>
                    <option value="addition" className="bg-[#0E0E0E] text-white">Room Addition</option>
                    <option value="full-remodel" className="bg-[#0E0E0E] text-white">Full Home Remodel</option>
                    <option value="other" className="bg-[#0E0E0E] text-white">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">Project Details</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium text-sm sm:text-base placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300 hover:bg-white/15 resize-none"
                    placeholder="Tell us about your vision, timeline, and any specific requirements..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#F8B702] to-[#FFD700] text-black px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-500 hover:shadow-2xl hover:shadow-[#F8B702]/40 hover:scale-[1.02] relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Send Message 
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
      </section>

      <Footer />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}