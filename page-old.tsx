'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BeforeAfter from './components/BeforeAfter';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const signatureWorkRef = useRef<HTMLDivElement>(null);
  const workTitleRef = useRef<HTMLHeadingElement>(null);
  const workSubtitleRef = useRef<HTMLParagraphElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesTitleRef = useRef<HTMLHeadingElement>(null);
  const servicesSubtitleRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Split headline text into individual words
      const headline = headlineRef.current;
      if (headline) {
        const words = headline.textContent?.split(' ') || [];
        headline.innerHTML = words
          .map(word => `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`)
          .join(' ');
      }

      // Set initial states
      gsap.set(backgroundRef.current, { opacity: 0, scale: 1.1 });
      gsap.set(headlineRef.current?.querySelectorAll('span span'), { y: '100%' });
      gsap.set(subheadlineRef.current, { opacity: 0, y: 30 });
      gsap.set(buttonsRef.current?.children, { opacity: 0, y: 20 });

      // Create timeline for entrance animations
      const tl = gsap.timeline({ delay: 0.5 });

      // Background fade in
      tl.to(backgroundRef.current, {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: 'power2.out'
      });

      // Staggered headline words animation
      tl.to(headlineRef.current?.querySelectorAll('span span'), {
        y: '0%',
        duration: 1.2,
        stagger: 0.08,
        ease: 'power3.out'
      }, '-=1.5');

      // Subheadline animation
      tl.to(subheadlineRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.6');

      // Buttons animation
      tl.to(buttonsRef.current?.children, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      }, '-=0.4');

      // Parallax scroll effect for background
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(backgroundRef.current, {
            y: progress * 100,
            scale: 1 + progress * 0.1
          });
        }
      });

      // Signature Work section animations
      setTimeout(() => {
        // Only set initial states if elements exist
        if (workTitleRef.current) gsap.set(workTitleRef.current, { y: 40, opacity: 0 });
        if (workSubtitleRef.current) gsap.set(workSubtitleRef.current, { y: 40, opacity: 0 });
        
        const projectCards = document.querySelectorAll('.project-card');
        if (projectCards.length > 0) {
          gsap.set('.project-card', { y: 30, opacity: 0 });
        }

        // Title and subtitle animations
        ScrollTrigger.create({
          trigger: signatureWorkRef.current,
          start: 'top 90%',
          onEnter: () => {
            if (workTitleRef.current) {
              gsap.to(workTitleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
              });
            }
            if (workSubtitleRef.current) {
              gsap.to(workSubtitleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.2,
                ease: 'power2.out'
              });
            }
          }
        });

        // Project cards staggered animation
        ScrollTrigger.create({
          trigger: '.project-grid',
          start: 'top 90%',
          onEnter: () => {
            gsap.to('.project-card', {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power2.out'
            });
          }
        });

        // Project card image parallax
        projectCards.forEach((card) => {
          const image = card.querySelector('.project-image');
          if (image) {
            ScrollTrigger.create({
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
              onUpdate: (self) => {
                const progress = self.progress;
                gsap.set(image, {
                  yPercent: progress * -20
                });
              }
            });
          }
        });

        // Services section animations
        const serviceCards = document.querySelectorAll('.service-card');
        if (serviceCards.length > 0) {
          gsap.set('.service-card', { y: 40, opacity: 0 });
        }
        if (servicesTitleRef.current) gsap.set(servicesTitleRef.current, { y: 40, opacity: 0 });
        if (servicesSubtitleRef.current) gsap.set(servicesSubtitleRef.current, { y: 40, opacity: 0 });

        ScrollTrigger.create({
          trigger: servicesRef.current,
          start: 'top 90%',
          onEnter: () => {
            if (servicesTitleRef.current) {
              gsap.to(servicesTitleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
              });
            }
            if (servicesSubtitleRef.current) {
              gsap.to(servicesSubtitleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.2,
                ease: 'power2.out'
              });
            }
          }
        });

        ScrollTrigger.create({
          trigger: '.services-grid',
          start: 'top 90%',
          onEnter: () => {
            gsap.to('.service-card', {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power2.out'
            });
          }
        });
      }, 100);

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      name: "Modern Kitchen Transformation",
      location: "River Oaks, TX",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Luxury Master Suite",
      location: "Memorial, TX", 
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Contemporary Living Space",
      location: "The Heights, TX",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Spa-Inspired Bathroom",
      location: "West University, TX",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Whole Home Renovation",
      location: "Sugar Land, TX",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Executive Home Office",
      location: "Katy, TX",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const services = [
    {
      title: "Kitchen Remodeling",
      description: "Modern kitchens, meticulously crafted to blend beauty and function.",
      number: "01"
    },
    {
      title: "Bathroom Remodeling", 
      description: "Spa-inspired bathrooms with premium finishes and flawless execution.",
      number: "02"
    },
    {
      title: "General Construction & Design",
      description: "Full-service design, planning, and construction support every step of the way.",
      number: "03"
    },
    {
      title: "Entire Home Renovation",
      description: "Streamlined renovation across your entire home—efficient, cohesive, elegant.",
      number: "04"
    },
    {
      title: "Structural Repairs & Modifications",
      description: "Expert structural upgrades, load-bearing changes, garage or attic conversions.",
      number: "05"
    },
    {
      title: "Room Additions",
      description: "Seamless room and garage additions that feel like they've always been part of your home.",
      number: "06"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden bg-black text-white">
        {/* Background Video */}
        <video
          ref={backgroundRef}
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 z-0" />

        {/* Logo */}
        <div className="absolute top-8 left-8 z-20">
          <img 
            src="/images/branding/Levi-Homes_Logo-White.png" 
            alt="Levi Homes" 
            className="h-12 md:h-16 w-auto"
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center text-white">
          <h1
            ref={headlineRef}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 max-w-6xl"
          >
            Transform Your Home Into a Work of Art
          </h1>

          <p
            ref={subheadlineRef}
            className="font-sans text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-12 max-w-4xl text-white/80"
          >
            Luxury remodeling for kitchens, bathrooms, and whole-home transformations—crafted to last, designed to awe.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <button className="bg-[#F8B702] text-black px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:bg-[#e6a602] hover:scale-105 min-w-[200px]">
              View Our Work
            </button>

            <button className="text-white border border-white/20 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:border-[#F8B702] hover:scale-105 min-w-[200px]">
              Book a Consultation
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Signature Work Section */}
      <section ref={signatureWorkRef} className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2
              ref={workTitleRef}
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6"
            >
              Signature Work
            </h2>
            <p
              ref={workSubtitleRef}
              className="font-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              A curated selection of our most transformative projects.
            </p>
          </div>

          {/* Project Grid */}
          <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card group cursor-pointer">
                <div className="relative mb-4 overflow-hidden" style={{ aspectRatio: '4/5' }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onLoad={() => console.log('Image loaded:', project.name)}
                  />
                  
                  {/* Accent Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#F8B702] group-hover:w-full transition-all duration-500"></div>
                </div>
                
                <h3 className="font-serif text-xl md:text-2xl font-medium text-gray-900 group-hover:text-[#F8B702] transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="font-sans text-base text-gray-600">
                  {project.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24">
            <h2
              ref={servicesTitleRef}
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8"
            >
              Our Services
            </h2>
            <p
              ref={servicesSubtitleRef}
              className="font-sans text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              What we do best—every service backed by quality, precision, and care.
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group relative"
              >
                {/* Service Number */}
                <div className="flex items-start space-x-6 mb-8">
                  <div className="flex-shrink-0">
                    <span className="font-serif text-6xl md:text-7xl font-light text-gray-200 group-hover:text-[#F8B702] transition-colors duration-500">
                      {service.number}
                    </span>
                  </div>
                  <div className="pt-4">
                    <div className="w-12 h-px bg-gray-300 group-hover:bg-[#F8B702] group-hover:w-20 transition-all duration-500"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                  <p className="font-sans text-base md:text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Border */}
                <div className="absolute -left-4 top-0 w-0 h-0 border-l-2 border-[#F8B702] group-hover:h-full transition-all duration-700 ease-out"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <BeforeAfter />
    </>
  );
}
