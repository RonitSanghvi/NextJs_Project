export function Footer() {
  return (
    <footer className="bg-[#2d1b2e] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-[#f9b0c8] mb-4">श्री जैन मंदिर</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              A sacred sanctuary dedicated to the path of spiritual enlightenment, 
              non-violence, and truth. Join us in our journey towards liberation and inner peace.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-[#ea5c95] rounded-full flex items-center justify-center hover:bg-[#ea5c95]/80 cursor-pointer transition-colors">
                <span className="text-white">📧</span>
              </div>
              <div className="w-10 h-10 bg-[#5abab6] rounded-full flex items-center justify-center hover:bg-[#5abab6]/80 cursor-pointer transition-colors">
                <span className="text-white">📞</span>
              </div>
              <div className="w-10 h-10 bg-[#f9b0c8] rounded-full flex items-center justify-center hover:bg-[#f9b0c8]/80 cursor-pointer transition-colors">
                <span className="text-white">📍</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[#f9b0c8] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-[#f9b0c8] transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#f9b0c8] transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-[#f9b0c8] transition-colors">Services</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-[#f9b0c8] transition-colors">Events</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#f9b0c8] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[#f9b0c8] mb-4">Temple Timings</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Morning: 6:00 AM - 12:00 PM</li>
              <li>Evening: 4:00 PM - 9:00 PM</li>
              <li>Special Events: As scheduled</li>
              <li>Meditation: 7:00 AM & 6:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 श्री जैन मंदिर. All rights reserved. Built with devotion and care.
          </p>
        </div>
      </div>
    </footer>
  );
}