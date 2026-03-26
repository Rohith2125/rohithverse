import React from 'react';
import { HiExternalLink, HiCode } from 'react-icons/hi';

const projects = [
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
    <section id="projects" className="bg-white dark:bg-[#111827] transition-colors duration-300">
      <div className="section-container">
        <div className="text-center mb-16">
          <h3 className="text-[#3B82F6] font-semibold text-lg uppercase tracking-wider mb-2">Portfolio</h3>
          <h2 className="text-3xl md:text-5xl font-bold dark:text-gray-100">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-[#3B82F6] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="card group overflow-hidden flex flex-col">
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-white text-[#3B82F6] rounded-full hover:bg-[#3B82F6] hover:text-white transition-all transform hover:scale-110"
                    aria-label="View Live Project"
                  >
                    <HiExternalLink className="w-6 h-6" />
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-white text-[#3B82F6] rounded-full hover:bg-[#3B82F6] hover:text-white transition-all transform hover:scale-110"
                    aria-label="View Source Code"
                  >
                    <HiCode className="w-6 h-6" />
                  </a>
                </div>
              </div>
              
              <div className="p-8 flex-grow">
                <h4 className="text-2xl font-bold mb-3 dark:text-gray-100 group-hover:text-[#3B82F6] transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6 border-l-4 border-[#3B82F6]">
                  <p className="text-sm italic text-blue-800 dark:text-blue-300">
                    <span className="font-bold">Key Achievement: </span>
                    {project.achievement}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-full border border-gray-200 dark:border-gray-700">
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
