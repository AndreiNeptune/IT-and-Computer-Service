import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PostHogProvider } from "@/components/PostHogProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import StickyMobileCTA from "@/components/StickyMobileCTA";
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "COMPUTER SHOP and SERVICE | Service Laptop și Calculatoare București",
  description: "Service laptop și reparații calculatoare PC în București (Sectoarele 2 și 4). Servicii IT complete, instalare Windows la domiciliu rapidă și sigură, mentenanță și pick-up & return gratuit.",
  keywords: [
    "Service laptop Bucuresti",
    "Reparatii calculatoare Bucuresti",
    "Instalare Windows la domiciliu",
    "Curatare laptop de praf",
    "Reparatii placi de baza",
    "Pick-up and return service PC",
    "Upgrade SSD laptop",
    "Service laptop Sector 2",
    "Service laptop Sector 4"
  ],
  authors: [{ name: "COMPUTER SHOP & SERVICE" }],
  openGraph: {
    title: "COMPUTER SHOP and SERVICE | Service Laptop și Calculatoare București",
    description: "Service laptop și reparații calculatoare PC în București. Servicii rapide la domiciliu și în magazinele noastre.",
    url: "https://servicecomputer.ro",
    siteName: "COMPUTER SHOP & SERVICE",
    locale: "ro_RO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://servicecomputer.ro/#organization",
        "name": "COMPUTER SHOP and SERVICE",
        "image": "https://servicecomputer.ro/logo.png",
        "telephone": "0726116356",
        "email": "office@servicecomputer.ro",
        "url": "https://servicecomputer.ro",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bd. C-tin Brâncoveanu nr. 15, Bl. B17, Sc. 2, Apt. 30, parter",
          "addressLocality": "București",
          "addressRegion": "Sector 4",
          "postalCode": "041381",
          "addressCountry": "RO"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 44.388484,
          "longitude": 26.115201
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:30"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://servicecomputer.ro/#sector2",
        "name": "COMPUTER SHOP and SERVICE - Sector 2",
        "telephone": "0726141301",
        "email": "office@servicecomputer.ro",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bulevardul Chișinău nr. 12",
          "addressLocality": "București",
          "addressRegion": "Sector 2",
          "postalCode": "022152",
          "addressCountry": "RO"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:30"
        }
      },
      {
        "@type": "Service",
        "name": "Instalare Windows la Domiciliu",
        "provider": {
          "@type": "LocalBusiness",
          "name": "COMPUTER SHOP and SERVICE"
        },
        "areaServed": "București și Ilfov",
        "description": "Instalare profesională de Windows (10, 11 etc.) la domiciliu în București și Ilfov. Include instalare drivere, programe esențiale, antivirus, optimizare sistem și backup de date.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "RON",
          "price": "200",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "200",
            "priceCurrency": "RON",
            "valueAddedTaxIncluded": "true"
          }
        }
      }
    ]
  };

  return (
    <html
      lang="ro"
      className={`${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
        <PostHogProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <CookieBanner />
            <BackToTop />
            <StickyMobileCTA />
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}

