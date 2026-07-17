import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import TripPlannerForm from "@/components/planner/TripPlannerForm";
import TripResult from "@/components/TripResult";
import Features from "@/components/home/Features";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <Hero />

      <div className="px-6 pb-20">
        <TripPlannerForm />

        <TripResult
          destination="Jaipur"
          budget="₹4,800 per person"
          transport="Train"
          hotel="Zostel Jaipur"
          itinerary={[
            "Day 1 – City Palace, Hawa Mahal",
            "Day 2 – Amber Fort, Nahargarh Fort",
            "Day 3 – Shopping & Return Journey",
          ]}
        />
      </div>

      <Features />

      <Footer />
    </main>
  );
}