import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/images/branding/Levi-Homes_Logo-White.png" 
                alt="Levi Homes" 
                className="h-24 w-auto mb-4"
              />
              <p className="text-white/70 leading-relaxed">
                Houston's premier luxury home remodeling specialists. Transforming visions into extraordinary living spaces with unmatched craftsmanship and attention to detail.
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-3">Services</h3>
            <ul className="space-y-3">
              <li><a href="/services/kitchen-remodeling" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300 text-lg">Kitchen Remodeling</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300 text-lg">Bathroom Remodeling</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300 text-lg">General Construction</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300 text-lg">Room Additions</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300 text-lg">Garage Conversion</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300 text-lg">Attic Renovation</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-3">Company</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300 text-lg">About Us</a></li>
              <li><a href="/portfolio" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300 text-lg">Portfolio</a></li>
              <li><a href="/testimonials" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300 text-lg">Testimonials</a></li>
              <li><a href="/contact" className="text-white/70 hover:text-[#F8B702] transition-colors duration-300 text-lg">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-3">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-[#F8B702] text-sm mt-1" />
                <div>
                  <a href="tel:+17139225715" className="text-white/70 text-lg hover:text-[#F8B702] transition-colors duration-300">713-922-5715</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#F8B702] text-sm mt-1" />
                <div>
                  <a href="mailto:levi@levihomes.com" className="text-white/70 text-lg hover:text-[#F8B702] transition-colors duration-300">levi@levihomes.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#F8B702] text-sm mt-1" />
                <div>
                  <a href="https://maps.app.goo.gl/Z8Ce76dukE9KJT6W8" target="_blank" rel="noopener noreferrer" className="text-white/70 text-lg hover:text-[#F8B702] transition-colors duration-300">1001 S Dairy Ashford Rd #170, Houston, TX 77077</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © 2025 Levi Homes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}