"use client";

import { Phone, Calendar } from "lucide-react";
import Link from "next/link";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-4 py-3 md:hidden flex items-center justify-between gap-3 shadow-[0_-8px_30px_rgb(0,0,0,0.12)]">
      {/* Call Button */}
      <a
        href="tel:0726116356"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors"
      >
        <Phone className="w-4 h-4 text-blue-400" />
        Suna Suport
      </a>

      {/* Book Button */}
      <Link
        href="/contact"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-md shadow-blue-500/10"
      >
        <Calendar className="w-4 h-4" />
        Programare
      </Link>
    </div>
  );
}
