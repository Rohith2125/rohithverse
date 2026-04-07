import React from 'react';
import { HiAcademicCap, HiBadgeCheck, HiCalendar } from 'react-icons/hi';

const educationData = [
  {
    institution: "TKR College of Engineering & Technology (JNTUH)",
    degree: "B.Tech (CSE - AIML)",
    duration: "2021 - 2025",
    // metric: "CGPA: 6.7/10",
    isCurrent: true,
    // description: "Specializing in Artificial Intelligence and Machine Learning with a focus on building web applications using modern technologies.",
    color: 'emerald'
  },
  {
    institution: "Narayana Junior College, Hyderabad",
    degree: "Intermediate Education (MPC)",
    duration: "2019 - 2021",
    // metric: "Marks: 898/1000",
    isCurrent: false,
    // description: "Completed higher secondary education with major in Mathematics, Physics and Chemistry.",
    color: 'blue'
  }
];

const certifications = [
  {
    title: "Frontend Web Development Workshop",
    provider: "JNTU Hyderabad",
  },
  {
    title: "MERN Stack Workshop & Hackathon",
    provider: "Techxcelerate, BITS PILANI Hyderabad",
  }
];

const Education = () => {
  return (
    <section id="education" className="bg-black transition-colors duration-300">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <div className="mb-16">
              <span className="px-5 py-2 rounded-full bg-neon-green/10 text-neon-green text-[10px] font-black uppercase tracking-[0.4em] mb-6 border border-neon-green/20">
                Academic Background
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-4">Growth <span className="text-neon-green italic">&</span> Learning</h2>
              <div className="w-24 h-1.5 bg-neon-green mt-10 rounded-full shadow-[0_0_20px_rgba(57,255,20,0.5)]"></div>
            </div>

            <div className="space-y-8 relative border-l-2 border-white/10 ml-6 py-4 px-10">
              {educationData.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[64px] w-10 h-10 rounded-full border-4 border-black shadow-2xl flex items-center justify-center ${edu.isCurrent ? 'bg-neon-green animate-pulse' : 'bg-gray-800'}`}>
                    <HiAcademicCap className={`w-5 h-5 ${edu.isCurrent ? 'text-black' : 'text-gray-400'}`} />
                  </div>

                  <div className="card group hover:border-neon-green/40 transition-all duration-500 bg-[#0D0D0D] border-white/5 rounded-[1.5rem] p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
                      <div>
                        <h4 className="text-2xl font-black text-white group-hover:text-neon-green transition-colors leading-tight">
                          {edu.institution}
                        </h4>
                        <p className="text-neon-green font-black text-sm uppercase tracking-widest mt-2">{edu.degree}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end">
                        <span className="flex items-center gap-2 text-xs text-gray-500 font-black uppercase tracking-[0.2em] whitespace-nowrap mb-2">
                          <HiCalendar className="w-4 h-4 text-neon-green" />
                          {edu.duration}
                        </span>
                        <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-lg border border-white/20">
                          {edu.metric || 'In Progress'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-col">
            <div className="mb-16">
               <span className="px-5 py-2 rounded-full bg-white/5 text-white text-[10px] font-black uppercase tracking-[0.4em] mb-6 border border-white/20">
                Professional Credentials
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-4">Certifications</h2>
              <div className="w-24 h-1.5 bg-white mt-10 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]"></div>
            </div>

            <div className="space-y-8 flex-grow">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-6 p-6 rounded-[1.5rem] bg-dark-card border border-white/5 hover:border-neon-green/30 transition-all duration-500 group shadow-2xl">
                  <div className="p-5 bg-neon-green/10 rounded-2xl text-neon-green group-hover:bg-neon-green group-hover:text-black transition-all duration-500 shadow-lg group-hover:shadow-neon-green/20">
                    <HiBadgeCheck className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white mb-2 group-hover:text-neon-green transition-colors leading-tight uppercase tracking-tight">
                      {cert.title}
                    </h4>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em]">
                      Accredited by <span className="text-gray-300">{cert.provider}</span>
                    </p>
                  </div>
                </div>
              ))}

              <div className="mt-8 p-8 bg-gradient-to-br from-neon-green/10 to-white/5 rounded-[2rem] border border-white/5 flex flex-col items-center justify-center text-center backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
                {/* Decorative blobs */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon-green/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                
                <div className="w-16 h-16 bg-neon-green rounded-2xl flex items-center justify-center text-black mb-8 animate-bounce shadow-2xl shadow-neon-green/30 rotate-12">
                  <HiAcademicCap className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Future-Proofing Skills</h4>
                <p className="text-gray-400 text-sm max-w-xs leading-relaxed font-medium">
                  Currently scaling expertise in <span className="text-neon-green font-bold">LLM orchestration</span> and <span className=" text-neon-green font-bold uppercase tracking-widest text-[10px]">Agentic AI Architectures</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
