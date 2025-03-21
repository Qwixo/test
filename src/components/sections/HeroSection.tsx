import React from 'react';
import { cn } from '../../lib/utils';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-light-bg relative overflow-hidden" id="hero">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className={cn(
          "w-full h-full",
          "bg-[radial-gradient(circle_at_center,_var(--light-aqua)_0,_transparent_70%)]"
        )}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Want More Clients?<br />
            <span className="text-dark-aqua">Guaranteed</span>—Or You Don't Pay.
          </h1>
          
          <p className="text-xl md:text-2xl text-dark-gray mb-10 max-w-2xl mx-auto">
            We leverage AI-powered cold email to deliver warm, high-intent leads. 
            If we fail, you don't pay.
          </p>
          
          <a 
            href="#cta" 
            className="primary-button text-lg shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
