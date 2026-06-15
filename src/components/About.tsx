import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaCode } from 'react-icons/fa';

export const About: React.FC = () => {
  const cards = [
    {
      icon: <FaGraduationCap className="w-6 h-6 text-primary-accent" />,
      title: "REVA University",
      sub: "B.Tech in AI & Data Science",
      desc: "First-year student learning structured programming and mathematical foundations of computer science."
    },
    {
      icon: <FaSchool className="w-6 h-6 text-secondary-accent" />,
      title: "KDPS, Delhi",
      sub: "High School Foundation",
      desc: "Acquired a strong logical and mathematical base, fueling a curiosity for core coding algorithms."
    },
    {
      icon: <FaCode className="w-6 h-6 text-primary-accent" />,
      title: "Core Programming",
      sub: "Motivated Beginner",
      desc: "Spending the first year mastering logic building, debugging structures, and algorithm mechanics."
    }
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Decorative Blob */}
      <div className="decor-blob decor-blob-3"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto mt-4 rounded-full"></div>
          <p className="text-text-muted mt-4 font-sans text-sm sm:text-base">
            A glimpse into my background, academic drive, and core interests.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center">
          
          {/* Narrative Content */}
          <motion.div 
            className="p-8 sm:p-10 rounded-2xl glass bg-purple-950/5 border border-purple-500/10 shadow-lg text-left flex flex-col gap-6 justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-2xl font-bold text-primary-accent">
              Pursuing Intelligence Through Logic
            </h3>
            
            <p className="text-text-muted leading-relaxed font-sans text-sm sm:text-base">
              I am currently pursuing my B.Tech in <strong>Artificial Intelligence and Data Science (AIDS)</strong> at <strong>REVA University, Bangalore</strong>. Technology has always fascinated me, and stepping into the field of computer science is the beginning of my journey to understand and develop intelligent software systems.
            </p>
            
            <p className="text-text-muted leading-relaxed font-sans text-sm sm:text-base">
              Having completed my schooling (<strong>KDPS</strong>) from <strong>Delhi</strong>, I brought a strong mathematical and logical foundation into my college coursework. As a motivated beginner, I am spending my first year mastering coding fundamentals, structuring algorithms, and experimenting with logic structures.
            </p>

            <p className="text-text-muted leading-relaxed font-sans text-sm sm:text-base">
              I believe in consistent learning, debugging errors step-by-step, and growing a versatile developer mindset. Beyond my studies, I am eager to participate in collaborative learning opportunities, coding communities, and starter internships.
            </p>
          </motion.div>

          {/* Cards Column */}
          <div className="flex flex-col gap-5 justify-center">
            {cards.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="flex gap-5 p-5 items-start rounded-2xl glass bg-purple-950/10 border border-purple-500/10 shadow-md text-left group hover:border-primary-accent/30 transition-all duration-350"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -3 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-purple-950/40 rounded-xl border border-purple-500/10 shadow-sm flex-shrink-0 text-primary-accent group-hover:bg-primary-accent/15 transition-all">
                  {item.icon}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-secondary-accent block mb-0.5">{item.sub}</span>
                  <h4 className="font-heading text-lg font-bold text-text-main mb-1">{item.title}</h4>
                  <p className="text-xs text-text-muted leading-relaxed font-sans">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
