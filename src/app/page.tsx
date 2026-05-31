import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Link from "next/link";
import { Laptop, Monitor, MonitorUp } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Grid (Replacement for ServicesTabs & WindowsHome) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
              Alege Serviciul Dorit
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Cum te putem ajuta astăzi?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              Selectează categoria de care ai nevoie pentru a vedea lista completă de servicii și prețuri.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            
            {/* Windows Install Card - TOP CHOICE */}
            <Link href="/instalare-windows" className="relative group block bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-blue-500/5 dark:from-pink-500/10 dark:via-purple-500/10 dark:to-blue-500/10 border-2 border-pink-500/30 dark:border-pink-500/40 rounded-3xl p-6 sm:p-8 hover:border-pink-500 hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)] transition-all overflow-hidden">
               <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] sm:text-xs font-black uppercase tracking-wider py-1.5 px-4 rounded-bl-xl rounded-tr-2xl sm:rounded-tr-3xl shadow-lg">Top Choice</div>
               
               <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left mt-2 sm:mt-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-400 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    <MonitorUp className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 transition-all">
                      Instalare Windows la Domiciliu
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-4">
                      Instalare profesională OS la domiciliu, incluzând drivere, antivirus, optimizare și back-up date. Ne deplasăm noi la tine!
                    </p>
                    <span className="inline-flex items-center gap-2 font-bold text-white bg-slate-900 dark:bg-pink-600 hover:bg-slate-800 dark:hover:bg-pink-500 px-5 py-2.5 rounded-xl text-sm group-hover:translate-x-2 transition-transform shadow-md">
                      Detalii și programare &rarr;
                    </span>
                  </div>
               </div>
            </Link>

            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              {/* Laptop Services Card */}
              <Link href="/reparatii-laptop" className="group flex flex-col items-center text-center sm:block sm:text-left bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 hover:border-blue-500/50 hover:bg-white dark:hover:bg-slate-900 shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Laptop className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h4 className="text-sm sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Reparații<br className="sm:hidden" /> Laptop
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-[10px] sm:text-sm leading-relaxed mb-3 sm:mb-6 line-clamp-2 sm:line-clamp-none px-1">
                  Diagnoză rapidă, curățare praf, upgrade SSD și reparații hardware complexe.
                </p>
                <span className="font-bold text-blue-600 dark:text-blue-400 text-[10px] sm:text-sm items-center gap-1 group-hover:translate-x-1 transition-transform flex">
                  Vezi detalii &rarr;
                </span>
              </Link>

              {/* PC Services Card */}
              <Link href="/reparatii-calculatoare" className="group flex flex-col items-center text-center sm:block sm:text-left bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 hover:border-indigo-500/50 hover:bg-white dark:hover:bg-slate-900 shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Monitor className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h4 className="text-sm sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Reparații<br className="sm:hidden" /> PC
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-[10px] sm:text-sm leading-relaxed mb-3 sm:mb-6 line-clamp-2 sm:line-clamp-none px-1">
                  Asamblare, reparații surse, plăci video și soluții avansate de răcire PC.
                </p>
                <span className="font-bold text-indigo-600 dark:text-indigo-400 text-[10px] sm:text-sm items-center gap-1 group-hover:translate-x-1 transition-transform flex">
                  Vezi detalii &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Carousel */}
      <Reviews />
    </>
  );
}

