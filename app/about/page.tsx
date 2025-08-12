'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faUsers, faHandshake, faStar, faPhone, faCalendarAlt, faHammer, faHome } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import CTA from '../components/CTA';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
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
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none mb-6"
            >
              Why Levi Homes?
            </h1>
            <p 
              ref={subtitleRef}
              className="font-sans text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              Built on honest principles, determination, family values and passion for building what matters most to our clients.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <a href="tel:+17139225715" className="bg-gradient-to-b from-[#F8B702] via-[#F8B702] to-[#E6A602] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-105 shadow-lg shadow-black/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:rounded-lg sm:before:rounded-xl w-full sm:w-[335px] text-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2 fa-fw" />
                Call Us (713) 922-5715
              </a>
              <a href="/contact" className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-black px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#F8B702] hover:via-[#F8B702] hover:to-[#E6A602] hover:text-white shadow-lg shadow-black/30 border border-white/50 hover:shadow-lg hover:shadow-[#F8B702]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/20 before:to-white/40 before:rounded-lg sm:before:rounded-xl hover:scale-105 w-full sm:w-[335px] text-center">
                Get Your Custom Proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="mb-6">
                <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">Our Story</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-8 leading-none">
                Why Levi Homes?
              </h2>
              <p className="font-sans text-lg text-black/70 leading-relaxed mb-6">
                With so many companies to choose from, one has to ask themselves that question, "Why Levi Homes"? The answer is very simple; we built our business with honest principles, determination, family values and passion for building what matter most to our clients.
              </p>
              <p className="font-sans text-lg text-black/70 leading-relaxed mb-8">
                No Matter what contracting services you need, LEVI HOMES has the power to take your next home improvement to the next level. Undertaking a home construction project on your own or allow an inexperienced person to take on the task can take a huge toll on your time, energy and budget.
              </p>
              
              {/* CTA Button */}
              <div>
                <a href="tel:+17139225715" className="bg-gradient-to-b from-[#F8B702] via-[#F8B702] to-[#E6A602] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-105 shadow-lg shadow-black/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:rounded-lg sm:before:rounded-xl w-full sm:w-[335px] text-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-2 fa-fw" />
                  Call Us (713) 922-5715
                </a>
              </div>
            </div>

            {/* Image Composition */}
            <div className="relative">
              {/* Main larger image */}
              <div className="aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/showcase/ferris-1.jpg" 
                  alt="Levi Homes Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Smaller overlapping image */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="/images/showcase/Million Dollar Listing–Los Angeles.jpeg" 
                  alt="Luxury Interior Design" 
                  className="w-full h-full object-cover"
                />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">Watch Our Story</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-none">
              Meet The Levi Homes Team
            </h2>
            <p className="font-sans text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
              Discover what makes Levi Homes Houston's trusted choice for luxury home remodeling.
            </p>
          </div>
          
          {/* Video Container */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-[#F8B702]/20 via-[#FFD700]/10 to-[#F8B702]/20 p-2 rounded-3xl shadow-2xl shadow-[#F8B702]/30 border-2 border-[#F8B702]/30">
              <div className="aspect-video rounded-2xl overflow-hidden bg-white shadow-xl relative">
                <iframe
                  src="https://player.vimeo.com/video/268824069?h=0&title=0&byline=0&portrait=0&color=F8B702"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  title="Levi Homes - About Us"
                ></iframe>
                
                {/* Play icon overlay indicator */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="bg-[#F8B702]/90 backdrop-blur-sm rounded-full p-4 shadow-2xl border-2 border-white/20">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-black text-white relative z-10 py-8 sm:py-12 md:py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/showcase/ferris-1.jpg)' }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30 z-[1]"></div>
        <div className="mx-auto px-8 relative z-10" style={{ maxWidth: '1088px' }}>
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="mb-3 sm:mb-4">
              <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">Our Values</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-none">
              What Sets Us Apart
            </h2>
            <p className="font-sans text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
              Our core values guide every project, ensuring exceptional results and lasting relationships with our clients.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-4 md:gap-4">
            
            {/* Communication */}
            <div className="process-step group cursor-pointer bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#F8B702]/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] via-[#F8B702] to-[#D4A003] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-inner shadow-black/10 border-2 border-[#FFE55C]/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/10 before:to-white/20 before:rounded-lg">
                    <FontAwesomeIcon icon={faUsers} className="text-white text-2xl drop-shadow-lg relative z-10" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[#F8B702] font-bold text-xs uppercase tracking-wider mb-2">01. Foundation</div>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4 group-hover:text-[#F8B702] transition-colors duration-300">
                    Communication
                  </h3>
                  <p className="font-sans text-lg text-white/80 leading-relaxed">
                    Lines of communication is extremely important during any project. We at Levi Homes open multiple lines of communication with each and every client. Via text, phone call or email we provide vital information, guiding them every step of the way.
                  </p>
                </div>
              </div>
            </div>

            {/* Peace of Mind */}
            <div className="process-step group cursor-pointer bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#F8B702]/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] via-[#F8B702] to-[#D4A003] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-inner shadow-black/10 border-2 border-[#FFE55C]/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/10 before:to-white/20 before:rounded-lg">
                    <FontAwesomeIcon icon={faHandshake} className="text-white text-2xl drop-shadow-lg relative z-10" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[#F8B702] font-bold text-xs uppercase tracking-wider mb-2">02. Assurance</div>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4 group-hover:text-[#F8B702] transition-colors duration-300">
                    Peace of Mind
                  </h3>
                  <p className="font-sans text-lg text-white/80 leading-relaxed">
                    Levi Homes is a professional design-build firm helping clients invest their money instead of spending their money. All of our craftsmen are trained in house to the highest standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="process-step group cursor-pointer bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#F8B702]/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] via-[#F8B702] to-[#D4A003] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-inner shadow-black/10 border-2 border-[#FFE55C]/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/10 before:to-white/20 before:rounded-lg">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-white text-2xl drop-shadow-lg relative z-10" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[#F8B702] font-bold text-xs uppercase tracking-wider mb-2">03. Precision</div>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4 group-hover:text-[#F8B702] transition-colors duration-300">
                    Timeline
                  </h3>
                  <p className="font-sans text-lg text-white/80 leading-relaxed">
                    No one likes delays. Our specialty teams work together on hundreds of jobs. Their superior communication, attention to detail and project management keep your project moving in the right direction.
                  </p>
                </div>
              </div>
            </div>

            {/* No Surprises */}
            <div className="process-step group cursor-pointer bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#F8B702]/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] via-[#F8B702] to-[#D4A003] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-inner shadow-black/10 border-2 border-[#FFE55C]/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/10 before:to-white/20 before:rounded-lg">
                    <FontAwesomeIcon icon={faStar} className="text-white text-2xl drop-shadow-lg relative z-10" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[#F8B702] font-bold text-xs uppercase tracking-wider mb-2">04. Integrity</div>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4 group-hover:text-[#F8B702] transition-colors duration-300">
                    No Surprises
                  </h3>
                  <p className="font-sans text-lg text-white/80 leading-relaxed">
                    We plan and study every possible outcome to eliminate the element of surprise. Our experienced team is skilled and ready to handle a variety of scenarios with no hidden charges.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-10 md:mt-12 relative z-20">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 md:gap-4 justify-center items-center sm:ml-2 md:ml-2">
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

      {/* Quality Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="mb-6">
                <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">Professional Help</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-8 leading-none">
                Let Us Take The Worry Out Of Your Next Project
              </h2>
              <p className="font-sans text-lg text-black/70 leading-relaxed mb-8">
                Without professional help, your design project can end with costly mistakes. Call us today at <a href="tel:+17139225715" className="text-[#F8B702] font-semibold hover:underline">713-922-5715</a> for a free quote and let the Team at Levi Homes take the worry of you next home improvement project.
              </p>
              
              <div>
                <a href="tel:+17139225715" className="bg-gradient-to-b from-[#F8B702] via-[#F8B702] to-[#E6A602] text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-105 shadow-lg shadow-black/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:rounded-lg inline-block">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  Call Us (713) 922-5715
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/showcase/neo-classic-tv-area-600x452.jpg" 
                  alt="Professional Construction Team" 
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F8B702] mb-1">20+</div>
                  <div className="text-sm text-black/60 font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA 
        description="Experience the Levi Homes difference. Let's discuss your vision and create the home of your dreams."
      />

      <Footer />
    </div>
  );
}