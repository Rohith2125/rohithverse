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
    <section id="contact" className="bg-white dark:bg-[#111827] transition-colors duration-300">
      <div className="section-container">
        <div className="text-center mb-16">
          <h3 className="text-[#3B82F6] font-semibold text-lg uppercase tracking-wider mb-2">Get In Touch</h3>
          <h2 className="text-3xl md:text-5xl font-bold dark:text-gray-100 italic">Let's Build Something Great Together</h2>
          <div className="w-20 h-1.5 bg-[#3B82F6] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? "_blank" : undefined}
              rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="card group flex flex-col items-center justify-center p-10 hover:border-[#3B82F6] transition-all duration-300"
            >
              <div className="p-4 bg-gray-50 dark:bg-[#0f172a] rounded-2xl mb-6 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/40 text-gray-600 dark:text-gray-400 group-hover:text-[#3B82F6] transition-all duration-300 group-hover:scale-110">
                <link.icon className="w-10 h-10" />
              </div>
              <h4 className="text-lg font-bold dark:text-gray-100 group-hover:text-[#3B82F6] transition-colors mb-2">
                {link.name}
              </h4>
              <p className="text-[#6B7280] dark:text-gray-400 text-sm font-medium text-center break-all">
                {link.value}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-20 p-12 bg-[#1F2937] dark:bg-[#0f172a] rounded-3xl text-center relative overflow-hidden group">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6] opacity-10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-10 rounded-full blur-[100px] -ml-32 -mb-32"></div>

          <div className="relative z-10 flex flex-col items-center">
             <div className="w-16 h-16 bg-[#3B82F6] rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-500/30">
                <HiChatAlt2 className="w-8 h-8" />
             </div>
             <h3 className="text-3xl font-bold text-white mb-6 max-w-lg">
               Available for full-time roles and freelance collaborations
             </h3>
             <a href="mailto:rohithroh25@gmail.com" className="btn-primary flex items-center gap-3 py-4 pr-3 pl-8">
                Send a Message
                <div className="bg-white/20 p-1.5 rounded-lg">
                  <HiMail className="w-5 h-5" />
                </div>
             </a>
          </div>
        </div>

        <div className="flex justify-center mt-12 mb-4">
          <a href="#" className="flex flex-col items-center gap-2 text-gray-400 hover:text-[#3B82F6] transition-colors group">
             <div className="p-3 border border-gray-200 dark:border-gray-800 rounded-full group-hover:shadow-lg transition-all transform group-hover:-translate-y-2">
                <HiArrowNarrowUp className="w-6 h-6" />
             </div>
             <span className="text-xs font-bold uppercase tracking-widest">Back to top</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
