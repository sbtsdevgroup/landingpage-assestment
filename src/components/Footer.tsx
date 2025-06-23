import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  function goToAssessment(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <footer className="bg-gray-900 text-white py-8 px-4 md:px-6 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#0186a3] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">IB</span>
                </div>
                <span className="ml-3 text-xl font-bold">IBCM Training</span>
              </div>
              <p className="text-gray-400 mb-4">Empowering the next generation of professionals through innovative training programs and strategic industry partnerships.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button className="text-gray-400 hover:text-white transition-colors" onClick={goToAssessment}>About Us</button></li>
                <li><button className="text-gray-400 hover:text-white transition-colors" onClick={goToAssessment}>Courses</button></li>
                <li><button className="text-gray-400 hover:text-white transition-colors" onClick={goToAssessment}>Student Loans</button></li>
                <li><button className="text-gray-400 hover:text-white transition-colors" onClick={goToAssessment}>Career Services</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><button className="text-gray-400 hover:text-white transition-colors" onClick={goToAssessment}>Call Center Training</button></li>
                <li><button className="text-gray-400 hover:text-white transition-colors" onClick={goToAssessment}>Digital Skills</button></li>
                <li><button className="text-gray-400 hover:text-white transition-colors" onClick={goToAssessment}>ICT Certification</button></li>
                <li><button className="text-gray-400 hover:text-white transition-colors" onClick={goToAssessment}>Professional Development</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 info@ibcmtraining.com</li>
                <li>📞 +234 (0) 123 456 7890</li>
                <li>📍 Lagos, Nigeria</li>
                <li>🌐 www.ibcmtraining.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 IBCM Training. All rights reserved. | Powered by SBTS Group & Digital Bridge Institute</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;