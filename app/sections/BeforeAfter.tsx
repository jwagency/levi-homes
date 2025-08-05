'use client';

import { useRef, useLayoutEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoWords } from '../utils/textSplit';

gsap.registerPlugin(ScrollTrigger);

interface BeforeAfterPair {
  beforeSrc: string;
  afterSrc: string;
  altBefore: string;
  altAfter: string;
  label?: string;
}

interface BeforeAfterProps {
  pairs?: BeforeAfterPair[];
}

export default function BeforeAfter({ pairs }: BeforeAfterProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const afterImageRef = useRef<HTMLDivElement>(null);
  const hairlineRef = useRef<HTMLDivElement>(null);
  
  const positionRef = useRef(50);
  const isDraggingRef = useRef(false);
  const boundsRef = useRef({ left: 0, width: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const defaultPairs: BeforeAfterPair[] = [
    {
      beforeSrc: '/before-after/kitchen-before.jpg',
      afterSrc: '/before-after/kitchen-after.jpg',
      altBefore: 'Kitchen before renovation',
      altAfter: 'Kitchen after renovation',
      label: 'Kitchen Transformation'
    }
  ];

  const items = pairs || defaultPairs;

  const updateClipPath = useCallback((percentage: number) => {
    if (afterImageRef.current) {
      gsap.set(afterImageRef.current, {
        clipPath: `inset(0 ${100 - percentage}% 0 0)`
      });
    }
  }, []);

  const updateHandlePosition = useCallback((percentage: number, animate = false) => {
    const bounds = boundsRef.current;
    if (!handleRef.current || !hairlineRef.current || bounds.width === 0) return;

    const x = (percentage / 100) * bounds.width;
    
    if (animate) {
      gsap.to([handleRef.current, hairlineRef.current], {
        x,
        duration: 0.2,
        ease: 'power2.out'
      });
      gsap.to(afterImageRef.current, {
        clipPath: `inset(0 ${100 - percentage}% 0 0)`,
        duration: 0.2,
        ease: 'power2.out'
      });
    } else {
      gsap.set([handleRef.current, hairlineRef.current], { x });
      updateClipPath(percentage);
    }
  }, [updateClipPath]);

  const snapToPosition = useCallback((percentage: number) => {
    let targetPercentage = percentage;
    
    // Snap to clean positions
    if (percentage >= 48 && percentage <= 52) {
      targetPercentage = 50;
    } else if (percentage <= 2) {
      targetPercentage = 0;
    } else if (percentage >= 98) {
      targetPercentage = 100;
    }

    if (targetPercentage !== percentage) {
      positionRef.current = targetPercentage;
      updateHandlePosition(targetPercentage, true);
    }
  }, [updateHandlePosition]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    
    const bounds = boundsRef.current;
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect || bounds.width === 0) return;

    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / bounds.width) * 100));
    
    positionRef.current = percentage;
    updateHandlePosition(percentage);
    
    if (handleRef.current) {
      handleRef.current.setAttribute('aria-valuenow', percentage.toFixed(0));
    }
  }, [updateHandlePosition]);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    
    isDraggingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    snapToPosition(positionRef.current);
  }, [snapToPosition]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    let newPercentage = positionRef.current;
    
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        newPercentage = Math.max(0, positionRef.current - 5);
        break;
      case 'ArrowRight':
        e.preventDefault();
        newPercentage = Math.min(100, positionRef.current + 5);
        break;
      case 'Home':
        e.preventDefault();
        newPercentage = 0;
        break;
      case 'End':
        e.preventDefault();
        newPercentage = 100;
        break;
      default:
        return;
    }
    
    positionRef.current = newPercentage;
    updateHandlePosition(newPercentage, true);
    
    if (handleRef.current) {
      handleRef.current.setAttribute('aria-valuenow', newPercentage.toFixed(0));
    }
  }, [updateHandlePosition]);

  const updateBounds = useCallback(() => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      boundsRef.current = { left: rect.left, width: rect.width };
      updateHandlePosition(positionRef.current);
    }
  }, [updateHandlePosition]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      updateBounds();
      updateHandlePosition(50);
      
      // Split title text into words
      const title = titleRef.current;
      let titleWordElements: HTMLElement[] = [];
      if (title) {
        titleWordElements = splitTextIntoWords(title);
      }
      
      // Set initial states for animation
      gsap.set(titleWordElements, { y: '100%', opacity: 0 });
      gsap.set(subtitleRef.current, { y: 24, opacity: 0 });

      // Entrance animations
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 85%',
        onEnter: () => {
          // Animate title words with stagger
          gsap.to(titleWordElements, {
            y: '0%',
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
          });
          
          gsap.to(subtitleRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3,
            ease: 'power2.out'
          });
        }
      });

      // Pin and scrub animation
      ScrollTrigger.create({
        trigger: sliderRef.current,
        start: 'center center',
        end: '+=300',
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const percentage = 20 + (progress * 60); // 20% to 80%
          positionRef.current = percentage;
          updateHandlePosition(percentage);
          
          if (handleRef.current) {
            handleRef.current.setAttribute('aria-valuenow', percentage.toFixed(0));
          }
        }
      });

    }, sectionRef);

    // Simple debounce function
    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateBounds, 150);
    };
    
    window.addEventListener('resize', debouncedResize);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimeout);
    };
  }, [updateBounds, updateHandlePosition]);

  return (
    <section 
      id="before-after" 
      ref={sectionRef} 
      className="py-32 px-6 bg-[#F8F7F5]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-[#0E0E0E] mb-6"
          >
            Before & After
          </h2>
          <p
            ref={subtitleRef}
            className="font-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            See the transformation in a single sweep.
          </p>
        </div>

        {/* Slider Container */}
        <div className="w-full max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              ref={sliderRef}
              className="relative bg-white rounded-2xl ring-1 ring-black/5 shadow-xl overflow-hidden"
              style={{ aspectRatio: '16/10' }}
            >
              {/* Before Image */}
              <img
                src={item.beforeSrc}
                alt={item.altBefore}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* After Image (Clipped) */}
              <div
                ref={afterImageRef}
                className="absolute inset-0"
                style={{ clipPath: 'inset(0 50% 0 0)' }}
              >
                <img
                  src={item.afterSrc}
                  alt={item.altAfter}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 rounded-full">
                <span className="text-xs font-medium text-white uppercase tracking-wider">
                  Before
                </span>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 rounded-full">
                <span className="text-xs font-medium text-white uppercase tracking-wider">
                  After
                </span>
              </div>

              {/* Track Markers */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              </div>

              {/* Hairline */}
              <div
                ref={hairlineRef}
                className="absolute top-0 bottom-0 w-0.5 bg-[#F8B702] pointer-events-none transition-all duration-200 group-hover:w-1"
                style={{ left: '50%', transform: 'translateX(-50%)' }}
              />

              {/* Handle */}
              <div
                ref={handleRef}
                className={`absolute top-1/2 w-12 h-12 bg-[#F8B702] rounded-full cursor-grab active:cursor-grabbing transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:shadow-lg hover:shadow-[#F8B702]/30 ${
                  isFocused ? 'ring-4 ring-[#F8B702]/40' : ''
                }`}
                style={{ left: '50%' }}
                role="slider"
                tabIndex={0}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Drag to reveal before and after comparison"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              >
                {/* Handle Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex space-x-0.5">
                    <div className="w-0.5 h-4 bg-white rounded-full"></div>
                    <div className="w-0.5 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}