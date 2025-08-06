import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faMessage } from '@fortawesome/free-solid-svg-icons';

export default function ContactForm() {
  return (
    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100 mb-20">
      <div className="text-center mb-8">
        <h3 className="font-serif text-3xl md:text-4xl font-bold text-black mb-4">
          Request Free Consultation
        </h3>
      </div>

      <form className="space-y-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="Your Name*"
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300 placeholder-gray-600"
            />
            <FontAwesomeIcon icon={faUser} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email Address*"
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300 placeholder-gray-600"
            />
            <FontAwesomeIcon icon={faEnvelope} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              id="projectType"
              name="projectType"
              placeholder="Request Initial Inspection"
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300 placeholder-gray-600"
            />
          </div>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Phone Number*"
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300 placeholder-gray-600"
            />
            <FontAwesomeIcon icon={faPhone} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Write Your Message"
            className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300 resize-vertical placeholder-gray-600"
          />
          <FontAwesomeIcon icon={faMessage} className="absolute right-4 top-6 text-gray-400" />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#F8B702] to-[#E6A602] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#F8B702] hover:scale-[1.02] shadow-lg"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
}