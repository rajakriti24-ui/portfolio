import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <FaEnvelope className="w-5 h-5 text-primary-accent" />,
      label: 'Email',
      value: 'rajakriti24@gmail.com',
      href: 'mailto:rajakriti24@gmail.com'
    },
    {
      icon: <FaPhoneAlt className="w-4 h-4 text-secondary-accent" />,
      label: 'Phone',
      value: '+91 8388859981',
      href: 'tel:+918388859981'
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5 text-primary-accent" />,
      label: 'Location',
      value: 'Bangalore, India',
      href: null
    }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/rajakriti24-ui', icon: <FaGithub className="w-5 h-5" /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/akriti-raj-8a6794373/', icon: <FaLinkedin className="w-5 h-5" /> },
    { name: 'Instagram', url: 'https://instagram.com/_akritiiiiii._', icon: <FaInstagram className="w-5 h-5" /> }
  ];

  return (
    <section id="contact" className="relative py-24 pb-12 overflow-hidden">
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
            Get In Touch
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto mt-4 rounded-full"></div>
          <p className="text-text-muted mt-4 font-sans text-sm sm:text-base max-w-xl mx-auto">
            Have an internship opportunity, placement project, or want to discuss AI and machine learning? Send a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-12 items-stretch">
          
          {/* Info Card Column */}
          <motion.div 
            className="p-8 rounded-2xl glass bg-purple-950/10 border border-purple-500/10 shadow-lg text-left flex flex-col gap-8 justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-2xl font-bold text-primary-accent">
                Let's Collaborate
              </h3>
              <p className="text-text-muted leading-relaxed font-sans text-sm sm:text-base">
                I am looking for internship options and coding collaborations. Feel free to contact me using the social links or via the email form.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {contactDetails.map((detail, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  <div className="w-11 h-11 bg-primary-accent/5 border border-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] text-text-muted font-semibold uppercase tracking-wider mb-0.5">
                      {detail.label}
                    </h4>
                    {detail.href ? (
                      <a href={detail.href} className="text-sm sm:text-base font-bold text-text-main hover:text-secondary-accent transition-colors flex items-center gap-1.5">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base font-bold text-text-main font-sans">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-purple-500/10 flex flex-col gap-4">
              <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider">
                Follow My Workspace
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-11 h-11 flex items-center justify-center rounded-xl glass border border-purple-500/10 text-text-muted hover:text-primary-accent hover:border-primary-accent hover:-translate-y-0.5 transition-all duration-300 relative group cursor-pointer"
                    aria-label={social.name}
                  >
                    {social.icon}
                    <span className="absolute -bottom-10 bg-surface-solid border border-purple-500/10 text-text-main text-xs font-semibold px-2.5 py-1.5 rounded shadow-sm opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 whitespace-nowrap z-20">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            className="p-8 rounded-2xl glass bg-purple-950/10 border border-purple-500/10 shadow-lg text-left justify-center flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center gap-5 py-16 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#0b0622] text-primary-accent flex items-center justify-center text-3xl border border-primary-accent/20">
                  ✓
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-text-main mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-text-muted font-sans text-sm max-w-xs mx-auto">
                    Thank you for connecting! Akriti Raj will respond to your inquiry shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-text-main">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/5 text-text-main placeholder-text-muted/30 focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/15 outline-none transition-all duration-300 font-sans text-sm ${
                      errors.name ? 'border-pink-500/80 focus:ring-pink-500/20' : 'border-purple-500/10'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-[11px] text-pink-500 font-semibold">{errors.name}</span>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-text-main">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/5 text-text-main placeholder-text-muted/30 focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/15 outline-none transition-all duration-300 font-sans text-sm ${
                      errors.email ? 'border-pink-500/80 focus:ring-pink-500/20' : 'border-purple-500/10'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-[11px] text-pink-500 font-semibold">{errors.email}</span>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-sm font-semibold text-text-main">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/5 text-text-main placeholder-text-muted/30 focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/15 outline-none transition-all duration-300 font-sans text-sm ${
                      errors.subject ? 'border-pink-500/80 focus:ring-pink-500/20' : 'border-purple-500/10'
                    }`}
                    placeholder="Collaboration Inquiry"
                  />
                  {errors.subject && <span className="text-[11px] text-pink-500 font-semibold">{errors.subject}</span>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-text-main">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/5 text-text-main placeholder-text-muted/30 focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/15 outline-none transition-all duration-300 font-sans text-sm resize-none ${
                      errors.message ? 'border-pink-500/80 focus:ring-pink-500/20' : 'border-purple-500/10'
                    }`}
                    placeholder="Hi Akriti, I would love to connect about..."
                  ></textarea>
                  {errors.message && <span className="text-[11px] text-pink-500 font-semibold">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className="w-full mt-2 py-3.5 rounded-xl font-bold bg-gradient-to-r from-primary-accent to-secondary-accent text-white hover:brightness-105 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base font-sans"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <FiSend className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-purple-500/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Akriti Raj. All rights reserved.</p>
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <a 
                key={idx} 
                href={social.url} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-primary-accent transition-colors font-semibold"
              >
                {social.name}
              </a>
            ))}
          </div>
          <p className="flex items-center gap-1 font-sans">
            Designed and Developed with ❤️
          </p>
        </footer>
      </div>
    </section>
  );
};
