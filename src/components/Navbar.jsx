import React, { useState, useEffect } from 'react';
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#3B82F6] dark:text-blue-400">Rohith</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#6B7280] dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-blue-400 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-[#1F2937] text-gray-600 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <HiSun className="w-6 h-6" /> : <HiMoon className="w-6 h-6" />}
            </button>
            <a href="#contact" className="px-5 py-2.5 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#2563EB] transition-all duration-300 hover:scale-105">
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-[#1F2937] text-gray-600 dark:text-gray-300 transition-colors duration-200"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-[#1F2937] text-gray-600 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none"
              aria-label="Open navigation menu"
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#1F2937] transition-all duration-300 ease-in-out shadow-xl overflow-hidden ${isOpen ? 'max-h-96 border-t border-gray-100 dark:border-gray-800' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-lg text-center font-medium text-[#6B7280] dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-blue-400 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full py-3 text-center bg-[#3B82F6] text-white rounded-lg font-bold hover:bg-[#2563EB] transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
