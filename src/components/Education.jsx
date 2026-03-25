import React from 'react';
import { HiAcademicCap, HiBadgeCheck, HiCalendar } from 'react-icons/hi';

const educationData = [
  {
    institution: "TKR College of Engineering & Technology (JNTUH)",
    degree: "B.Tech (CSE - AIML)",
    duration: "2021 - 2025",
    metric: "CGPA: 6.7/10",
    isCurrent: true,
    description: "Specializing in Artificial Intelligence and Machine Learning with a focus on building web applications using modern technologies.",
    color: 'emerald'
  },
  {
    institution: "Narayana Junior College, Hyderabad",
    degree: "Intermediate Education (MPC)",
    duration: "2019 - 2021",
    metric: "Marks: 898/1000",
    isCurrent: false,
    description: "Completed higher secondary education with major in Mathematics, Physics and Chemistry.",
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
    <section id="education" className="bg-[#f9fafb] dark:bg-[#0f172a] transition-colors duration-300">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <div className="mb-12">
              <h3 className="text-[#3B82F6] font-semibold text-lg uppercase tracking-wider mb-2">My Journey</h3>
              <h2 className="text-3xl md:text-5xl font-bold dark:text-gray-100">Education</h2>
              <div className="w-20 h-1.5 bg-[#3B82F6] mt-4 rounded-full"></div>
            </div>

            <div className="space-y-12 relative border-l-2 border-[#3B82F6]/30 ml-4 py-8 px-8">
              {educationData.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[45px] w-8 h-8 rounded-full border-4 border-white dark:border-[#0f172a] shadow-lg flex items-center justify-center ${edu.isCurrent ? 'bg-emerald-500 animate-pulse' : 'bg-[#3B82F6]'}`}>
                    <HiAcademicCap className="w-4 h-4 text-white" />
                  </div>
                  
                  <div className="card group hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-bold dark:text-gray-100 group-hover:text-[#3B82F6] transition-colors">
                          {edu.institution}
                        </h4>
                        <p className="text-[#3B82F6] font-medium">{edu.degree}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end">
                        <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">
                          <HiCalendar className="w-4 h-4" />
                          {edu.duration}
                        </span>
                        <span className={`mt-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${edu.isCurrent ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'}`}>
                          {edu.metric}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-col">
            <div className="mb-12">
              <h3 className="text-[#3B82F6] font-semibold text-lg uppercase tracking-wider mb-2">Verified</h3>
              <h2 className="text-3xl md:text-5xl font-bold dark:text-gray-100">Certifications</h2>
              <div className="w-20 h-1.5 bg-[#3B82F6] mt-4 rounded-full"></div>
            </div>

            <div className="space-y-6 flex-grow">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-6 p-6 rounded-xl bg-white dark:bg-[#1F2937] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-[#3B82F6] group-hover:scale-110 transition-transform">
                    <HiBadgeCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold dark:text-gray-100 mb-1 group-hover:text-[#3B82F6] transition-colors leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      Issued by: <span className="text-gray-700 dark:text-gray-300">{cert.provider}</span>
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="mt-auto p-12 bg-gradient-to-br from-[#3B82F6]/5 to-purple-500/5 rounded-3xl border border-[#3B82F6]/10 flex flex-col items-center justify-center text-center">
                 <div className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center text-white mb-6 animate-bounce">
                    <HiAcademicCap className="w-6 h-6" />
                 </div>
                 <h4 className="text-xl font-bold dark:text-gray-100 mb-3">Continuous Learning</h4>
                 <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs leading-relaxed">
                   Currently exploring LLM orchestration frameworks and advanced vector database optimizations.
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
