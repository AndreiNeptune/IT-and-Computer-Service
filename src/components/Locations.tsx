"use client";

import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export default function Locations() {
  const locations = [
    {
      sector: "Sector 2",
      title: "Magazin & Service Sector 2",
      address: "Bulevardul Chișinău nr. 12, București",
      phones: ["0726 141 301", "0766 093 309"],
      schedule: "Luni – Vineri: 9:00 – 17:30",
      weekend: "Sâmbătă – Duminică: Închis",
      mapsUrl: "https://maps.google.com/?q=Bulevardul+Chisinau+12+Bucuresti",
    },
    {
      sector: "Sector 4",
      title: "Magazin & Service Sector 4",
      address: "Bd. C-tin Brâncoveanu nr. 15, Bl. B17, Sc. 2, Apt. 30, interfon 30, parter, București",
      phones: ["0726 116 356"],
      schedule: "Luni – Vineri: 9:00 – 17:30",
      weekend: "Sâmbătă – Duminică: Închis",
      mapsUrl: "https://maps.google.com/?q=Bulevardul+Constantin+Brancoveanu+15+Bucuresti",
    },
  ];

  return (
    <section id="locations" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            Locațiile Noastre
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Vă așteptăm în magazinele fizice
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Oferim reparații laptop și calculatoare la cel mai înalt nivel profesional în 2 locații complet echipate din București, acoperind zonele Sector 2 și Sector 4.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white dark:bg-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-lg relative overflow-hidden group hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              {/* Subtle background color accent on hover */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500" />
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                    {loc.sector}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {loc.title}
                </h4>

                <div className="space-y-5 text-slate-600 dark:text-slate-300 mb-8">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5.5 h-5.5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-950 dark:text-slate-100">Adresă</p>
                      <p className="text-sm mt-0.5 leading-relaxed">{loc.address}</p>
                    </div>
                  </div>

                  {/* Phone numbers */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-5.5 h-5.5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-950 dark:text-slate-100">Contact</p>
                      <div className="flex flex-col gap-1 mt-0.5">
                        {loc.phones.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone.replace(/\s+/g, "")}`}
                            className="text-sm hover:text-blue-600 dark:hover:text-blue-400 font-medium inline-block"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5.5 h-5.5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-950 dark:text-slate-100">Program de Funcționare</p>
                      <p className="text-sm mt-0.5">{loc.schedule}</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 italic">{loc.weekend}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row gap-3">
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold py-3 px-5 rounded-xl text-sm transition-all"
                >
                  <Navigation className="w-4 h-4 text-blue-400" />
                  Vezi pe Google Maps
                </a>
                <a
                  href={`tel:${loc.phones[0].replace(/\s+/g, "")}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/30 dark:hover:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-bold py-3 px-5 rounded-xl text-sm transition-all"
                >
                  Sună Acum
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
