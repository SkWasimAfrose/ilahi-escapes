import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DomesticTrips from "@/components/DomesticTrips";
import InternationalTrips from "@/components/InternationalTrips";
import WhyTravel from "@/components/WhyTravel";
import UpcomingTicker from "@/components/UpcomingTicker";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <DomesticTrips />
      <InternationalTrips />
      <WhyTravel />
      <UpcomingTicker />
      <Footer />
    </div>
  );
};

export default Index;
