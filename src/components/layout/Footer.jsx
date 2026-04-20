import React from 'react';
import { Stethoscope, Mail, Phone, MapPin, Instagram, Linkedin, Facebook, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-32 pb-12 relative overflow-hidden">
      {/* Decorative Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand & Identity */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-10 group cursor-pointer">
              <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-primary-600/20 group-hover:rotate-12 transition-transform">
                <Stethoscope size={28} />
              </div>
              <span className="text-2xl font-display font-black tracking-tight">
                Dr. <span className="text-primary-400">[(Nom)]</span>
              </span>
            </div>
            <p className="text-slate-400 font-medium mb-10 leading-relaxed text-lg">
              [Texte de présentation court pour le bas de page. Décrivez ici votre vision en une ou deux phrases.]
            </p>
            <div className="flex items-center gap-5">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary-600 hover:-translate-y-1 transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-10 text-primary-400 leading-none">[Navigation]</h4>
            <ul className="flex flex-col gap-6 text-slate-300 font-bold">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                 <div className="w-1.5 h-[2px] bg-primary-600 opacity-0 group-hover:opacity-100 transition-all" />
                 Accueil</a>
              </li>
              <li><a href="#specialties" className="hover:text-white transition-colors flex items-center gap-2 group">
                 <div className="w-1.5 h-[2px] bg-primary-600 opacity-0 group-hover:opacity-100 transition-all" />
                 Spécialités</a>
              </li>
              <li><a href="#about" className="hover:text-white transition-colors flex items-center gap-2 group">
                 <div className="w-1.5 h-[2px] bg-primary-600 opacity-0 group-hover:opacity-100 transition-all" />
                 À propos</a>
              </li>
              <li><a href="#contact" className="hover:text-white transition-colors flex items-center gap-2 group">
                 <div className="w-1.5 h-[2px] bg-primary-600 opacity-0 group-hover:opacity-100 transition-all" />
                 Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-10 text-primary-400 leading-none">[Contact]</h4>
            <ul className="flex flex-col gap-8 text-slate-400 font-medium">
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="mt-1 w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform">
                   <Phone size={18} />
                </div>
                <div>
                   <p className="text-[10px] uppercase font-black tracking-widest text-slate-600 mb-1">[Téléphone]</p>
                   <p className="text-white font-bold tracking-tight">+213 5 XX XX XX XX</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="mt-1 w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform">
                   <Mail size={18} />
                </div>
                <div>
                   <p className="text-[10px] uppercase font-black tracking-widest text-slate-600 mb-1">[Email]</p>
                   <p className="text-white font-bold tracking-tight">cabinet@contact.dz</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="mt-1 w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform">
                   <MapPin size={18} />
                </div>
                <div>
                   <p className="text-[10px] uppercase font-black tracking-widest text-slate-600 mb-1">[Localisation]</p>
                   <p className="text-white font-bold tracking-tight">Alger, Algérie</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter / Action */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-10 text-primary-400 leading-none">[Newsletter]</h4>
            <p className="text-sm text-slate-400 font-medium mb-8 leading-relaxed">
               [Inscrivez-vous pour recevoir les dernières actualités médicales et conseils santé.]
            </p>
            <div className="relative">
               <input 
                  type="email" 
                  placeholder="votre@email.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-primary-600 transition-colors font-bold text-sm"
               />
               <button className="absolute right-2 top-2 bottom-2 bg-primary-600 text-white px-4 rounded-xl hover:bg-primary-500 transition-colors">
                  <ArrowUp size={20} className="rotate-45" />
               </button>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
             <p className="text-slate-500 text-sm font-bold">© 2026 Cabinet Médical Dr. [(Votre nom)]. [Tous droits réservés].</p>
          </div>
          <div className="flex items-center gap-10">
            <a href="#" className="text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors">Mentions Légales</a>
            <a href="#" className="text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors">Confidentialité</a>
            <button 
               onClick={scrollToTop}
               className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"
            >
               <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
