import React, { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Inclusion', href: '#inclusion' },
  { name: 'Contact', href: '#contact' },
];

const LandingHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-30 top-0 text-white bg-gradient-to-r from-pink-700 via-yellow-500 to-yellow-400 shadow">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between py-2 px-4">
        <div className="flex items-center">
          <a className="font-bold text-2xl lg:text-4xl tracking-tight" href="#home">
            SBTS <span className="text-yellow-200">x</span> DBI
          </a>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center p-2 text-yellow-900 hover:text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <nav className="hidden lg:flex space-x-8 items-center">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-white font-semibold hover:text-yellow-200 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact">
            <button className="ml-4 bg-white text-pink-700 font-bold rounded-full py-2 px-6 shadow hover:bg-yellow-200 transition">
              Join Now
            </button>
          </a>
        </nav>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-gradient-to-r from-pink-700 via-yellow-500 to-yellow-400 px-4 pb-4">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-white font-semibold hover:text-yellow-200 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact">
            <button className="w-full mt-2 bg-white text-pink-700 font-bold rounded-full py-2 px-6 shadow hover:bg-yellow-200 transition">
              Join Now
            </button>
          </a>
        </nav>
      )}
    </header>
  );
};

export default LandingHeader; 