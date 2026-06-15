import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheckCircle } from 'react-icons/fa';

interface Project {
  title: string;
  shortDesc: string;
  longDesc: string;
  tags: string[];
  features: string[];
  icon: string;
  codeUrl: string;
  demoUrl?: string;
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectsList: Project[] = [
    {
      title: '2D Graphics Editor in C',
      shortDesc: 'A menu-driven character canvas graphics editor built in systems C.',
      longDesc: 'Developed a terminal vector graphics compiler running on coordinate arrays. Operates a text character matrix canvas where users select coordinates to dynamically render and clear lines, rectangles, triangles, and circles via command parameters.',
      tags: ['C Programming', 'Data Structures', 'Matrix Operations', 'CLI'],
      features: [
        'Interactive character canvas rendered directly in CLI terminals.',
        'Algorithmic shape mapping (Bresenham circle plotting, line vectors).',
        'Stack history modules allowing users to dynamically add and remove shapes.',
        'Interactive menu loops checking inputs for index boundary errors.'
      ],
      icon: '🎨',
      codeUrl: 'https://github.com/rajakriti24-ui/2d-graphics-editor-c'
    },
    {
      title: 'Student Management System',
      shortDesc: 'A persistent record manager built in C utilizing file handling structures.',
      longDesc: 'Engineered an administrative program persisting student files in memory and local storage. Uses custom C structures and binary files to perform record registration, CGPA calculations, deletions, and lookup operations.',
      tags: ['C Programming', 'File I/O', 'Algorithms', 'Data Persistence'],
      features: [
        'Persistent database operations saving binary logs directly to local storage.',
        'Secure CRUD operations executing validations to prevent database leaks.',
        'Search index routes matching queries by roll numbers, names, or grade boundaries.',
        'Grade calculations calculating averages and distributions stats dynamically.'
      ],
      icon: '📁',
      codeUrl: 'https://github.com/rajakriti24-ui/student-management-system'
    },
    {
      title: 'Personal Portfolio Website',
      shortDesc: 'A responsive space portfolio designed for Akriti Raj using React + Tailwind.',
      longDesc: 'Created this website to serve as a visual, animated developer dashboard. Implements Framer Motion transitions, custom cursor glow coordinates, responsive glassmorphism containers, and custom SVG icons.',
      tags: ['React.js', 'Tailwind CSS', 'Framer Motion', 'React Icons'],
      features: [
        'Vite React architecture compiling layouts into highly optimized bundle sizes.',
        'Full Tailwind integration delivering glassmorphism cards and purple glow effects.',
        'Interactive layout tracking pointer coords to render follower gradients.',
        'Responsive layout adjusting interfaces for mobile, tablet, and desktop views.'
      ],
      icon: '💻',
      codeUrl: 'https://github.com/rajakriti24-ui/portfolio',
      demoUrl: 'https://rajakriti24-ui.vercel.app'
    }
  ];

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Decorative Blob */}
      <div className="decor-blob decor-blob-2"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto mt-4 rounded-full"></div>
          <p className="text-text-muted mt-4 font-sans text-sm sm:text-base max-w-xl mx-auto">
            A showcase of programming projects merging systems logic with clean developer portfolio frameworks.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, idx) => (
            <motion.div 
              key={idx} 
              className="p-6 sm:p-8 rounded-2xl glass bg-purple-950/10 border border-purple-500/10 shadow-md text-left cursor-pointer hover:border-primary-accent/30 transition-all duration-350 flex flex-col items-start gap-4 group"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-accent/10 flex items-center justify-center text-2xl border border-purple-500/10 shadow-sm group-hover:bg-primary-accent/15 transition-all">
                {project.icon}
              </div>
              
              <h3 className="font-heading text-xl font-bold text-text-main group-hover:text-primary-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-text-muted text-sm leading-relaxed flex-grow font-sans">
                {project.shortDesc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-2 w-full">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-2.5 py-1 text-xs font-semibold rounded-md bg-primary-accent/5 text-primary-accent border border-primary-accent/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-secondary-accent mt-4 group-hover:text-primary-accent transition-colors">
                Learn Details
                <span className="group-hover:translate-x-1.5 transition-transform">➜</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div 
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />
            
            {/* Modal Content */}
            <motion.div 
              className="w-full max-w-2xl rounded-3xl glass bg-[#07031c]/95 border border-purple-500/25 p-8 text-left shadow-2xl relative max-h-[90vh] overflow-y-auto flex flex-col gap-6 z-10"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-text-muted hover:text-text-main transition-colors cursor-pointer"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <FaTimes className="w-4 h-4" />
              </button>
              
              {/* Header info */}
              <div className="flex gap-4 items-center mt-2">
                <div className="w-16 h-16 rounded-2xl bg-primary-accent/10 flex items-center justify-center text-3xl border border-purple-500/10">
                  {selectedProject.icon}
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-extrabold text-text-main">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-2 py-0.5 text-[10px] sm:text-xs font-semibold rounded-md bg-secondary-accent/15 text-secondary-accent border border-secondary-accent/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-primary-accent">
                  Overview
                </h4>
                <p className="text-text-muted text-sm sm:text-base leading-relaxed font-sans">
                  {selectedProject.longDesc}
                </p>
              </div>

              {/* Key Features */}
              <div className="flex flex-col gap-3">
                <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-primary-accent">
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-text-muted font-sans">
                  {selectedProject.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex gap-2 items-start">
                      <FaCheckCircle className="w-4 h-4 text-secondary-accent flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-6 border-t border-purple-500/10 mt-2">
                <a 
                  href={selectedProject.codeUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-5 py-2.5 rounded-xl font-bold bg-gradient-to-r from-secondary-accent to-primary-accent text-white hover:scale-102 hover:shadow-md hover:brightness-105 transition-all duration-300 flex items-center gap-2 cursor-pointer text-sm"
                >
                  <FaGithub className="w-4 h-4" />
                  View Source Code
                </a>
                
                {selectedProject.demoUrl && (
                  <a 
                    href={selectedProject.demoUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="px-5 py-2.5 rounded-xl font-bold glass border border-purple-500/10 text-text-main hover:scale-102 hover:bg-white/10 transition-all duration-300 flex items-center gap-2 cursor-pointer text-sm"
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
