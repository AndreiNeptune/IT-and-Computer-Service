"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function WindowsHome() {
  const standardPackage = [
    "Instalarea sistemului de operare Windows (10, 11, etc.) direct la domiciliu/sediu.",
    "Instalarea și configurarea tuturor driverelor necesare (placă video, sunet, rețea, etc.).",
    "Instalarea programelor esențiale (browser web, arhivator, cititor PDF, media player).",
    "Instalarea unui program antivirus puternic și configurat corect.",
    "Optimizarea inițială a sistemului pentru performanță maximă și securitate ridicată.",
    "Testare finală de performanță și stabilitate hardware/software."
  ];

  const extraServices = [
    {
      title: "Backup și Recuperare Date",
      desc: "Niciun fișier pierdut! Ne asigurăm că toate documentele, pozele și fișierele importante sunt salvate în siguranță înainte de reinstalare."
    },
    {
      title: "Conturi & Setări Personalizate",
      desc: "Configurăm conturile de utilizator, setările de securitate și interfața exact așa cum îți dorești pentru o utilizare confortabilă."
    },
    {
      title: "Asistență Aplicații Specifice",
      desc: "Instalăm și configurăm suite de birou (ex. Microsoft Office) sau alte programe specifice necesare activității tale zilnice."
    },
    {
      title: "Sesiune Q&A de Utilizare",
      desc: "O scurtă sesiune de întrebări și răspunsuri pentru a-ți arăta funcțiile noi și cum să îți menții sistemul rapid pe termen lung."
    }
  ];

  return (
    <section id="windows-home" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300 border-y border-slate-200 dark:border-slate-800">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Value Proposition */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-blue-500/15 border border-blue-500/30 text-blue-400 font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Serviciu la Domiciliu / Sediu
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
            Instalare Windows Rapidă și Sigură
          </h2>
          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-bold mb-4">
            Orice Versiune Windows, Pachet Complet. Redă viață PC-ului tău!
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            PC-ul tău merge lent? Ai viruși sau erori frecvente? Nu mai pierde timpul și nu te deplasa la service! Soluția profesională vine direct la tine acasă sau la birou, la un apel distanță.
          </p>
        </div>

        {/* Core Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Standard Package (Card format) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative"
          >
            <div className="absolute top-4 right-4 text-blue-500">
              <Zap className="w-8 h-8 opacity-20" />
            </div>
            
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                Pachetul Standard Complet
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider font-bold">
                Tot ce ai nevoie pentru un sistem impecabil
              </p>
              
              <ul className="space-y-4">
                {standardPackage.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="bg-blue-500/20 text-blue-400 p-1 rounded-lg shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </span>
                    <span className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Tarif Standard</p>
                <p className="text-2xl font-black text-slate-900 dark:text-white">de la 200 RON</p>
              </div>
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-md shadow-blue-500/20"
              >
                Programează Vizită
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Included Extra Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between gap-6"
          >
            <div className="bg-slate-100/80 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                Servicii Suplimentare INCLUSE
              </h3>
              <p className="text-xs text-blue-400 mb-6 uppercase tracking-wider font-bold">
                Fără costuri suplimentare ascunse
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {extraServices.map((service, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {service.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Prompt warning card */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-200 dark:border-blue-900/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shadow-lg">
              <div className="bg-blue-500/10 p-3.5 rounded-2xl text-blue-400 shrink-0 border border-blue-500/20">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">Securitate și Stabilitate Garantate</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Folosim doar kit-uri oficiale direct de la Microsoft și aplicăm cele mai riguroase setări de securitate și optimizare specifice utilizării tale.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
