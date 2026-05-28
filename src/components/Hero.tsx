"use client";

import { motion } from "framer-motion";
import { ArrowRight, Laptop, Monitor } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-900">
      {/* Background cyber grid & colorful blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" />
      
      {/* Glowing light blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-600/25 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Information */}
        <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex self-center lg:self-start items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-wide uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            Service Autorizat &amp; Rapid în București
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6"
          >
            SERVICE LAPTOP SI{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-pink-500 bg-clip-text text-transparent">
              CALCULATOARE PC
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 font-medium mb-4"
          >
            Vă așteptăm la magazinele noastre din sectoarele 2 și 4.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-400 max-w-2xl text-sm sm:text-base mb-10 leading-relaxed"
          >
            Echipă de profesioniști dedicată reparațiilor hardware și software rapide. 
            Oferim servicii calitative, diagnoză corectă și logistică gratuită 
            prin serviciul specializat de <strong>Pick-Up &amp; Return</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-2xl shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5 text-base"
            >
              Programează o Reparație
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/instalare-windows"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-100 font-bold py-4 px-8 rounded-2xl transition-all hover:-translate-y-0.5 text-base"
            >
              Instalare Windows la Domiciliu
            </Link>
          </motion.div>
        </div>

        {/* Right Column: MacBook Pro Mockup */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
            className="relative w-full max-w-[480px] perspective"
          >
            {/* Screen Container */}
            <div className="relative aspect-[16/10] bg-slate-900 rounded-t-2xl border-4 border-slate-800 p-2 shadow-2xl overflow-hidden flex flex-col justify-center items-center">
              {/* Screen Content */}
              <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-6 text-center select-none">
                {/* Glowing Background Grid inside Screen */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl" />

                {/* SVG Swirl Logo */}
                <div className="relative z-10 mb-4 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 animate-[spin_15s_linear_infinite]"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#swirlGradHero)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="180 60"
                    />
                    <path
                      d="M50 20 C60 20, 70 30, 70 50 C70 70, 50 80, 40 70 C30 60, 30 40, 50 30"
                      stroke="url(#swirlGradHero)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <defs>
                      <linearGradient id="swirlGradHero" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                <h3 className="relative z-10 text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-300 to-pink-400 bg-clip-text text-transparent leading-none">
                  COMPUTER SHOP
                </h3>
                <p className="relative z-10 text-[9px] font-black tracking-widest text-slate-400 uppercase mt-1">
                  and SERVICE
                </p>
                <div className="mt-4 relative z-10 flex gap-2">
                  <span className="text-[10px] bg-slate-800 border border-slate-700 px-2 py-0.5 rounded text-blue-400 font-bold flex items-center gap-1">
                    <Laptop className="w-3 h-3" /> hardware
                  </span>
                  <span className="text-[10px] bg-slate-800 border border-slate-700 px-2 py-0.5 rounded text-purple-400 font-bold flex items-center gap-1">
                    <Monitor className="w-3 h-3" /> software
                  </span>
                </div>
              </div>
              
              {/* Webcam */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-slate-700 rounded-full" />
              
              {/* Ambient reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />
            </div>
            
            {/* MacBook Base Keyboard Area */}
            <div className="relative h-4 bg-slate-700 rounded-b-xl border-t border-slate-600 shadow-2xl flex justify-center">
              {/* Notch */}
              <div className="w-16 h-1 bg-slate-900 rounded-b-md" />
            </div>
            
            {/* MacBook Bottom Base Lips */}
            <div className="w-[94%] mx-auto h-1.5 bg-slate-800 rounded-b-md shadow-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
