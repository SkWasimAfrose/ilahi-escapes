import { motion } from "framer-motion";
import TripCard from "./TripCard";
import TripCarousel from "./TripCarousel";
import { useIsMobile } from "@/hooks/use-mobile";

const domesticTrips = [
  {
    title: "Winter Spiti",
    duration: "7N/8D",
    price: "₹19,999",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop",
    badge: "Best Seller",
  },
  {
    title: "Winter Kashmir",
    duration: "6N/7D",
    price: "₹22,999",
    image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Meghalaya",
    duration: "6N/7D",
    price: "₹21,999",
    image: "https://images.unsplash.com/photo-1625826415766-001bd75aaf52?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Winter Zanskar",
    duration: "6N/7D",
    price: "₹26,999",
    image: "https://images.unsplash.com/photo-1710573635319-8a9b33fedacb?q=80&w=2070&auto=format&fit=crop",
  },
];

const DomesticTrips = () => {
  const isMobile = useIsMobile();

  return (
    <section id="domestic" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 topo-pattern opacity-30" />
      
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
            Discover India
          </p>
          <h2 className="section-title">
            Explore India.
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl text-lg">
            From frozen lakes to living root bridges, experience the raw beauty of our homeland.
          </p>
        </motion.div>

        {/* Cards - Grid on Desktop, Carousel on Mobile */}
        {isMobile ? (
          <TripCarousel trips={domesticTrips} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domesticTrips.map((trip, index) => (
              <TripCard key={trip.title} {...trip} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DomesticTrips;
