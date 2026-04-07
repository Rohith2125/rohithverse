import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {


  return (
    <footer className="bg-black py-16 border-t border-white/5 transition-colors duration-300">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
        {/* Brand/Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-4">
           <h4 className="text-3xl font-black text-white tracking-tighter">
             ROHITH<span className="text-neon-green">.</span>
           </h4>
           <div className="flex items-center gap-3 text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">
             <span>© 2025</span>
             <span className="w-1.5 h-1.5 bg-neon-green/40 rounded-full"></span>
             <span>All rights reserved.</span>
           </div>
        </div>

        {/* Attribution */}
        <div className="text-gray-600 text-[10px] font-black uppercase tracking-[0.4em] text-center md:text-right">
          Built with <span className="text-neon-green inline-block hover:scale-125 transition-all font-bold mx-1">⚡</span> by Rohith
        </div>
      </div>
    </footer>
  );
};

export default Footer;
