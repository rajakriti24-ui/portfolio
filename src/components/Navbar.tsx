import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-white/45 dark:bg-slate-950/45 backdrop-blur-md border-b border-white/20 dark:border-purple-900/10 shadow-lg' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a 
          href="#home" 
          className="font-heading text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-purple-500 dark:from-purple-400 dark:via-pink-300 dark:to-purple-300 bg-clip-text text-transparent hover:scale-102 transition-transform"
        >
          Akriti Raj<span className="text-pink-500">.</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-medium text-text-muted hover:text-primary-accent transition-colors duration-200 relative py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Controls (Theme switch + Hamburger) */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="w-10 h-10 flex items-center justify-center rounded-full glass border border-white/20 dark:border-purple-950/30 text-text-main hover:text-secondary-accent dark:hover:text-secondary-accent hover:scale-105 hover:rotate-12 transition-all duration-300 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-purple-700 fill-purple-700/20" />
            ) : (
              <Sun className="w-5 h-5 text-pink-300" />
            )}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full glass border border-white/20 dark:border-purple-950/30 text-text-main hover:text-primary-accent hover:scale-105 transition-all duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`absolute top-20 left-6 right-6 p-6 rounded-2xl glass border border-white/20 dark:border-purple-900/10 flex flex-col gap-4 shadow-xl md:hidden transition-all duration-300 origin-top z-40 ${
          isOpen 
            ? 'opacity-100 scale-100 visible' 
            : 'opacity-0 scale-95 invisible pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="font-heading text-lg font-semibold text-text-main hover:text-primary-accent py-2 px-3 rounded-lg hover:bg-white/20 dark:hover:bg-slate-900/40 hover:pl-6 transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};
