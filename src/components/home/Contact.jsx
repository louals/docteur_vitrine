import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
           <div className="flex-1">
              <span className="text-primary-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">[Contactez-nous]</span>
              <h2 className="text-5xl lg:text-7xl font-display font-black tracking-tighter leading-tight mb-8">
                Discutons de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 italic font-light">Votre Santé</span>
              </h2>
           </div>
           <div className="flex-1 lg:pl-12 border-l-2 border-slate-100">
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                 [Message d'invitation au contact. Expliquez ici que vous êtes disponible pour toute question ou demande de rendez-vous spécifique.]
              </p>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 bg-slate-50 rounded-[60px] p-4 p-8 lg:p-12 border border-slate-100">
          {/* Detailed Info Card */}
          <div className="lg:w-1/3 bg-slate-900 rounded-[50px] p-10 text-white relative overflow-hidden flex flex-col justify-between min-h-[500px]">
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
             
             <div>
                <h3 className="text-3xl font-black mb-8 tracking-tight">[Titre Coordonnées]</h3>
                <p className="text-slate-400 font-medium mb-12">
                   [Bref texte explicatif sur la localisation ou les moyens de contact.]
                </p>
                
                <ul className="space-y-10 relative z-10">
                  <li className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center backdrop-blur-md group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] mb-1">[Téléphone]</p>
                      <p className="font-black text-xl tracking-tight">+213 5 XX XX XX XX</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center backdrop-blur-md group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] mb-1">[Email]</p>
                      <p className="font-black text-xl tracking-tight">contact@votre-cabinet.dz</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center backdrop-blur-md group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] mb-1">[Localisation]</p>
                      <p className="font-black text-xl tracking-tight">Alger, Algérie</p>
                    </div>
                  </li>
                </ul>
             </div>

             <div className="mt-12 p-6 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                   <Clock className="text-primary-400" size={18} />
                   <span className="text-xs font-black uppercase tracking-widest">[Horaires d'ouverture]</span>
                </div>
                <p className="text-sm font-medium text-slate-300">Lun - Ven : 09:00 - 19:00</p>
             </div>
          </div>
          
          {/* Modern Form Section */}
          <div className="lg:w-2/3 p-4 lg:p-12">
            <div className="mb-12">
              <h4 className="text-3xl font-black tracking-tight mb-4">[Titre du Formulaire]</h4>
              <p className="text-slate-500 font-medium">[Sous-titre invitant à remplir les champs ci-dessous.]</p>
            </div>
            
            <form className="grid md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">[Champ: Nom Complet]</label>
                <input 
                  type="text" 
                  placeholder="Amine Belkacem" 
                  className="w-full px-8 py-5 rounded-[24px] bg-white border border-slate-100 focus:border-primary-500 focus:shadow-xl focus:shadow-primary-600/5 transition-all outline-none font-bold text-slate-800"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">[Champ: Email]</label>
                <input 
                  type="email" 
                  placeholder="amine@email.dz" 
                  className="w-full px-8 py-5 rounded-[24px] bg-white border border-slate-100 focus:border-primary-500 focus:shadow-xl focus:shadow-primary-600/5 transition-all outline-none font-bold text-slate-800"
                />
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">[Champ: Sujet]</label>
                <select className="w-full px-8 py-5 rounded-[24px] bg-white border border-slate-100 focus:border-primary-500 transition-all outline-none font-bold text-slate-800 appearance-none">
                   <option>[Option de Sujet 1]</option>
                   <option>[Option de Sujet 2]</option>
                   <option>[Option de Sujet 3]</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">[Champ: Message]</label>
                <textarea 
                  rows={6}
                  placeholder="Écrivez votre message ici..." 
                  className="w-full px-8 py-5 rounded-[32px] bg-white border border-slate-100 focus:border-primary-500 focus:shadow-xl focus:shadow-primary-600/5 transition-all outline-none font-bold text-slate-800 resize-none"
                />
              </div>
              <div className="md:col-span-2 pt-6">
                <button className="relative group overflow-hidden bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4 w-full md:w-auto">
                  <span className="relative z-10 flex items-center gap-3">
                     [Envoyer le Message]
                     <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                  </span>
                  <div className="absolute inset-0 bg-primary-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
