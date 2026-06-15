import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaCalendarAlt } from 'react-icons/fa';

interface EducationItem {
  institution: string;
  degree: string;
  specialization?: string;
  period: string;
  status: string;
  details: string[];
  icon: React.ReactNode;
}

export const EducationCertifications: React.FC = () => {
  const educationList: EducationItem[] = [
    {
      institution: 'REVA University, Bangalore',
      degree: 'Bachelor of Technology (B.Tech)',
      specialization: 'Artificial Intelligence and Data Science (AIDS)',
      period: '2025 - Present',
      status: 'Currently Pursuing First Year',
      details: [
        'Mastering computational foundations, matrix mathematics, and programming logic paths.',
        'Learning logic compilation, database management systems, and core systems code.',
        'Participating in college programming groups, code challenges, and collaborative learning guilds.'
      ],
      icon: <FaGraduationCap className="w-5 h-5 text-primary-accent" />
    },
    {
      institution: 'Kala Deevi Public School (KDPS), Delhi',
      degree: 'Senior Secondary Education (High School)',
      period: '2023 - 2025',
      status: 'Completed with Honors',
      details: [
        'Maintained a focus on advanced mathematics, statistics, and computer applications.',
        'Developed logical analytical skills, participating in regional science fairs and mathematical forums.'
      ],
      icon: <FaSchool className="w-5 h-5 text-secondary-accent" />
    }
  ];

  return (
    <section id="education" className="relative py-24 overflow-hidden">
      {/* Decorative Blob */}
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
            Education
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto mt-4 rounded-full"></div>
          <p className="text-text-muted mt-4 font-sans text-sm sm:text-base">
            My academic journey and educational foundations.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative pl-8 border-l border-purple-500/10 flex flex-col gap-10 ml-3 text-left">
          {educationList.map((edu, idx) => (
            <div key={idx} className="relative">
              {/* Timeline circle marker */}
              <motion.div 
                className="absolute -left-[41px] top-6 w-6 h-6 rounded-full bg-[#0b0622] border border-purple-500/30 flex items-center justify-center shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: idx * 0.1 }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary-accent to-secondary-accent" />
              </motion.div>

              {/* Card Container */}
              <motion.div 
                className="p-6 rounded-3xl glass bg-purple-950/10 border border-purple-500/10 shadow-lg hover:border-primary-accent/30 transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-text-main leading-tight">
                      {edu.degree}
                    </h3>
                    {edu.specialization && (
                      <span className="text-sm text-primary-accent font-semibold block mt-1">
                        Specialization: {edu.specialization}
                      </span>
                    )}
                  </div>
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-secondary-accent/15 text-secondary-accent border border-secondary-accent/10 whitespace-nowrap">
                    {edu.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-text-muted font-sans font-medium text-sm mb-4">
                  <span className="text-secondary-accent">{edu.institution}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                </div>

                <ul className="list-disc pl-4 space-y-1.5 text-xs sm:text-sm text-text-muted font-sans leading-relaxed">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
