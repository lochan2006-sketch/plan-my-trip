import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import TripPlannerForm from "@/components/planner/TripPlannerForm";
import Features from "@/components/home/Features";
import Footer from "@/components/layout/Footer";
import ExploreIndia from "@/components/home/ExploreIndia";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-slate-50">
      <Header />

      <Hero />

      {/* Explore India */}
      <section
        id="destinations"
        className="bg-white">
        <ExploreIndia />
      </section>

      {/* Trip Planner */}
      <section
        id="planner"
        className="relative overflow-hidden bg-slate-50 px-6 py-24"
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative">
          <TripPlannerForm />
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="bg-white">
        <Features />
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="bg-slate-50">
        <Testimonials />
      </section>

      <Footer />
    </main>
  );
}