import { Metadata } from "next";
import { servicesData } from "@/data/services";
import { Laptop } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reparații Laptop București | Service Profesional",
  description: "Servicii profesionale de reparații laptop în București. Curățare praf, înlocuire display, reparații placă de bază, upgrade SSD și memorie RAM.",
};

export default function ReparatiiLaptopPage() {
  const laptopServices = servicesData.filter((s) => s.category === "laptop");

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Laptop className="w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Reparații Laptop
          </h1>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            Alege serviciul de care ai nevoie din lista de mai jos. Oferim garanție pentru toate reparațiile efectuate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {laptopServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-900 rounded-xl p-5 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:bg-white dark:hover:bg-slate-900 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 text-base">
                  {service.name}
                </h4>
                {service.description && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                )}
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-900/50 flex justify-between items-center text-xs font-bold text-blue-600 dark:text-blue-400">
                <span>Garanție Inclusă</span>
                <Link href="/contact" className="hover:underline flex items-center gap-1">
                  Cere Preț &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
