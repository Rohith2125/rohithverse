import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_0_20px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <span className="text-3xl font-black tracking-tighter text-white group-hover:text-neon-green transition-colors">ROHITH<span className="text-neon-green">.</span></span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-neon-green font-bold text-sm uppercase tracking-widest transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-green transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(57,255,20,0.6)]"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-dark-card border border-white/5 text-gray-300 hover:text-neon-green transition-all duration-300 focus:outline-none"
              aria-label="Open navigation menu"
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl transition-all duration-500 ease-in-out shadow-2xl overflow-hidden ${isOpen ? 'max-h-96 border-t border-white/5 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-10 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-xl text-center font-black uppercase tracking-widest text-gray-400 hover:text-neon-green transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
