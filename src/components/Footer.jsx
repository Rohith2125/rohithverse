import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socialIcons = [
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-[#0f172a] py-12 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        {/* Brand/Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-3">
           <h4 className="text-2xl font-bold text-[#3B82F6] dark:text-blue-400 tracking-tight">
             Rohith<span className="text-[#1F2937] dark:text-white inline-block ml-1">Muddasani</span>
           </h4>
           <div className="flex items-center gap-2 text-[#6B7280] dark:text-gray-400 text-sm font-medium">
             <span>© 2025</span>
             <span className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
             <span>All rights reserved.</span>
           </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="p-3 bg-white dark:bg-[#1F2937] border border-gray-100 dark:border-gray-800 rounded-full text-[#6B7280] dark:text-gray-400 hover:text-[#3B82F6] dark:hover:text-blue-400 hover:border-[#3B82F6] hover:shadow-lg transition-all transform hover:scale-110 active:scale-95 duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Attribution */}
        <div className="text-gray-400 dark:text-gray-500 text-xs font-semibold uppercase tracking-widest text-center md:text-right">
          Built with <span className="text-[#3B82F6] inline-block hover:animate-ping hover:text-red-500 transition-all font-bold cursor-help mx-0.5">♥</span> in React & Tailwind
        </div>
      </div>
    </footer>
  );
};

export default Footer;
