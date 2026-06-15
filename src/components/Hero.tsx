import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload } from 'react-icons/fa';
import { FiMail, FiSend } from 'react-icons/fi';
import avatarImg from '../assets/avatar.png';

export const Hero: React.FC = () => {
  const words = [
    'AI & Data Science Student',
    'Aspiring Software Developer',
    'Problem Solver',
    'Future AI Engineer'
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  // Typing effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2500); // Wait 2.5s at full text
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80); // Speed: erasing is faster

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index, words]);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/rajakriti24-ui',
      icon: <FaGithub className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/akriti-raj-8a6794373/',
      icon: <FaLinkedin className="w-5 h-5" />
    },
    {
      name: 'Email',
      url: 'mailto:rajakriti24@gmail.com',
      icon: <FiMail className="w-5 h-5" />
    }
  ];

  const handleDownloadResume = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Downloading Resume... Akriti Raj's resume matches top-tier AI & DS requirements!");
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Ambient background glow blobs */}
      <div className="decor-blob decor-blob-1"></div>
      <div className="decor-blob decor-blob-2"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="flex flex-col gap-6 text-left items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-full glass border border-purple-500/10 text-primary-accent bg-purple-950/20 backdrop-blur-md glow-pink-text"
            >
              <span>👋 Welcome to my Portfolio Space</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-main leading-tight font-heading"
            >
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">Akriti Raj</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="h-10 font-mono text-xl sm:text-2xl text-secondary-accent font-semibold tracking-wide flex items-center"
            >
              <span>{words[index].substring(0, subIndex)}</span>
              <span className={`inline-block w-[3px] h-6 bg-secondary-accent ml-1 ${blink ? 'opacity-0' : 'opacity-100'}`}></span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-text-muted max-w-xl leading-relaxed font-sans"
            >
              A first-year B.Tech student passionate about programming fundamentals, logical thinking, artificial intelligence, and continuous learning.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-2 w-full sm:w-auto"
            >
              <a 
                href="#projects" 
                className="px-6 py-3.5 rounded-xl font-bold bg-gradient-to-r from-primary-accent to-secondary-accent text-white shadow-md hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base w-full sm:w-auto"
              >
                View Projects
                <FaArrowRight className="w-3.5 h-3.5" />
              </a>
              
              <a 
                href="#contact" 
                className="px-6 py-3.5 rounded-xl font-bold glass border border-purple-500/10 text-text-main hover:-translate-y-0.5 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base w-full sm:w-auto"
              >
                Contact Me
                <FiSend className="w-3.5 h-3.5" />
              </a>

              <a 
                href="#home" 
                onClick={handleDownloadResume}
                className="px-6 py-3.5 rounded-xl font-bold glass border border-purple-500/10 text-text-main hover:-translate-y-0.5 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base w-full sm:w-auto"
              >
                Download Resume
                <FaDownload className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* Social Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-4 mt-6"
            >
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-12 h-12 flex items-center justify-center rounded-xl glass border border-purple-500/10 text-text-muted hover:text-primary-accent hover:border-primary-accent hover:-translate-y-0.5 transition-all duration-300 relative group cursor-pointer" 
                  aria-label={link.name}
                >
                  {link.icon}
                  <span className="absolute -bottom-10 bg-surface-solid border border-purple-500/10 text-text-main text-xs font-semibold px-2.5 py-1.5 rounded shadow-sm opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 whitespace-nowrap z-20">
                    {link.name}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="flex justify-center relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] animate-float"
            >
              {/* Dashed outer rings */}
              <div className="absolute inset-[-10px] rounded-full border-2 border-dashed border-secondary-accent/20 animate-spin-slow pointer-events-none"></div>
              <div className="absolute inset-[-25px] rounded-full border-2 border-dashed border-primary-accent/10 animate-spin-slow-reverse pointer-events-none"></div>
              
              {/* Profile Image Frame */}
              <div className="w-full h-full rounded-full p-2.5 glass border border-purple-500/10 shadow-2xl overflow-hidden">
                <img 
                  src={avatarImg} 
                  alt="Akriti Raj Portrait" 
                  className="w-full h-full object-cover rounded-full bg-gradient-to-tr from-purple-900/20 to-indigo-900/20" 
                />
              </div>

              {/* Floating TensorFlow Card */}
              <div className="absolute top-[15%] -left-[10%] flex items-center gap-3 px-4 py-2.5 rounded-2xl glass border border-purple-500/10 shadow-lg animate-float-delayed text-left whitespace-nowrap bg-[#0b0622]/60 backdrop-blur-md">
                <span className="text-xl">🤖</span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-text-main">TensorFlow</h4>
                  <p className="text-[10px] text-text-muted">Deep Learning</p>
                </div>
              </div>

              {/* Floating Analytics Card */}
              <div className="absolute bottom-[15%] -right-[10%] flex items-center gap-3 px-4 py-2.5 rounded-2xl glass border border-purple-500/10 shadow-lg animate-float text-left whitespace-nowrap bg-[#0b0622]/60 backdrop-blur-md">
                <span className="text-xl">📊</span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-text-main">Analytics</h4>
                  <p className="text-[10px] text-text-muted">Pandas & SQL</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-xs cursor-pointer z-10"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-mono opacity-80 uppercase tracking-widest text-[9px]">Scroll Down</span>
        <div className="w-5 h-9 border-2 border-purple-500/25 rounded-full flex justify-center p-1.5">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1 bg-primary-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
