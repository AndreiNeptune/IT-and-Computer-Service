"use client";

import { useState, useEffect } from "react";
import { Info, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookie_consent_accepted");
    if (!cookieConsent) {
      // Small delay before showing the banner
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent_accepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 left-6 right-6 md:bottom-6 md:left-auto md:max-w-md z-50 animate-[slideUp_0.5s_ease-out]">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-2xl backdrop-blur-md flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div className="bg-blue-500/10 p-2 rounded-xl text-blue-600 dark:text-blue-400 shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Politica de Cookie-uri
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Acest site folosește cookie-uri pentru a îmbunătăți experiența utilizatorilor. Continuarea navigării pe site implică acceptarea politicii de utilizare a cookie-urilor.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-1">
          <a
            href="#"
            className="text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            Politică de confidențialitate
          </a>
          <button
            onClick={handleAccept}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all cursor-pointer shadow-md shadow-blue-500/10"
          >
            Sunt de acord
          </button>
        </div>
      </div>
    </div>
  );
}
