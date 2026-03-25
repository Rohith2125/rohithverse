import React from 'react';
import { 
  SiJavascript, SiPython, SiReact, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiFastapi, SiMongodb, 
  SiSqlite, SiGit, SiVercel, SiRender, SiClaude
} from 'react-icons/si';
import { VscCode, VscBeaker } from 'react-icons/vsc';

const skillCategories = [
  {
    title: 'Languages',
    accent: 'blue',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
    ]
  },
  {
    title: 'Frontend',
    accent: 'purple',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ]
  },
  {
    title: 'Backend',
    accent: 'green',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    ]
  },
  {
    title: 'Databases',
    accent: 'orange',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'SQL', icon: SiSqlite, color: '#003B57' },
    ]
  },
  {
    title: 'Tools',
    accent: 'red',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Cursor', icon: VscCode, color: '#42A5F5' },
      { name: 'Claude Code', icon: SiClaude, color: '#D97757' },
      { name: 'Vercel', icon: SiVercel, color: '#000000' },
      { name: 'Render', icon: SiRender, color: '#46E3B7' },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#f9fafb] dark:bg-[#0f172a] transition-colors duration-300">
      <div className="section-container">
        <div className="text-center mb-16">
          <h3 className="text-[#3B82F6] font-semibold text-lg uppercase tracking-wider mb-2">Technical Arsenal</h3>
          <h2 className="text-3xl md:text-5xl font-bold dark:text-gray-100">Skills & Expertise</h2>
          <div className="w-20 h-1.5 bg-[#3B82F6] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="card group">
              <h4 className={`text-xl font-bold mb-6 flex items-center gap-3 border-b border-gray-100 dark:border-gray-800 pb-3`}>
                <span className={`w-3 h-3 rounded-full bg-${category.accent}-500 shadow-lg shadow-${category.accent}-500/50`}></span>
                {category.title}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
                    <skill.icon 
                      className="w-10 h-10 mb-3 grayscale group-hover:grayscale-0 transition-all duration-500" 
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-[#3B82F6] dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
