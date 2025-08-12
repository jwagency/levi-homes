export default function ContactForm() {
  return (
    <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 lg:p-12 shadow-xl shadow-black/20 border border-white/20 mb-20">
      <div className="text-center mb-8">
        <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          Request Free Consultation
        </h3>
      </div>

      <form className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#232323] border border-gray-600 rounded-lg text-white font-medium text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#232323] border border-gray-600 rounded-lg text-white font-medium text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300"
              placeholder="(713) 922-5715"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#232323] border border-gray-600 rounded-lg text-white font-medium text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300"
            placeholder="john@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="project-type" className="block text-sm font-semibold text-white mb-2">Project Type</label>
          <select 
            id="project-type" 
            name="project-type"
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#232323] border border-gray-600 rounded-lg text-white font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300"
          >
            <option value="" className="bg-[#232323] text-white">Select a project type</option>
            <option value="kitchen" className="bg-[#232323] text-white">Kitchen Remodeling</option>
            <option value="bathroom" className="bg-[#232323] text-white">Bathroom Renovation</option>
            <option value="addition" className="bg-[#232323] text-white">Room Addition</option>
            <option value="full-remodel" className="bg-[#232323] text-white">Full Home Remodel</option>
            <option value="other" className="bg-[#232323] text-white">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">Project Details</label>
          <textarea 
            id="message" 
            name="message"
            rows={3}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#232323] border border-gray-600 rounded-lg text-white font-medium text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F8B702] focus:border-[#F8B702] transition-all duration-300 resize-none"
            placeholder="Tell us about your vision, timeline, and any specific requirements..."
          ></textarea>
        </div>
        
        <button 
          type="submit"
          className="w-full bg-gradient-to-r from-[#F8B702] to-[#FFD700] text-black px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-500 hover:shadow-2xl hover:shadow-[#F8B702]/40 hover:scale-[1.02] relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center justify-center">
            Send Message 
            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#F8B702] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg sm:rounded-xl"></div>
        </button>
      </form>
    </div>
  );
}