import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaTools, FaDatabase, FaUsers } from 'react-icons/fa';

interface SkillItem {
  name: string;
  level: number; // percentage
  details: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Programming',
      icon: <FaCode className="w-5 h-5 text-primary-accent" />,
      skills: [
        { name: 'C Language', level: 85, details: 'Pointers, syntax structures, character coordinates canvas rendering' },
        { name: 'Python', level: 90, details: 'Logical scripting, object classes, numerical arrays using NumPy' },
        { name: 'Java (Learning)', level: 60, details: 'OOP foundations, loops, class variables, structured arrays' },
        { name: 'SQL', level: 80, details: 'Relational logic, database schemas, select queries, filtering' }
      ]
    },
    {
      title: 'Core Concepts',
      icon: <FaBrain className="w-5 h-5 text-secondary-accent" />,
      skills: [
        { name: 'Problem Solving', level: 88, details: 'Analytical thinking, math-oriented logic, resolving syntax problems' },
        { name: 'Algorithms', level: 82, details: 'Binary search, simple sorting, code paths efficiency checks' },
        { name: 'Data Structures', level: 80, details: 'Pointers structures, arrays matrices, stack allocations, files handling' },
        { name: 'Logical Thinking', level: 90, details: 'Translating logical constraints into step-by-step conditional statements' },
        { name: 'Debugging', level: 85, details: 'Step-by-step code traces, parsing terminal errors, fixing runtime crashes' }
      ]
    },
    {
      title: 'Tools',
      icon: <FaTools className="w-5 h-5 text-primary-accent" />,
      skills: [
        { name: 'Git', level: 85, details: 'Commits version history, branch checkout, local changes tracking' },
        { name: 'GitHub', level: 88, details: 'Repository pushes, clones, files uploads, readmes management' },
        { name: 'VS Code', level: 92, details: 'Integrated terminal workspace, standard extensions, source compiler tools' }
      ]
    },
    {
      title: 'AI & Data Science',
      icon: <FaDatabase className="w-5 h-5 text-secondary-accent" />,
      skills: [
        { name: 'AI Fundamentals', level: 75, details: 'Knowledge of heuristic search, intelligent agent logic structures' },
        { name: 'ML Fundamentals', level: 70, details: 'Understanding supervised classification models, parameters mapping' },
        { name: 'Data Analysis Basics', level: 80, details: 'Pandas metrics, loading CSV matrices, computing summary stats' },
        { name: 'Statistics', level: 78, details: 'Mean, median, distributions checks, probability mathematical models' }
      ]
    },
    {
      title: 'Professional Skills',
      icon: <FaUsers className="w-5 h-5 text-primary-accent" />,
      skills: [
        { name: 'Teamwork', level: 90, details: 'Collaborative code sharing, coordinate tasks distribution, peer reviews' },
        { name: 'Communication', level: 85, details: 'Explaining database structures and programming variables to group members' },
        { name: 'Adaptability', level: 88, details: 'Transitioning between languages, learning coding environments quickly' },
        { name: 'Leadership', level: 80, details: 'Coordinating group projects, planning milestones, presenting dashboards' },
        { name: 'Continuous Learning', level: 95, details: 'Self-driven code research, tutorials tracking, learning frameworks' }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Decorative Blob */}
      <div className="decor-blob decor-blob-1"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Technical & Professional Skills
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, catIdx) => (
            <motion.div 
              key={catIdx} 
              className={`p-6 sm:p-8 rounded-2xl glass bg-purple-950/10 border border-purple-500/10 shadow-lg text-left hover:border-primary-accent/30 transition-all duration-300 group ${
                catIdx >= 3 ? 'lg:col-span-1.5 lg:translate-x-1/2' : '' // Offset the bottom cards slightly on large screens
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-purple-500/10">
                <div className="w-11 h-11 flex items-center justify-center bg-primary-accent/10 rounded-xl text-primary-accent group-hover:bg-primary-accent/15 transition-all">
                  {category.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-text-main group-hover:text-primary-accent transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-col gap-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="relative group/skill flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-sm font-semibold text-text-main">
                      <span className="hover:text-secondary-accent transition-colors cursor-help">
                        {skill.name}
                      </span>
                      <span className="text-secondary-accent text-xs">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-purple-950/20 rounded-full overflow-hidden border border-purple-900/10">
                      <motion.div 
                        className="h-full rounded-full bg-gradient-to-r from-primary-accent to-secondary-accent" 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 }}
                      />
                    </div>
                    
                    {/* Hover tooltip for details */}
                    <div className="absolute left-0 -top-8 w-full bg-slate-950/95 text-white text-[11px] font-sans px-3 py-1.5 rounded-lg border border-purple-500/20 shadow-md opacity-0 pointer-events-none group-hover/skill:opacity-100 group-hover/skill:-translate-y-1 transition-all duration-200 z-10">
                      <strong>Focus:</strong> {skill.details}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
