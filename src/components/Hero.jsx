import React from 'react';
import icon from '../assets/images/icon.jpg';
import avatar from '../assets/images/avatar.png';
import { HiArrowNarrowDown } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 opacity-10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="section-container text-center z-10">
        {/* Avatar */}
        <div className="mb-8 animate-fadeInUp">
          <div className="relative inline-block p-1 bg-gradient-to-tr from-[#3B82F6] to-[#8B5CF6] rounded-full shadow-2xl">
            <img 
              src={icon} 
              alt="Muddasani Rohith" 
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-white dark:border-[#1F2937]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-[#3B82F6] dark:text-blue-400 font-semibold tracking-wide uppercase text-sm sm:text-base animate-fadeInUp stagger-1">
            Hi, I'm
          </h2>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-2 animate-fadeInUp stagger-2">
            Muddasani Rohith
          </h1>
          <h2 className="text-2xl sm:text-4xl text-[#6B7280] dark:text-gray-400 font-medium animate-fadeInUp stagger-3">
            Full-Stack Developer
          </h2>
          <p className="text-lg sm:text-xl text-[#6B7280] dark:text-gray-400 max-w-2xl mx-auto animate-fadeInUp stagger-4 leading-relaxed">
            Building scalable MERN and Python-based AI-integrated products for startups.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-8 animate-fadeInUp stagger-5">
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center text-gray-400 dark:text-gray-500">
        <span className="text-xs uppercase tracking-widest mb-2 font-medium">Explore</span>
        <HiArrowNarrowDown className="w-5 h-5 text-[#3B82F6]" />
      </div>
    </section>
  );
};

export default Hero;
