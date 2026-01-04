import { motion } from "framer-motion";
import TripCard from "./TripCard";
import TripCarousel from "./TripCarousel";
import { useIsMobile } from "@/hooks/use-mobile";

const internationalTrips = [
  {
    title: "Bhutan - Land of Happiness",
    duration: "6N/7D",
    price: "₹33,499",
    image: "https://images.unsplash.com/photo-1553856622-d1b352e9a211?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Vietnam - Culture & Coastlines",
    duration: "7N/8D",
    price: "₹54,999",
    image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?q=80&w=2070&auto=format&fit=crop",
    badge: "New",
  },
  {
    title: "Thailand - Full Moon Party",
    duration: "5N/6D",
    price: "On Demand",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2070&auto=format&fit=crop",
  },
];

const InternationalTrips = () => {
  const isMobile = useIsMobile();

  return (
    <section id="international" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="font-body text-primary text-sm tracking-widest uppercase mb-3">
            Beyond Borders
          </p>
          <h2 className="section-title">
            Go Global.
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl text-lg">
            Cross borders, break barriers. Experience cultures that will change your perspective forever.
          </p>
        </motion.div>

        {/* Cards - Grid on Desktop, Carousel on Mobile */}
        {isMobile ? (
          <TripCarousel trips={internationalTrips} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internationalTrips.map((trip, index) => (
              <TripCard key={trip.title} {...trip} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default InternationalTrips;
