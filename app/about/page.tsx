'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faUsers, faHandshake, faStar, faPhone, faCalendarAlt, faHammer, faHome } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

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
      <section ref={heroRef} className="relative min-h-screen bg-black text-white overflow-hidden pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/showcase/how-much-does-full-house-renovation-cost.jpg)' }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center min-h-screen px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              ref={titleRef}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              About Levi Homes
            </h1>
            <p 
              ref={subtitleRef}
              className="font-sans text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto"
            >
              Building exceptional homes and lasting relationships since 2003. Houston's premier luxury remodeling experts.
            </p>
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
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                Excellence in Every Project
              </h2>
              <p className="font-sans text-lg text-black/70 leading-relaxed mb-6">
                Levi Homes is Houston's premier luxury remodeling company, dedicated to transforming houses into dream homes. We specialize in high-end kitchen and bathroom remodeling, room additions, and complete home renovations throughout the Greater Houston Area.
              </p>
              <p className="font-sans text-lg text-black/70 leading-relaxed mb-8">
                Our team of skilled craftsmen and designers work closely with each client to bring their vision to life, using only the finest materials and latest techniques to ensure exceptional results that exceed expectations.
              </p>
              
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/showcase/ferris-1.jpg" 
                  alt="Levi Homes Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="max-w-6xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">Our Values</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">
              What Sets Us Apart
            </h2>
            <p className="font-sans text-lg text-black/70 leading-relaxed max-w-3xl mx-auto">
              Our core values guide every project, ensuring exceptional results and lasting relationships with our clients.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Excellence */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] via-[#F8B702] to-[#D4A003] rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FontAwesomeIcon icon={faAward} className="text-white text-2xl" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-black mb-4">Excellence</h3>
              <p className="text-black/70 leading-relaxed">
                Every project reflects our commitment to the highest standards of craftsmanship and attention to detail.
              </p>
            </div>

            {/* Integrity */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] via-[#F8B702] to-[#D4A003] rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FontAwesomeIcon icon={faHandshake} className="text-white text-2xl" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-black mb-4">Integrity</h3>
              <p className="text-black/70 leading-relaxed">
                Built on honest principles and transparent communication throughout every stage of your project.
              </p>
            </div>

            {/* Family Values */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] via-[#F8B702] to-[#D4A003] rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FontAwesomeIcon icon={faUsers} className="text-white text-2xl" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-black mb-4">Family Values</h3>
              <p className="text-black/70 leading-relaxed">
                We treat every client like family, building lasting relationships based on trust and mutual respect.
              </p>
            </div>

            {/* Quality */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] via-[#F8B702] to-[#D4A003] rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FontAwesomeIcon icon={faStar} className="text-white text-2xl" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-black mb-4">Quality</h3>
              <p className="text-black/70 leading-relaxed">
                All craftsmen are trained in-house to our exacting standards, ensuring consistent, superior results.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">Our Commitment</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">
              Quality You Can Trust
            </h2>
            <p className="font-sans text-lg text-black/70 leading-relaxed max-w-3xl mx-auto">
              We stand behind every project with a commitment to exceptional craftsmanship and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">Service Areas</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">
              Serving Greater Houston
            </h2>
            <p className="font-sans text-lg text-black/70 leading-relaxed max-w-3xl mx-auto">
              We proudly serve homeowners throughout the Houston metropolitan area and surrounding communities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Home?
          </h2>
          <p className="font-sans text-xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto">
            Experience the Levi Homes difference. Let's discuss your vision and create the home of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:+17139225715" className="bg-gradient-to-b from-[#F8B702] via-[#F8B702] to-[#E6A602] text-white px-10 py-4 rounded-[20px] font-medium text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-105 shadow-lg shadow-black/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:rounded-[20px]">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Call (713) 922-5715
            </a>
            <a href="/contact" className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-black px-10 py-4 rounded-[20px] font-medium text-lg transition-all duration-300 hover:from-[#F8B702] hover:via-[#F8B702] hover:to-[#E6A602] hover:text-white shadow-lg shadow-black/20 border border-white/30 hover:shadow-lg hover:shadow-[#F8B702]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/20 before:to-white/40 before:rounded-[20px] hover:scale-105">
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}