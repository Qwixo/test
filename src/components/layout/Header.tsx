import React from 'react';
import { cn } from '../../lib/utils';

const Header: React.FC = () => {
  return (
    <header className="py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <span className={cn(
            "text-2xl font-bold bg-clip-text text-transparent",
            "bg-gradient-to-r from-dark-aqua to-light-aqua"
          )}>
            DoneResults
          </span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#what-we-do" className="text-dark-gray hover:text-dark-aqua transition-colors">What We Do</a>
          <a href="#proof" className="text-dark-gray hover:text-dark-aqua transition-colors">Results</a>
          <a href="#process" className="text-dark-gray hover:text-dark-aqua transition-colors">Process</a>
          <a href="#guarantee" className="text-dark-gray hover:text-dark-aqua transition-colors">Guarantee</a>
        </nav>
        <a href="#cta" className="primary-button text-sm py-2 px-4 md:text-base md:py-3 md:px-6">
          Book a Call
        </a>
      </div>
    </header>
  );
};

export default Header;
