'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoWords } from '../utils/textSplit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faRuler, faHammer, faStar, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

export default function Home2() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesTitleRef = useRef<HTMLHeadingElement>(null);
  const servicesSubtitleRef = useRef<HTMLParagraphElement>(null);
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

  useLayoutEffect(() => {
    // Configure ScrollTrigger to prevent double scrollbars
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });
    
    const ctx = gsap.context(() => {
      // Split title text into words
      const title = titleRef.current;
      let titleWordElements: HTMLElement[] = [];
      if (title) {
        titleWordElements = splitTextIntoWords(title);
      }

      // Set initial states
      gsap.set(titleWordElements, { y: '100%', opacity: 0 });
      gsap.set(videoContainerRef.current, { scale: 1.0, borderRadius: '24px' });

      // Title entrance animation
      const tl = gsap.timeline({ delay: 0.5 });
      tl.to(titleWordElements, {
        y: '0%',
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      });

      // Video expansion animation
      const mainScrollTrigger = ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: '+=200vh',
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Title and subtitle animation - moves up and fades out
          if (progress < 0.3) {
            const titleProgress = progress / 0.3;
            gsap.set([titleRef.current, subtitleRef.current], {
              y: -(titleProgress * 150),
              opacity: 1 - (titleProgress * 0.8)
            });
          } else {
            gsap.set([titleRef.current, subtitleRef.current], {
              y: -150,
              opacity: 0.2
            });
          }
          
          // Video expansion
          let scale, borderRadius;
          
          if (progress < 0.5) {
            // Gradual expansion
            const phase1Progress = progress / 0.5;
            scale = 1.0 + (phase1Progress * 0.2);
            borderRadius = 24 - (phase1Progress * 24);
            
            // Reset container during first phase
            if (videoContainerRef.current?.parentElement) {
              gsap.set(videoContainerRef.current.parentElement, {
                position: 'relative',
                top: 'auto',
                left: 'auto',
                width: '100%',
                height: 'auto',
                zIndex: 'auto'
              });
            }
            
            gsap.set(videoContainerRef.current, {
              width: '100%',
              height: '100%',
              aspectRatio: '16/9'
            });
          } else {
            // Final expansion to fullscreen
            const phase2Progress = (progress - 0.5) / 0.5;
            scale = 1.2;
            borderRadius = 0;
            
            // Expand to full viewport during this phase
            if (videoContainerRef.current?.parentElement) {
              gsap.set(videoContainerRef.current.parentElement, {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 1
              });
            }
            
            gsap.set(videoContainerRef.current, {
              width: '100%',
              height: '100vh',
              aspectRatio: 'auto'
            });
          }
          
          gsap.set(videoContainerRef.current, {
            scale: scale,
            borderRadius: `${borderRadius}px`
          });
        },
        onLeave: () => {
          // Keep video as fixed background when leaving the pinned section
          if (videoContainerRef.current?.parentElement) {
            gsap.set(videoContainerRef.current.parentElement, {
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 1
            });
          }
        },
        onEnterBack: () => {
          // Reset everything when scrolling back into the pinned section
          gsap.set([titleRef.current, subtitleRef.current], {
            y: 0,
            opacity: 1
          });
          
          if (videoContainerRef.current?.parentElement) {
            gsap.set(videoContainerRef.current.parentElement, {
              position: 'relative',
              top: 'auto',
              left: 'auto',
              width: '100%',
              height: 'auto',
              zIndex: 'auto'
            });
          }
          
          gsap.set(videoContainerRef.current, {
            scale: 1.0,
            borderRadius: '24px',
            width: '100%',
            height: '100%',
            aspectRatio: '16/9'
          });
        }
      });

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
        start: 'top 80%',
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
      <nav className="fixed top-0 left-0 right-0 z-50 p-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="hover:opacity-75 transition-opacity duration-300">
            <img 
              src="/images/branding/Levi-Homes_Logo-Black.png" 
              alt="Levi Homes" 
              className="h-12 md:h-16 w-auto"
            />
          </a>
          <div className="flex items-center gap-8">
            <a 
              href="/" 
              className="text-black/60 hover:text-[#F8B702] transition-colors duration-300 text-sm font-medium tracking-wider"
            >
              HOME 1
            </a>
            <button className="text-black font-medium text-lg tracking-wider">
              MENU
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Large Text and Video */}
      <section className="h-screen flex flex-col justify-start items-center px-2 pt-48 pb-8 overflow-hidden">
        <div className="text-center w-full mb-8">
          <h1
            ref={titleRef}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-black leading-[0.85] tracking-tight whitespace-nowrap"
          >
            LUXURY LIVING REFINED
          </h1>
          <p 
            ref={subtitleRef}
            className="font-sans text-sm md:text-base text-black/60 mt-0.5 mb-2 tracking-wider uppercase font-medium"
          >
            Houston's Premier Home Transformation Specialists
          </p>
        </div>

        {/* Video Section */}
        <div ref={videoSectionRef} className="flex-1 flex items-center justify-center w-full px-2">
          <div 
            ref={videoContainerRef}
            className="w-full aspect-video overflow-hidden relative"
          >
            <video
              ref={videoRef}
              src="/hero-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            
            {/* Video overlay for branding */}
            <div className="absolute top-8 left-8">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Where Vision Meets Craftsmanship */}
      <section ref={portfolioRef} className="min-h-screen bg-black text-white relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">Our Portfolio</span>
            </div>
            <h2 
              ref={portfolioTitleRef}
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white"
            >
              Where Vision Meets Craftsmanship
            </h2>
            <p className="font-sans text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
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
            <button className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-black px-8 py-4 rounded-[20px] font-medium text-lg transition-all duration-300 hover:from-[#F8B702] hover:via-[#F8B702] hover:to-[#E6A602] hover:text-white shadow-lg shadow-black/20 border border-white/30 hover:shadow-lg hover:shadow-[#F8B702]/15 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/20 before:to-white/40 before:rounded-[20px] hover:scale-105">
              View All Projects
            </button>
          </div>
        </div>
      </section>
      
      {/* Services Section - Floating Cards */}
      <section ref={servicesRef} className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-black relative z-10 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">What We Do</span>
            </div>
            <h2 
              ref={servicesTitleRef}
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-black"
            >
              Our Services
            </h2>
            <p 
              ref={servicesSubtitleRef}
              className="font-sans text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
            >
              Transform your vision into reality with our comprehensive luxury home remodeling services.
            </p>
          </div>

          {/* Service Cards - REBUILT */}
          <div className="w-full px-4">
            <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-4">
              
              <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-[300px] h-96 flex-shrink-0 mx-auto transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-[#F8B702] group cursor-pointer">
                <img src="/images/showcase/Million Dollar Listing–Los Angeles.jpeg" alt="Kitchen" className="w-full aspect-square object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-500"/>
                <h4 className="text-lg font-medium text-center mb-2 group-hover:text-[#F8B702] transition-colors duration-300">Kitchen Remodeling</h4>
                <p className="text-base text-gray-600 text-center">Culinary masterpieces</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-[300px] h-96 flex-shrink-0 mx-auto transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-[#F8B702] group cursor-pointer md:-translate-y-12">
                <img src="/images/showcase/Screen-Shot-2019-08-09-at-11.15.51-AM.jpg" alt="Bathroom" className="w-full aspect-square object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-500"/>
                <h4 className="text-lg font-medium text-center mb-2 group-hover:text-[#F8B702] transition-colors duration-300">Bathroom Remodeling</h4>
                <p className="text-base text-gray-600 text-center">Luxury spa experiences</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-[300px] h-96 flex-shrink-0 mx-auto transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-[#F8B702] group cursor-pointer">
                <img src="/images/showcase/5aa8034dea685964b380ef0a17bff7a6.jpg" alt="Construction" className="w-full aspect-square object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-500"/>
                <h4 className="text-lg font-medium text-center mb-2 group-hover:text-[#F8B702] transition-colors duration-300">General Construction</h4>
                <p className="text-base text-gray-600 text-center">Dream it, we build it</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-[300px] h-96 flex-shrink-0 mx-auto transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-[#F8B702] group cursor-pointer md:-translate-y-12">
                <img src="/images/showcase/ferris-1.jpg" alt="Room Addition" className="w-full aspect-square object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-500"/>
                <h4 className="text-lg font-medium text-center mb-2 group-hover:text-[#F8B702] transition-colors duration-300">Room Additions</h4>
                <p className="text-base text-gray-600 text-center">Seamless home additions</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-[300px] h-96 flex-shrink-0 mx-auto transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-[#F8B702] group cursor-pointer">
                <img src="/images/showcase/neo-classic-tv-area-600x452.jpg" alt="Garage" className="w-full aspect-square object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-500"/>
                <h4 className="text-lg font-medium text-center mb-2 group-hover:text-[#F8B702] transition-colors duration-300">Garage Conversion</h4>
                <p className="text-base text-gray-600 text-center">Amazing extra spaces</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-[300px] h-96 flex-shrink-0 mx-auto transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-[#F8B702] group cursor-pointer md:-translate-y-12">
                <img src="/images/showcase/how-much-does-full-house-renovation-cost.jpg" alt="Attic" className="w-full aspect-square object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-500"/>
                <h4 className="text-lg font-medium text-center mb-2 group-hover:text-[#F8B702] transition-colors duration-300">Attic Renovation</h4>
                <p className="text-base text-gray-600 text-center">Transform unused spaces</p>
              </div>

            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-24 relative z-20">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+1234567890" className="bg-gradient-to-b from-[#F8B702] via-[#F8B702] to-[#E6A602] text-white px-10 py-4 rounded-[20px] font-medium text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-105 shadow-lg shadow-black/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:rounded-[20px]">
<FontAwesomeIcon icon={faPhone} className="mr-2" />
                Discuss Your Dream Project
              </a>
              <a href="/contact" className="bg-gradient-to-b from-gray-800 via-black to-gray-900 text-white px-10 py-4 rounded-[20px] font-medium text-lg transition-all duration-300 hover:from-[#F8B702] hover:via-[#F8B702] hover:to-[#E6A602] hover:text-black shadow-lg shadow-black/50 border border-gray-700 hover:shadow-lg hover:shadow-[#F8B702]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/10 before:to-white/20 before:rounded-[20px] hover:scale-105">
                Get Your Custom Proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} id="process" className="min-h-screen bg-black text-white relative z-10 py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/AdobeStock_100737957.jpeg)' }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30 z-[1]"></div>
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">How We Work</span>
            </div>
            <h2 
              ref={processTitleRef}
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white"
            >
              Our Process
            </h2>
            <p 
              ref={processSubtitleRef}
              className="font-sans text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto"
            >
              A proven, collaborative approach—built around you.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            
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
          <div className="text-center mt-24 relative z-20">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+1234567890" className="bg-gradient-to-b from-[#F8B702] via-[#F8B702] to-[#E6A602] text-white px-10 py-4 rounded-[20px] font-medium text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-105 shadow-lg shadow-black/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:rounded-[20px]">
<FontAwesomeIcon icon={faPhone} className="mr-2" />
                Discuss Your Dream Project
              </a>
              <a href="/contact" className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-black px-10 py-4 rounded-[20px] font-medium text-lg transition-all duration-300 hover:from-[#F8B702] hover:via-[#F8B702] hover:to-[#E6A602] hover:text-white shadow-lg shadow-black/30 border border-white/50 hover:shadow-lg hover:shadow-[#F8B702]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/20 before:to-white/40 before:rounded-[20px] hover:scale-105">
                Get Your Custom Proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} id="testimonials" className="min-h-screen bg-[#F8F7F5] text-[#0E0E0E] relative z-10 pt-24 pb-0">
        <div className="max-w-6xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">Client Stories</span>
            </div>
            <h2 
              ref={testimonialsTitleRef}
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-[#0E0E0E]"
            >
              What Our Clients Are Saying
            </h2>
            <p 
              ref={testimonialsSubtitleRef}
              className="font-sans text-lg md:text-xl text-[#0E0E0E]/80 leading-relaxed max-w-4xl mx-auto"
            >
              Real homeowners. Real transformations. Real praise.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Testimonial 1 */}
            <div className="testimonial-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img src="/avatars/client1.jpg" alt="Sarah Chen" className="w-full h-full object-cover" />
                </div>
                <blockquote className="font-serif text-lg text-[#0E0E0E] italic leading-relaxed mb-4">
                  "Levi Homes transformed our dated kitchen into the heart of our home. Their attention to detail and craftsmanship exceeded every expectation we had."
                </blockquote>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#0E0E0E] text-base mb-1">Sarah Chen</h3>
                <p className="font-sans text-sm text-[#0E0E0E]/60">Frisco, TX</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img src="/avatars/client2.jpg" alt="Michael Rodriguez" className="w-full h-full object-cover" />
                </div>
                <blockquote className="font-serif text-lg text-[#0E0E0E] italic leading-relaxed mb-4">
                  "From concept to completion, the Levi Homes team delivered luxury at every turn. Our master bathroom renovation is nothing short of spectacular."
                </blockquote>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#0E0E0E] text-base mb-1">Michael Rodriguez</h3>
                <p className="font-sans text-sm text-[#0E0E0E]/60">The Woodlands, TX</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img src="/avatars/client3.jpg" alt="Jennifer Thompson" className="w-full h-full object-cover" />
                </div>
                <blockquote className="font-serif text-lg text-[#0E0E0E] italic leading-relaxed mb-4">
                  "Professional, punctual, and perfectionist. Levi Homes turned our whole house renovation dreams into reality with unmatched quality and service."
                </blockquote>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#0E0E0E] text-base mb-1">Jennifer Thompson</h3>
                <p className="font-sans text-sm text-[#0E0E0E]/60">Sugar Land, TX</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full Width Image Carousel */}
      <section className="pt-0 pb-6 overflow-hidden bg-gray-50">
        <div className="flex animate-scroll gap-6">
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
      </section>

      {/* Testimonials CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Call to Action */}
          <div className="text-center mt-24">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+1234567890" className="bg-gradient-to-b from-[#F8B702] via-[#F8B702] to-[#E6A602] text-white px-10 py-4 rounded-[20px] font-medium text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-105 shadow-lg shadow-black/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:rounded-[20px]">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Discuss Your Dream Project
              </a>
              <a href="/contact" className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-black px-10 py-4 rounded-[20px] font-medium text-lg transition-all duration-300 hover:from-[#F8B702] hover:via-[#F8B702] hover:to-[#E6A602] hover:text-white shadow-lg shadow-black/20 border border-white/30 hover:shadow-lg hover:shadow-[#F8B702]/15 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/20 before:to-white/40 before:rounded-[20px] hover:scale-105">
                Get Your Custom Proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section ref={contactRef} id="contact" className="bg-[#0E0E0E] text-white relative z-10 py-20 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <span className="text-[#F8B702] text-sm font-semibold tracking-[0.3em] uppercase bg-[#F8B702]/10 px-6 py-2 rounded-full border border-[#F8B702]/20">
                Get Started Today
              </span>
            </div>
            <h2 
              ref={contactTitleRef}
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            >
              Ready to Transform <span className="text-transparent bg-gradient-to-r from-[#F8B702] to-[#FFD700] bg-clip-text">Your Home?</span>
            </h2>
            <p 
              ref={contactSubtitleRef}
              className="font-sans text-xl md:text-2xl text-white/80 leading-relaxed"
            >
              Let's talk about what's possible.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24 items-start max-w-6xl mx-auto">
            
            {/* Left Column - Enhanced CTAs */}
            <div className="space-y-10">
              {/* Primary CTA Card */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Start Your Journey</h3>
                <p className="text-white/70 text-lg mb-6 leading-relaxed">
                  Ready to discuss your vision? Our design consultations are complimentary and include initial concept development.
                </p>
                <a href="/contact" className="bg-gradient-to-r from-[#F8B702] to-[#FFD700] text-black px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#F8B702]/30 hover:scale-105 inline-block relative overflow-hidden group">
                  <span className="relative z-10">Book Free Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#F8B702] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </a>
              </div>
              
              {/* Quick Contact Options */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F8B702] to-[#E6A602] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-[#F8B702]/30 transition-all duration-300 group-hover:scale-110">
                    <FontAwesomeIcon icon={faPhone} className="text-black text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Call Directly</h4>
                    <a href="tel:+1234567890" className="text-[#F8B702] text-xl font-bold hover:text-[#FFD700] transition-colors duration-300">
                      (832) 555-0123
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F8B702] to-[#E6A602] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-[#F8B702]/30 transition-all duration-300 group-hover:scale-110">
                    <FontAwesomeIcon icon={faEnvelope} className="text-black text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Email Us</h4>
                    <a href="mailto:hello@levihomes.com" className="text-[#F8B702] text-xl font-bold hover:text-[#FFD700] transition-colors duration-300">
                      hello@levihomes.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F8B702] mb-1">15+</div>
                  <div className="text-white/60 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F8B702] mb-1">500+</div>
                  <div className="text-white/60 text-sm">Homes Transformed</div>
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced Contact Form */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-3">Let's Connect</h3>
                <p className="text-white/70 text-lg">Tell us about your dream project and we'll make it reality.</p>
              </div>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-base font-semibold text-white mb-3">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      className="w-full px-6 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-medium text-lg placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300 hover:bg-white/15"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-base font-semibold text-white mb-3">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      className="w-full px-6 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-medium text-lg placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300 hover:bg-white/15"
                      placeholder="(832) 555-0123"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-base font-semibold text-white mb-3">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full px-6 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-medium text-lg placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300 hover:bg-white/15"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="project-type" className="block text-base font-semibold text-white mb-3">Project Type</label>
                  <select 
                    id="project-type" 
                    name="project-type"
                    className="w-full px-6 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-medium text-lg focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300 hover:bg-white/15"
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
                  <label htmlFor="message" className="block text-base font-semibold text-white mb-3">Project Details</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={5}
                    className="w-full px-6 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-medium text-lg placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300 hover:bg-white/15 resize-none"
                    placeholder="Tell us about your vision, timeline, and any specific requirements..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#F8B702] to-[#FFD700] text-black px-8 py-6 rounded-2xl font-bold text-xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#F8B702]/40 hover:scale-[1.02] relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Send Message 
                    <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#F8B702] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Large LEVI Text */}
      <div className="relative -mb-10 bg-[#0E0E0E] py-2">
        <div className="flex items-center justify-center">
          <h2 className="font-serif text-[25vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw] font-black text-black leading-[0.8] tracking-[0.5em] select-none whitespace-nowrap text-center ml-28">
            LEVI
          </h2>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-16 relative overflow-hidden mb-0">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
            
            {/* Company Info */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <img 
                  src="/images/branding/Levi-Homes_Logo-White.png" 
                  alt="Levi Homes" 
                  className="h-12 w-auto mb-4"
                />
                <p className="text-white/70 leading-relaxed max-w-md">
                  Houston's premier luxury home remodeling specialists. Transforming visions into extraordinary living spaces with unmatched craftsmanship and attention to detail.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-white/80">
                  <FontAwesomeIcon icon={faPhone} className="mr-3 text-[#F8B702]" />
                  <span>(832) 555-0123</span>
                </div>
                <div className="flex items-center text-white/80">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-[#F8B702]" />
                  <span>hello@levihomes.com</span>
                </div>
                <div className="flex items-start text-white/80">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-[#F8B702] mt-1" />
                  <span>Houston, TX<br />Serving Greater Houston Area</span>
                </div>
              </div>
            </div>

            {/* Empty space */}
            <div className="hidden lg:block"></div>

            {/* Services */}
            <div>
              <h3 className="font-serif text-xl font-semibold mb-6 text-white">Our Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300">Kitchen Remodeling</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300">Bathroom Renovation</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300">General Construction</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300">Room Additions</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300">Garage Conversion</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300">Attic Renovation</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-xl font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                <li><a href="#portfolio" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300">Portfolio</a></li>
                <li><a href="#process" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300">Our Process</a></li>
                <li><a href="#testimonials" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300">Testimonials</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300">Contact</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300">Careers</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/50 text-sm">
                © 2024 Levi Homes. All rights reserved. | Licensed & Insured
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-white/50 hover:text-[#F8B702] transition-colors duration-300 text-sm">Privacy Policy</a>
                <a href="#" className="text-white/50 hover:text-[#F8B702] transition-colors duration-300 text-sm">Terms of Service</a>
                <a href="#" className="text-white/50 hover:text-[#F8B702] transition-colors duration-300 text-sm">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}