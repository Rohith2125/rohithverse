import React from 'react';
import { HiExternalLink, HiCode } from 'react-icons/hi';

const projects = [
  {
    title: "Edith – AI Interview System",
    description: "End-to-end AI-powered screening platform that automates initial HR rounds. Orchestrates dynamic question generation based on resume context and JD using RAG and LLM agents.",
    achievement: "V2 Evolution: Fully automated workflow from resume processing to performance report generation with automated scoring thresholds and email scheduling.",
    tech: ["React.js", "FastAPI", "Groq (LLaMA)", "Supabase", "STT API"],
    live: "https://edith-ai-interview.vercel.app/",
    github: "https://github.com/Rohith2125/Edith",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "RealDevs - Developer Challenge Platform",
    description: "Full-stack platform enabling startups to post real-world problems and developers to submit MVP solutions to compete for prize pools or hiring opportunities.",
    achievement: "LLM-powered evaluation pipeline using Llama 70B to automatically score submissions based on product design, system architecture, and implementation quality.",
    tech: ["React.js", "Python", "FastAPI", "Supabase", "Llama 70B"],
    live: "https://real-devs-tau.vercel.app/",
    github: "https://github.com/Rohith2125/Real-devs",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Gym Management System",
    description: "Full-stack web application for managing memberships, payments, and daily logs with admin dashboard for analytics and real-time membership tracking.",
    achievement: "Integrated Razorpay for secure digital payments with real-time analytics and dashboard visualization.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Razorpay"],
    live: "https://gymbro-w1qp.onrender.com/",
    github: "https://github.com/Rohith2125/GymBro-an-gym-management-software",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black transition-colors duration-300">
      <div className="section-container">
        <div className="text-center mb-28">
           <span className="px-5 py-2 rounded-full bg-neon-green/10 text-neon-green text-[10px] font-black uppercase tracking-[0.4em] mb-6 border border-neon-green/20">
            Selected Works
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-4 italic underline decoration-neon-green/40 underline-offset-8">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-neon-green mx-auto mt-10 rounded-full shadow-[0_0_20px_rgba(57,255,20,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group overflow-hidden flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} border border-white/5 hover:border-neon-green/30 transition-all duration-700 bg-[#0D0D0D]/40 backdrop-blur-2xl shadow-2xl rounded-[2.5rem] min-h-[350px]`}
            >
              <div className="relative w-full lg:w-2/5 h-60 sm:h-72 lg:h-auto overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-5 bg-neon-green text-black rounded-2xl hover:bg-white transition-all transform hover:scale-110 shadow-2xl shadow-neon-green/40">
                    <HiExternalLink className="w-7 h-7" />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-5 bg-white text-black rounded-2xl hover:bg-neon-green transition-all transform hover:scale-110 shadow-2xl shadow-white/20">
                    <HiCode className="w-7 h-7" />
                  </a>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 w-full lg:w-3/5 flex flex-col justify-center">
                 <div className="flex items-center gap-4 mb-4">
                    <span className="text-neon-green font-black text-[10px] uppercase tracking-[0.3em]">Project 0{index + 1}</span>
                    <div className="h-px flex-grow bg-white/10"></div>
                 </div>
                <h4 className="text-2xl md:text-4xl font-black mb-4 text-white group-hover:text-neon-green transition-colors tracking-tighter leading-tight">
                  {project.title}
                </h4>
                <p className="text-gray-400 mb-6 text-sm md:text-base leading-relaxed font-medium">
                  {project.description}
                </p>
                <div className="bg-white/5 p-6 rounded-[1.5rem] mb-10 border-l-[6px] border-white/20">
                  <p className="text-[12px] md:text-sm text-gray-300">
                    <span className="font-black text-white uppercase tracking-widest text-[10px] block mb-2">Impact & Innovation: </span>
                    {project.achievement}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="px-5 py-2 bg-black text-neon-green text-[10px] font-black uppercase tracking-widest rounded-xl border border-neon-green/20 hover:bg-neon-green hover:text-black transition-all cursor-default">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
