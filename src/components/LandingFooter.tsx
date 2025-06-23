import React from 'react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Inclusion', href: '#inclusion' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'Twitter', href: '#', icon: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.95 3.62-.72-.02-1.39-.22-1.98-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.11 2.94 3.97 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z" /></svg>
  ) },
  { name: 'Facebook', href: '#', icon: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
  ) },
  { name: 'LinkedIn', href: '#', icon: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" /></svg>
  ) },
];

const LandingFooter: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white py-8 px-4 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Quick Links */}
        <nav className="flex space-x-6 mb-2 md:mb-0">
          {quickLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="hover:underline text-white/90 focus:outline-none focus:underline"
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Social Links */}
        <div className="flex space-x-4">
          {socialLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              aria-label={link.name}
              className="hover:text-green-300 focus:outline-none focus:text-green-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
        {/* Copyright */}
        <div className="text-xs text-white/70 text-center md:text-right">
          &copy; {new Date().getFullYear()} SBTS Group & DBI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter; 