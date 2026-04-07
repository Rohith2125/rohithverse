import React from 'react';
import { HiMail, HiPhone, HiChatAlt2, HiArrowNarrowUp } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const contactLinks = [
    {
      name: 'Email',
      value: 'rohithroh25@gmail.com',
      href: 'mailto:rohithroh25@gmail.com',
      icon: HiMail,
      color: 'blue'
    },
    {
      name: 'Phone',
      value: '+91 7993976471',
      href: 'tel:+917993976471',
      icon: HiPhone,
      color: 'emerald'
    },
    {
      name: 'LinkedIn',
      value: 'Muddasani Rohith',
      href: 'https://www.linkedin.com/in/rohith-roh/', 
      icon: FaLinkedin,
      color: 'blue'
    },
    {
      name: 'GitHub',
      value: 'rohith2125',
      href: 'https://github.com/Rohith2125', 
      icon: FaGithub,
      color: 'gray'
    }
  ];

  return (
    <section id="contact" className="bg-black transition-colors duration-300">
      <div className="section-container">
        <div className="text-center mb-24">
           <span className="px-5 py-2 rounded-full bg-neon-green/10 text-neon-green text-[10px] font-black uppercase tracking-[0.4em] mb-6 border border-neon-green/20">
            Communication
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-4 italic">Let's Build Something <span className="text-neon-green underline decoration-white decoration-wavy underline-offset-8">Great</span> Together</h2>
          <div className="w-24 h-1.5 bg-neon-green mx-auto mt-10 rounded-full shadow-[0_0_20px_rgba(57,255,20,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? "_blank" : undefined}
              rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="card group flex flex-col items-center justify-center p-8 hover:border-neon-green/50 transition-all duration-700 bg-[#0D0D0D]/60 backdrop-blur-xl rounded-[1.5rem] border-white/5"
            >
              <div className="p-4 bg-black rounded-2xl mb-6 group-hover:bg-neon-green text-gray-500 group-hover:text-black transition-all duration-500 group-hover:scale-110 shadow-2xl group-hover:shadow-neon-green/20 border border-gray-900">
                <link.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-white group-hover:text-neon-green transition-colors mb-2 uppercase tracking-tighter">
                {link.name}
              </h4>
              <p className="text-gray-500 text-[10px] font-black text-center break-all uppercase tracking-[0.2em]">
                {link.value}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-20 p-10 bg-dark-card rounded-[2.5rem] text-center relative overflow-hidden group border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-green opacity-10 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-[120px] -ml-48 -mb-48 animate-pulse-slow delay-1000"></div>

          <div className="relative z-10 flex flex-col items-center">
             <div className="w-20 h-20 bg-neon-green rounded-3xl flex items-center justify-center text-black mb-10 shadow-[0_0_40px_rgba(57,255,20,0.4)] rotate-12 transition-transform group-hover:rotate-0 duration-700">
                <HiChatAlt2 className="w-10 h-10" />
             </div>
             <h3 className="text-3xl md:text-5xl font-black text-white mb-10 max-w-2xl tracking-tighter leading-[1.1]">
               Available for <span className="text-neon-green italic">full-time roles</span> and <span className="text-white border-b-2 border-white/40">freelance</span> collaborations
             </h3>
             <a href="mailto:rohithroh25@gmail.com" className="btn-primary flex items-center gap-5 py-5 pr-5 pl-12 group/btn rounded-2xl">
                <span className="uppercase tracking-[0.3em] font-black text-sm">Send a Message</span>
                <div className="bg-black/30 p-2.5 rounded-xl group-hover/btn:bg-black/50 transition-colors">
                  <HiMail className="w-7 h-7" />
                </div>
             </a>
          </div>
        </div>

        <div className="flex justify-center mt-16 mb-8">
          <a href="#" className="flex flex-col items-center gap-3 text-gray-600 hover:text-neon-green transition-colors group">
             <div className="p-5 border border-gray-900 rounded-full group-hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all transform group-hover:-translate-y-4 group-hover:border-neon-green/50">
                <HiArrowNarrowUp className="w-7 h-7 animate-bounce" />
             </div>
             <span className="text-[10px] font-black uppercase tracking-[0.5em]">Launch Home</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
