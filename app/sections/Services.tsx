'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoWords } from '../utils/textSplit';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesTitleRef = useRef<HTMLHeadingElement>(null);
  const servicesSubtitleRef = useRef<HTMLParagraphElement>(null);

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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Split title text into words
      const title = servicesTitleRef.current;
      let titleWordElements: HTMLElement[] = [];
      if (title) {
        titleWordElements = splitTextIntoWords(title);
      }

      // Services section animations
      const serviceCards = document.querySelectorAll('.service-card');
      if (serviceCards.length > 0) {
        gsap.set('.service-card', { y: 40, opacity: 0 });
      }
      gsap.set(titleWordElements, { y: '100%', opacity: 0 });
      if (servicesSubtitleRef.current) gsap.set(servicesSubtitleRef.current, { y: 40, opacity: 0 });

      ScrollTrigger.create({
        trigger: servicesRef.current,
        start: 'top 90%',
        onEnter: () => {
          // Animate title words with stagger
          gsap.to(titleWordElements, {
            y: '0%',
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
          });
          
          if (servicesSubtitleRef.current) {
            gsap.to(servicesSubtitleRef.current, {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: 0.4,
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
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  return (
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
  );
}