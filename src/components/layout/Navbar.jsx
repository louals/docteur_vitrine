import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Stethoscope, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
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
    { name: 'Accueil', href: '#' },
    { name: 'Spécialités', href: '#specialties' },
    { name: 'À propos', href: '#about' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-white/90 backdrop-blur-xl shadow-premium border-b border-slate-100' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary-600/20 group-hover:rotate-12 transition-transform duration-300">
            <Stethoscope size={26} />
          </div>
          <span className="text-2xl font-display font-black tracking-tight text-slate-900">
            Dr. <span className="text-primary-600">(Votre nom)</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 px-8 py-3 bg-slate-50/50 rounded-full border border-slate-100/50 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-bold text-slate-500 hover:text-primary-600 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a 
            href="#contact" 
            className="group relative overflow-hidden bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl hover:shadow-primary-600/20 active:scale-95 flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              Prendre RDV
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-primary-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-12 h-12 flex items-center justify-center bg-slate-900 text-white rounded-xl shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 overflow-hidden md:hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-xl font-bold text-slate-800 hover:text-primary-600 flex justify-between items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <ArrowUpRight size={20} className="opacity-30" />
                </a>
              ))}
              <hr className="border-slate-100" />
              <div className="flex flex-col gap-4">
                <button className="bg-primary-600 text-white w-full py-5 rounded-2xl font-bold shadow-lg shadow-primary-600/20 flex items-center justify-center gap-3">
                   <Phone size={20} />
                   Appeler maintenant
                </button>
                <p className="text-center text-slate-400 text-sm font-medium italic">Disponibilité immédiate • Alger, Algérie</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
