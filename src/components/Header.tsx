import React from 'react';
import Button from './ui/Button';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center">
              <img
                src="/tga.jpeg"
                alt="TGA Logo"
                className="w-[216px] h-[48] rounded-lg object-cover"
              />
            </div>
        <div className="hidden md:block">
          <Button
            variant="primary"
            onClick={() => window.open('https://icbm.training')}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;