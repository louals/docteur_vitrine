import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, Award, Play } from 'lucide-react';
import heroImg from '../../assets/images/hero.jpg';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background blobs & patterns */}
      <div className="absolute top-0 right-0 -z-10 w-[60%] h-full bg-slate-50 rounded-l-[120px] hidden lg:block" />
      <div className="absolute top-1/4 left-0 -z-10 w-96 h-96 bg-primary-100/30 blur-[100px] rounded-full" />

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              

              <h1 className="text-6xl lg:text-8xl font-extrabold leading-[1.1] mb-8 tracking-tight">
                Votre Santé, <br />
                <span className="text-primary-600 italic font-light">Notre </span>
                <span className="text-primary-900 italic font-light">Priorité</span>
              </h1>

              <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Le Dr. (Votre nom) vous accueille dans un cabinet nouvelle génération. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <button className="btn-primary flex items-center gap-3 group w-full sm:w-auto justify-center px-10 py-5 text-lg shadow-xl shadow-primary-600/20">
                  Prendre Rendez-vous
                  <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
                </button>
               
              </div>

              {/* Trust Indicators */}
              <div className="mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-10">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="text-emerald-500" size={24} />
                    <span className="font-extrabold text-slate-800">Sécurité Totale</span>
                  </div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Normes Européennes</p>
                </div>
                <div className="w-px h-10 bg-slate-200 hidden sm:block" />
                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="text-amber-500" size={24} />
                    <span className="font-extrabold text-slate-800">Certifié Expert</span>
                  </div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Ordre des Médecins</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Image / Composition */}
          <div className="flex-1 relative w-full max-w-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10"
            >
              {/* Main Image Frame */}
              <div className="relative rounded-[60px] overflow-hidden shadow-2xl border-[12px] border-white group">
                <img
                  src={heroImg}
                  alt="Dr. (Votre nom) Cabinet"
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              

              
            </motion.div>

            {/* Background design elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent-100 rounded-full blur-3xl -z-10 opacity-60" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border-[40px] border-slate-50 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
