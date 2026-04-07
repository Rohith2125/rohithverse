import React from 'react';
import rohith from '../assets/images/rohith.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Background Grid & Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-neon-green/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      </div>

      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="flex flex-col space-y-6 text-left order-2 lg:order-1">
          <div className="animate-fadeInUp stagger-1">
            <span className="px-4 py-1.5 rounded-full bg-neon-green/10 text-neon-green text-xs font-black uppercase tracking-[0.4em] border border-neon-green/20">
              Full-Stack Developer
            </span>
          </div>

          <div className="animate-fadeInUp stagger-2">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
              Engineering <br />
              <span className="text-neon-green inline-block transform hover:skew-x-6 transition-transform">Digital</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500 italic">Future.</span>
            </h1>
          </div>

          <div className="animate-fadeInUp stagger-3">
             <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed font-medium">
              I'm <span className="text-white font-bold">Muddasani Rohith</span>. 
              Creating high-impact MERN & AI solutions with a flare of <span className="text-white font-bold uppercase tracking-widest text-xs border-b border-white/40">Innovation</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-10 animate-fadeInUp stagger-4">
            <a href="#projects" className="btn-primary group w-full sm:w-auto px-10 py-4 text-sm font-black tracking-[0.2em] flex items-center justify-center gap-3">
              VIEW WORK
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#contact" className="btn-secondary group w-full sm:w-auto px-10 py-4 text-sm font-black tracking-[0.2em] flex items-center justify-center gap-3 border-white/20 text-white hover:border-neon-green hover:text-neon-green bg-white/5 backdrop-blur-sm">
              GET IN TOUCH
            </a>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-fadeInUp stagger-2">
          <div className="relative group">
            {/* Glowing Aura */}
            <div className="absolute -inset-6 bg-neon-green opacity-20 rounded-[4rem] blur-[50px] group-hover:opacity-40 transition-opacity duration-700"></div>
            
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] bg-dark-card rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500">
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
               <img 
                 src={rohith} 
                 alt="Muddasani Rohith" 
                 className="w-full h-[calc(100%+9px)] object-cover object-top transition-all duration-700"
               />
               
               {/* Floating Overlay Info */}
               {/* <div className="absolute top-10 right-10 z-20 hidden md:block">
                  <div className="p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl rotate-6 group-hover:rotate-0 transition-transform duration-500">
                    <span className="text-neon-green font-black text-xl leading-none">50+</span>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Components</p>
                  </div>
               </div> */}
               
               <div className="absolute bottom-10 left-10 z-20">
                  <h3 className="text-white font-black text-3xl md:text-4xl uppercase tracking-tighter shadow-black drop-shadow-md">
                    ROHITH<span className="text-neon-green">.</span>
                  </h3>
                  {/* <p className="text-deep-blue font-bold text-[10px] uppercase tracking-[0.3em] mt-1">Available for Hire</p> */}
               </div>
            </div>

            {/* Neon Elements */}
            <div className="absolute -top-5 -left-5 w-20 h-20 border-t-4 border-l-4 border-neon-green rounded-tl-3xl opacity-50 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <div className="absolute -bottom-5 -right-5 w-20 h-20 border-b-4 border-r-4 border-white rounded-br-3xl opacity-50 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


