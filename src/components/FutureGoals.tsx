import React from 'react';
import { motion } from 'framer-motion';
import { FaCompass, FaRegLightbulb, FaRocket } from 'react-icons/fa';

export const FutureGoals: React.FC = () => {
  const goalItems = [
    {
      icon: <FaCompass className="w-5 h-5 text-primary-accent" />,
      title: "Software Foundations",
      desc: "Build strong coding paradigms, advanced data structures, and optimized systems architectures."
    },
    {
      icon: <FaRegLightbulb className="w-5 h-5 text-secondary-accent" />,
      title: "Intelligent Systems",
      desc: "Explore predictive models, core artificial intelligence foundations, and modern machine learning pipelines."
    },
    {
      icon: <FaRocket className="w-5 h-5 text-primary-accent" />,
      title: "Impactful Growth",
      desc: "Contribute to open-source developer spaces, collaborative hackathons, and innovative team projects."
    }
  ];

  return (
    <section id="goals" className="relative py-24 overflow-hidden">
      {/* Decorative Blur Blob */}
      <div className="decor-blob decor-blob-3"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Career Vision
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.div 
          className="p-8 sm:p-10 rounded-3xl glass bg-purple-950/10 border border-purple-500/15 shadow-2xl text-left relative overflow-hidden group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Ambient card background hover glow */}
          <div className="absolute -inset-px bg-gradient-to-r from-primary-accent/5 to-secondary-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <p className="text-base sm:text-lg text-text-muted leading-relaxed font-sans text-center mb-10 relative z-10 italic">
            "I aspire to build a strong foundation in software engineering, artificial intelligence, and data science. My goal is to continuously improve my technical skills, contribute to impactful projects, and grow into a developer capable of creating innovative solutions using intelligent technologies."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {goalItems.map((item, idx) => (
              <motion.div 
                key={idx}
                className="p-5 rounded-2xl bg-[#09051d]/40 dark:bg-[#09051d]/40 border border-purple-500/10 flex flex-col gap-3 hover:-translate-y-1 transition-transform"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className="w-11 h-11 flex items-center justify-center bg-primary-accent/10 rounded-xl text-primary-accent">
                  {item.icon}
                </div>
                <h4 className="font-heading font-bold text-text-main text-base">{item.title}</h4>
                <p className="text-xs text-text-muted leading-relaxed font-sans">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
