import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import Contact from './components/home/Contact';
import Footer from './components/layout/Footer';
import portraitImg from './assets/images/portrait.png';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Abderrahmane Benmohamed",
      text: "Un accueil d'une rare élégance et une ponctuality exemplaire. Le cabinet est à la pointe de la technologie, ce qui est très rassurant. On se sent écouté et parfaitement pris en charge dès la première minute.",
    },
    {
      name: "Meriem Ziani",
      text: "J'ai consulté pour un bilan complet. L'approche est holistique et très détaillée. Les explications sont claires, sans jargon médical inutile. On ressort avec un plan d'action précieux pour sa santé.",
    },
    {
      name: "Walid Khedis",
      text: "Le meilleur suivi médical que j'ai pu avoir. Le système de rappel pour les rendez-vous est parfait pour mon emploi du temps chargé. Professionnalisme, expertise et humanité sont au rendez-vous.",
    },
  ];

  return (
    <section id="testimonials" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">[Avis des Patients]</span>
            <h3 className="text-5xl lg:text-7xl font-display font-black mb-8 tracking-tighter">Votre Confiance, <br /> Notre <span className="text-primary-600">Réalisation</span></h3>
            <div className="flex items-center justify-center gap-2 mb-8">
               <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
               </div>
               <span className="font-black text-slate-800 ml-2">4.9 / 5.0</span>
               <span className="text-slate-400 font-bold ml-1">(+500 avis)</span>
            </div>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group bg-white p-12 rounded-[60px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]"
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary-600/30 group-hover:scale-110 transition-transform">
                <Quote size={20} fill="currentColor" />
              </div>
              
              <p className="text-slate-600 font-medium italic mb-10 leading-relaxed text-lg pt-4 relative z-10">"{review.text}"</p>
              
              <div className="flex items-center gap-5 border-t border-slate-50 pt-8 mt-auto">
                <div className="w-16 h-16 bg-slate-100 rounded-3xl overflow-hidden border-2 border-white shadow-sm shrink-0">
                   {/* Avatar placeholder with initials */}
                   <div className="w-full h-full flex items-center justify-center font-black text-primary-200 text-xl bg-primary-50">
                      {review.name.split(' ').map(n => n[0]).join('')}
                   </div>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 tracking-tight text-xl">{review.name}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-primary-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Services Section */}
        <Services />
        
        {/* Unified Expertise & About Section */}
        <section id="about" className="py-32 bg-white relative overflow-hidden">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-center gap-24">
              <div className="flex-1 relative order-2 lg:order-1">
                <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="relative group px-4 lg:px-0"
                >
                  <div className="w-full aspect-[4/5] bg-slate-100 rounded-[80px] overflow-hidden relative shadow-2xl border-[15px] border-white ring-1 ring-slate-100">
                     <img 
                        src={portraitImg} 
                        alt="Dr. (Votre nom) Portrait" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
                     
                     <div className="absolute bottom-10 left-10 right-10 p-8 glass-card border-none bg-white/20 backdrop-blur-2xl">
                        <div className="flex items-center gap-4">
                           <p className="text-white font-black text-5xl">15+</p>
                           <div className="h-10 w-px bg-white/30" />
                           <p className="text-slate-200 text-[10px] font-black uppercase tracking-widest leading-tight">Années<br />d'Expérience</p>
                        </div>
                     </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary-100 rounded-full blur-[100px] -z-10 opacity-60" />
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 border-[10px] border-slate-50 rounded-full -z-10" />
                </motion.div>
              </div>
              
              <div className="flex-1 order-1 lg:order-2">
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                >
                  <span className="text-accent-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">[Section Expertise]</span>
                  <h2 className="text-6xl lg:text-7xl font-display font-black mb-10 tracking-tighter leading-tight">
                    [Titre de <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-primary-600 italic font-light">l'Expertise]</span>
                  </h2>
                  <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12">
                    [Texte de présentation du cabinet médicat et de la vision du Dr. (Votre Nom). Expliquez ici votre philosophie de soin et ce qui vous rend unique.]
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-8 mb-12">
                    {[
                      { title: "[Point Fort 1]", text: "[Détail du point fort médical]" },
                      { title: "[Point Fort 2]", text: "[Détail du point fort technologique]" },
                      { title: "[Point Fort 3]", text: "[Détail du point fort humain]" },
                      { title: "[Point Fort 4]", text: "[Détail du point fort service]" }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                          <CheckCircle2 size={18} />
                        </div>
                        <div>
                          <h5 className="font-black text-slate-900 mb-1">{item.title}</h5>
                          <p className="text-sm text-slate-400 font-medium">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center gap-4 py-5 px-10 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl active:scale-95 group">
                    En savoir plus
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
