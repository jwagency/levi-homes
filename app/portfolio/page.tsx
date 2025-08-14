'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faExpand, faTimes } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import CTA from '../components/CTA';
import ContactModal from '../components/ContactModal';

gsap.registerPlugin(ScrollTrigger);

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Modern Luxury Kitchen",
    category: "Kitchen Remodeling",
    location: "Houston, TX",
    year: "2024",
    image: "/images/kitchen/kitchen1.jpg",
    description: "Complete kitchen transformation with custom cabinetry and premium finishes"
  },
  {
    id: 2,
    title: "Contemporary Kitchen Design",
    category: "Kitchen Remodeling",
    location: "Sugar Land, TX", 
    year: "2024",
    image: "/images/kitchen/kitchen2.jpg",
    description: "Sleek contemporary design with state-of-the-art appliances"
  },
  {
    id: 3,
    title: "Luxury Home Construction",
    category: "General Construction",
    location: "Katy, TX",
    year: "2023",
    image: "/images/showcase/Million Dollar Listing–Los Angeles.jpeg",
    description: "Complete home construction with luxury finishes throughout"
  },
  {
    id: 4,
    title: "Master Suite Addition",
    category: "Room Additions",
    location: "Memorial, TX",
    year: "2023",
    image: "/images/showcase/ferris-1.jpg",
    description: "Beautiful master suite addition with custom design elements"
  },
  {
    id: 5,
    title: "Elegant Home Renovation",
    category: "General Construction",
    location: "River Oaks, TX",
    year: "2023",
    image: "/images/showcase/how-much-does-full-house-renovation-cost.jpg",
    description: "Stunning home renovation with architectural enhancements"
  },
  {
    id: 6,
    title: "Luxury Bathroom Remodel",
    category: "Bathroom Remodeling",
    location: "Bellaire, TX",
    year: "2023",
    image: "/images/showcase/neo-classic-tv-area-600x452.jpg",
    description: "Sophisticated bathroom remodel with neo-classic styling"
  },
  {
    id: 7,
    title: "Garage to Living Space",
    category: "Garage Conversion",
    location: "The Woodlands, TX",
    year: "2023",
    image: "/images/showcase/5aa8034dea685964b380ef0a17bff7a6.jpg",
    description: "Converted garage into beautiful living space"
  },
  {
    id: 8,
    title: "Attic Master Suite",
    category: "Attic Renovation",
    location: "Pearland, TX",
    year: "2023",
    image: "/images/showcase/Screen-Shot-2019-08-09-at-11.15.51-AM.jpg",
    description: "Transformed attic into stunning master suite"
  }
];

const categories = ['All', 'Kitchen Remodeling', 'Bathroom Remodeling', 'General Construction', 'Room Additions', 'Garage Conversion', 'Attic Renovation'];

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
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

      // Portfolio items animation
      gsap.fromTo('.portfolio-item', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.portfolio-grid',
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white">
      <Navigation showMenu={true} textColor="text-black" />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] sm:h-[70vh] bg-black text-white overflow-hidden pt-20">
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
              Our Portfolio
            </h1>
            <p 
              ref={subtitleRef}
              className="font-sans text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              Explore our curated collection of luxury home transformations showcasing exceptional craftsmanship and innovative design solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <a href="tel:+17139225715" className="bg-gradient-to-b from-[#F8B702] via-[#F8B702] to-[#E6A602] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-105 shadow-lg shadow-black/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:rounded-lg sm:before:rounded-xl w-full sm:w-[335px] text-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Call Us (713) 922-5715
              </a>
              <button onClick={() => setIsContactModalOpen(true)} className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-black px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:from-[#F8B702] hover:via-[#F8B702] hover:to-[#E6A602] hover:text-white shadow-lg shadow-black/30 border border-white/50 hover:shadow-lg hover:shadow-[#F8B702]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/20 before:to-white/40 before:rounded-lg sm:before:rounded-xl hover:scale-105 w-full sm:w-[335px] text-center">
                Get Your Custom Proposal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Category Filter */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="font-sans text-sm uppercase tracking-wider text-[#F8B702] font-medium">Our Work</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-12">
              Featured Projects
            </h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 rounded-full font-medium text-xs uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-[#F8B702] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-[#F8B702] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="portfolio-item group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <FontAwesomeIcon icon={faExpand} className="text-white text-xl" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="mb-2">
                      <span className="inline-block bg-[#F8B702] text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.location} • {item.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#F8B702] transition-colors duration-300 z-60"
            >
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button>
            
            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
            </div>
            
            {/* Details */}
            <div className="bg-white rounded-b-lg p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="mb-2">
                    <span className="inline-block bg-[#F8B702] text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                      {selectedImage.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-black mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-600 mb-2">{selectedImage.location} • {selectedImage.year}</p>
                  <p className="text-gray-800 leading-relaxed">{selectedImage.description}</p>
                </div>
                <div className="ml-6">
                  <a href="tel:+17139225715" className="bg-[#F8B702] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#E6A602] transition-colors duration-300 whitespace-nowrap">
                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                    Discuss Your Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <CTA 
        title="Ready to Create Your Dream Home?"
        description="Let's discuss your vision and bring your project to life. View our portfolio and get inspired for your next renovation."
      />

      <Footer />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}