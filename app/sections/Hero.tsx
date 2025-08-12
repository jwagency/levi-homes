'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoWords } from '../utils/textSplit';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLVideoElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Split headline text into individual words
      const headline = headlineRef.current;
      let wordElements: HTMLElement[] = [];
      if (headline) {
        wordElements = splitTextIntoWords(headline);
      }

      // Set initial states
      gsap.set(backgroundRef.current, { opacity: 0, scale: 1.1 });
      gsap.set(wordElements, { y: '100%', opacity: 0 });
      gsap.set(subheadlineRef.current, { opacity: 0, y: 30 });
      if (buttonsRef.current?.children) {
        gsap.set(Array.from(buttonsRef.current.children), { opacity: 0, y: 20 });
      }

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
      tl.to(wordElements, {
        y: '0%',
        opacity: 1,
        duration: 1,
        stagger: 0.12,
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
      if (buttonsRef.current?.children) {
        tl.to(Array.from(buttonsRef.current.children), {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out'
        }, '-=0.4');
      }

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

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
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

      {/* Logo and Navigation */}
      <div className="absolute top-8 left-8 right-8 z-20 flex justify-between items-center">
        <img 
          src="/images/branding/Levi-Homes_Logo-White.png" 
          alt="Levi Homes" 
          className="h-12 md:h-16 w-auto"
        />
        <a 
          href="/" 
          className="text-white/80 hover:text-[#F8B702] transition-colors duration-300 text-sm font-medium tracking-wider"
        >
          HOME
        </a>
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
  );
}