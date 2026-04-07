import React from 'react';
import {
  SiJavascript, SiPython, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiFastapi, SiMongodb,
  SiSqlite, SiGit, SiVercel, SiRender, SiClaude,
  SiPostgresql, SiNextdotjs, SiTypescript, SiDocker
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const allSkills = [
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  // { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  // { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#000000' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  // { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Cursor', icon: VscCode, color: '#42A5F5' },
  { name: 'Claude Code', icon: SiClaude, color: '#D97757' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'Render', icon: SiRender, color: '#46E3B7' },
];

const SkillIcon = ({ skill }) => (
  <div className="flex flex-col items-center justify-center p-4 mx-2 md:mx-4 group border border-transparent hover:border-neon-green/30 rounded-2xl transition-all duration-300 hover:bg-white/5 backdrop-blur-sm">
    <skill.icon
      className="w-10 h-10 md:w-14 md:h-14 mb-2 grayscale group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_rgba(57,255,20,0.4)]"
      style={{ color: skill.color }}
    />
    <span className="text-[10px] md:text-sm font-bold text-gray-500 group-hover:text-neon-green opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 uppercase tracking-tighter">
      {skill.name}
    </span>
  </div>
);

const Skills = () => {
  // Split skills into two lists for two different marquee directions
  const firstRow = [...allSkills, ...allSkills]; // Doubled for seamless loop

  return (
    <section id="skills" className="py-24 bg-black overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="flex flex-col items-center text-center">
          <span className="px-5 py-2 rounded-full bg-neon-green/10 text-neon-green text-[10px] font-black uppercase tracking-[0.4em] mb-6 border border-neon-green/20">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">My <span className="text-white italic">Skills</span></h2>
          <p className="mt-6 text-gray-400 max-w-xl text-sm md:text-base font-medium leading-relaxed">
            Proficient in modern web technologies and building AI-integrated products.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col gap-6 py-10">
        {/* Shading/Fading effect edges */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee pause-on-hover px-10">
          {firstRow.map((skill, index) => (
            <SkillIcon key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

