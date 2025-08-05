'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoWords } from '../utils/textSplit';

gsap.registerPlugin(ScrollTrigger);

export default function SignatureWork() {
  const signatureWorkRef = useRef<HTMLDivElement>(null);
  const workTitleRef = useRef<HTMLHeadingElement>(null);
  const workSubtitleRef = useRef<HTMLParagraphElement>(null);

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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Signature Work section animations
      setTimeout(() => {
        // Split title text into words
        const title = workTitleRef.current;
        let titleWordElements: HTMLElement[] = [];
        if (title) {
          titleWordElements = splitTextIntoWords(title);
        }

        // Only set initial states if elements exist
        gsap.set(titleWordElements, { y: '100%', opacity: 0 });
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
            // Animate title words with stagger
            gsap.to(titleWordElements, {
              y: '0%',
              opacity: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: 'power3.out'
            });
            
            if (workSubtitleRef.current) {
              gsap.to(workSubtitleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3,
                ease: 'power2.out'
              });
            }
          }
        });

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
      }, 100);
    }, signatureWorkRef);

    return () => ctx.revert();
  }, []);

  return (
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
            <div
              key={index}
              className="project-card group cursor-pointer"
            >
              <div className="relative mb-6 overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
  );
}