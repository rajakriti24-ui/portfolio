import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaLaptopCode, FaCode, FaBrain, FaGithub, FaChartLine } from 'react-icons/fa';

interface AchievementItem {
  icon: React.ReactNode;
  category: string;
  title: string;
  desc: string;
}

export const StatsAchievements: React.FC = () => {
  const achievements: AchievementItem[] = [
    {
      icon: <FaTrophy className="w-5 h-5 text-secondary-accent" />,
      category: 'Hackathons',
      title: 'REVA University Hack-AI Selection',
      desc: 'Collaborated in a team of 4 to build a Python-based academic correlation script checking GPA indices.'
    },
    {
      icon: <FaLaptopCode className="w-5 h-5 text-primary-accent" />,
      category: 'Workshops',
      title: 'Vite React & Tailwind UI Seminar',
      desc: 'Participated in a hands-on technical boot camp focusing on responsive component compiling.'
    },
    {
      icon: <FaCode className="w-5 h-5 text-secondary-accent" />,
      category: 'Coding Challenges',
      title: 'HackerRank Problem Solver Badge',
      desc: 'Solved 100+ logic puzzles covering array matrices, binary checks, and string manipulation patterns.'
    },
    {
      icon: <FaBrain className="w-5 h-5 text-primary-accent" />,
      category: 'AI & Data Science Learning',
      title: 'Stanford ML Regressions Program',
      desc: 'Finished supervised learning paths modeling linear regressions, parameters tuning, and evaluation metrics.'
    },
    {
      icon: <FaGithub className="w-5 h-5 text-secondary-accent" />,
      category: 'Open Source Learning',
      title: 'Git Version Control Pipelines',
      desc: 'Configured local repositories and pushed structured commits, branch mergers, and readmes.'
    },
    {
      icon: <FaChartLine className="w-5 h-5 text-primary-accent" />,
      category: 'Continuous Skill Development',
      title: 'Algorithms & Java OOP Structures',
      desc: 'Currently learning logical memory pointers, class inheritances, and modular debugging principles.'
    }
  ];

  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
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
            Achievements & Milestones
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto mt-4 rounded-full"></div>
          <p className="text-text-muted mt-4 font-sans text-sm sm:text-base">
            Learning milestones and technical achievements on my developer roadmap.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((ach, idx) => (
            <motion.div 
              key={idx}
              className="p-6 rounded-2xl glass bg-purple-950/10 border border-purple-500/10 shadow-md text-left flex flex-col gap-4 hover:border-primary-accent/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-purple-950/40 rounded-xl border border-purple-500/10 shadow-sm flex-shrink-0 text-primary-accent group-hover:bg-primary-accent/15 transition-all">
                {ach.icon}
              </div>
              
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-secondary-accent block mb-1">
                  {ach.category}
                </span>
                <h4 className="font-heading text-lg font-bold text-text-main mb-2">
                  {ach.title}
                </h4>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans">
                  {ach.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
