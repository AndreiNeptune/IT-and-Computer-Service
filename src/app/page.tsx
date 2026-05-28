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

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Laptop Services Card */}
            <Link href="/reparatii-laptop" className="group block bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 hover:bg-white dark:hover:bg-slate-900 shadow-sm hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Laptop className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Reparații Laptop
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Curățare praf, înlocuire display, reparații placă de bază, upgrade SSD și memorie RAM.
              </p>
              <span className="font-bold text-blue-600 dark:text-blue-400 text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Vezi lista de servicii &rarr;
              </span>
            </Link>

            {/* PC Services Card */}
            <Link href="/reparatii-calculatoare" className="group block bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:border-indigo-500/50 hover:bg-white dark:hover:bg-slate-900 shadow-sm hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Reparații Calculatoare
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Asamblare PC, diagnosticare hardware, reparații surse, plăci video și soluții răcire.
              </p>
              <span className="font-bold text-indigo-600 dark:text-indigo-400 text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Vezi lista de servicii &rarr;
              </span>
            </Link>

            {/* Windows Install Card */}
            <Link href="/instalare-windows" className="group block bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:border-pink-500/50 hover:bg-white dark:hover:bg-slate-900 shadow-sm hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MonitorUp className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                Instalare Windows
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Instalare OS la domiciliu, drivere, antivirus, optimizare și back-up date incluse.
              </p>
              <span className="font-bold text-pink-600 dark:text-pink-400 text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Detalii și programare &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Carousel */}
      <Reviews />
    </>
  );
}

