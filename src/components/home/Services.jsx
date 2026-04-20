import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, User, Microscope, Activity, Star } from 'lucide-react';

const placeholderServices = [
  {
    title: "[Titre de la Spécialité 1]",
    desc: "[Description détaillée de votre premier service médical. Expliquez ici l'expertise et l'approche spécifique pour cette spécialité.]",
    icon: <User className="text-primary-500" size={32} />,
    color: "bg-primary-50",
    accent: "group-hover:bg-primary-600",
  },
  {
    title: "[Titre de la Spécialité 2]",
    desc: "[Description détaillée de votre deuxième service médical. Mettez en avant les bénéfices pour le patient et les technologies utilisées.]",
    icon: <Heart className="text-rose-500" size={32} />,
    color: "bg-rose-50",
    accent: "group-hover:bg-rose-600",
  },
  {
    title: "[Titre de la Spécialité 3]",
    desc: "[Description détaillée de votre troisième service médical. Listez les pathologies traitées ou les types de consultations proposées.]",
    icon: <Brain className="text-indigo-500" size={32} />,
    color: "bg-indigo-50",
    accent: "group-hover:bg-indigo-600",
  },
  {
    title: "[Titre de la Spécialité 4]",
    desc: "[Description détaillée de votre quatrième service médical. Précisez si une préparation spécifique est nécessaire pour ce service.]",
    icon: <Activity className="text-emerald-500" size={32} />,
    color: "bg-emerald-50",
    accent: "group-hover:bg-emerald-600",
  },
  {
    title: "[Titre de la Spécialité 5]",
    desc: "[Description détaillée de votre cinquième service médical. Informez sur la durée moyenne de la consultation ou le suivi proposé.]",
    icon: <Microscope className="text-amber-500" size={32} />,
    color: "bg-amber-50",
    accent: "group-hover:bg-amber-600",
  },
  {
    title: "[Titre de la Spécialité 6]",
    desc: "[Description détaillée de votre sixième service médical. Ajoutez ici toute information complémentaire utile à vos patients.]",
    icon: <Star className="text-sky-500" size={32} />,
    color: "bg-sky-50",
    accent: "group-hover:bg-sky-600",
  },
];

const Services = () => {
  return (
    <section id="specialties" className="py-32 bg-white relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50/30 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-50/20 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-600 animate-pulse" />
              [Label Section]
            </span>
            <h2 className="text-5xl lg:text-7xl font-display font-black leading-tight tracking-tighter">
              [Titre des <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Spécialités]</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-500 font-medium max-w-sm border-l-2 border-slate-100 pl-8"
          >
            [Brève introduction décrivant votre approche globale et l'excellence de vos soins médicaux.]
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {placeholderServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-12 rounded-[50px] bg-slate-50 border border-slate-100/40 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] transition-all duration-700"
            >
              {/* Invisible shape for better hover targets */}
              <div className="absolute inset-0 z-0" />
              
              {/* Corner Accent Overlay */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-tr-[50px] rounded-bl-full opacity-0 group-hover:opacity-10 transition-all duration-700 pointer-events-none ${service.accent}`} />
              
              <div className={`relative z-10 w-24 h-24 ${service.color} rounded-[32px] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 shadow-sm shadow-black/5`}>
                {service.icon}
              </div>
              
              <h4 className="relative z-10 text-2xl font-black mb-6 group-hover:text-primary-600 transition-colors duration-500 tracking-tight">
                {service.title}
              </h4>
              
              <p className="relative z-10 text-slate-500 leading-relaxed font-medium mb-10 text-base">
                {service.desc}
              </p>
              
              <div className="relative z-10 flex items-center gap-4 group/link cursor-pointer">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-primary-600 transition-colors">Explorer</span>
                <div className="h-[2px] w-8 bg-slate-200 group-hover:bg-primary-600 group-hover:w-16 transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Services;
