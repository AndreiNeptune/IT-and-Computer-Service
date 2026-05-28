import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
import ServicesTabs from "@/components/ServicesTabs";
import WindowsHome from "@/components/WindowsHome";
import PickUpReturn from "@/components/PickUpReturn";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1 pb-16 md:pb-0">
        {/* Hero Section */}
        <Hero />

        {/* Locations and Schedule Grid */}
        <Locations />

        {/* Fuzzy Searchable Services Tabs */}
        <ServicesTabs />

        {/* Residential Windows Installation Service */}
        <WindowsHome />

        {/* Pick-Up & Return Process Stepper */}
        <PickUpReturn />

        {/* Service Gallery */}
        <Gallery />

        {/* Customer Testimonials Carousel */}
        <Reviews />

        {/* Educational Blog Articles */}
        <Blog />

        {/* Contact and Appointment Booking Form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Utilities */}
      <CookieBanner />
      <BackToTop />
      <StickyMobileCTA />
    </div>
  );
}

