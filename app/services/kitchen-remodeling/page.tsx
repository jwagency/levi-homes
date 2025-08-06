'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCheck, faStar, faComments, faRuler, faHammer } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

gsap.registerPlugin(ScrollTrigger);

export default function KitchenRemodeling() {
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
          style={{ backgroundImage: 'url(/images/showcase/ferris-1.jpg)' }}
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
              Kitchen Remodeling
            </h1>
            <p 
              ref={subtitleRef}
              className="font-sans text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto"
            >
              Transform your kitchen into the heart of your home with luxury finishes, custom cabinetry, and innovative design solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="mb-6">
                <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">Premium Kitchen Design</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                Where Culinary Dreams Come to Life
              </h2>
              <p className="font-sans text-lg text-black/70 leading-relaxed mb-8">
                Your kitchen is more than just a place to cook—it's where memories are made, conversations flow, and life happens. Our expert team specializes in creating custom kitchen spaces that perfectly blend functionality with stunning aesthetics.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-[#F8B702] text-sm mt-1" />
                  <span className="text-black/70">Custom cabinet design and installation</span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-[#F8B702] text-sm mt-1" />
                  <span className="text-black/70">Premium countertop materials (granite, quartz, marble)</span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-[#F8B702] text-sm mt-1" />
                  <span className="text-black/70">High-end appliance integration</span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-[#F8B702] text-sm mt-1" />
                  <span className="text-black/70">Custom lighting and electrical work</span>
                </div>
              </div>
              <div>
                <a href="tel:+1234567890" className="bg-gradient-to-b from-[#F8B702] via-[#F8B702] to-[#E6A602] text-white px-8 py-4 rounded-[20px] font-medium text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-105 shadow-lg shadow-black/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:rounded-[20px] inline-block">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  Call Now for Free Consultation
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/showcase/ferris-1.jpg" 
                  alt="Luxury Kitchen Design" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F8B702] mb-1">500+</div>
                  <div className="text-sm text-black/60 font-medium">Kitchens Transformed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="min-h-screen bg-black text-white relative z-10 py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/AdobeStock_100737957.jpeg)' }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30 z-[1]"></div>
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">Our Process</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
              From Vision to Reality
            </h2>
            <p className="font-sans text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              Every kitchen remodel follows our proven process to ensure exceptional results.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
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
                    We discuss your vision, lifestyle, and budget to create the perfect kitchen design plan tailored to your needs.
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
                    Our designers create detailed plans and 3D renderings of your new kitchen, allowing you to visualize every detail.
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
                    Master craftsmen bring your kitchen vision to life with meticulous attention to detail and premium materials.
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
                    Final walkthrough and quality inspection ensure your complete satisfaction with your transformed kitchen.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 relative z-20">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+1234567890" className="bg-gradient-to-b from-[#F8B702] via-[#F8B702] to-[#E6A602] text-white px-10 py-4 rounded-[20px] font-medium text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-105 shadow-lg shadow-black/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:rounded-[20px]">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Discuss Your Kitchen Project
              </a>
              <a href="/contact" className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-black px-[62px] py-4 rounded-[20px] font-medium text-lg transition-all duration-300 hover:from-[#F8B702] hover:via-[#F8B702] hover:to-[#E6A602] hover:text-white shadow-lg shadow-black/30 border border-white/50 hover:shadow-lg hover:shadow-[#F8B702]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/20 before:to-white/40 before:rounded-[20px] hover:scale-105">
                Get Your Custom Proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">Recent Work</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">
              Kitchen Transformations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gallery Item 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 shadow-lg">
                <img 
                  src="/images/showcase/ferris-1.jpg" 
                  alt="Modern Kitchen" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-lg font-semibold text-black mb-2">Modern Luxury Kitchen</h3>
              <p className="text-black/60 text-sm">Houston, TX • 2024</p>
            </div>

            {/* Gallery Item 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 shadow-lg">
                <img 
                  src="/images/showcase/how-much-does-full-house-renovation-cost.jpg" 
                  alt="Contemporary Kitchen" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-lg font-semibold text-black mb-2">Contemporary Design</h3>
              <p className="text-black/60 text-sm">Sugar Land, TX • 2024</p>
            </div>

            {/* Gallery Item 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 shadow-lg">
                <img 
                  src="/images/showcase/neo-classic-tv-area-600x452.jpg" 
                  alt="Traditional Kitchen" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-lg font-semibold text-black mb-2">Classic Elegance</h3>
              <p className="text-black/60 text-sm">Katy, TX • 2023</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="/portfolio" className="bg-gradient-to-b from-[#F8B702] via-[#F8B702] to-[#E6A602] text-white px-10 py-4 rounded-[20px] font-medium text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-105 shadow-lg shadow-black/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:rounded-[20px]">
              View All Kitchen Projects
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-[#F8B702] text-xl mx-1" />
              ))}
            </div>
            <blockquote className="font-serif text-2xl md:text-3xl text-black italic leading-relaxed mb-8">
              "Levi Homes transformed our outdated kitchen into a stunning masterpiece. The attention to detail and craftsmanship exceeded all our expectations. We couldn't be happier!"
            </blockquote>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-[#F8B702] to-[#D4A003] flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#F8B702] font-serif font-bold text-lg">SJ</span>
              </div>
            </div>
            <div className="text-left">
              <div className="font-semibold text-black">Sarah Johnson</div>
              <div className="text-black/60 text-sm">Memorial, TX</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Kitchen?
          </h2>
          <p className="font-sans text-xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto">
            Let's discuss your vision and create the kitchen of your dreams. Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:+1234567890" className="bg-gradient-to-b from-[#F8B702] via-[#F8B702] to-[#E6A602] text-white px-10 py-4 rounded-[20px] font-medium text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-105 shadow-lg shadow-black/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:rounded-[20px]">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Call (713) 555-0123
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