import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TripCard from "./TripCard";

interface Trip {
  title: string;
  duration: string;
  price: string;
  image: string;
  badge?: string;
}

interface TripCarouselProps {
  trips: Trip[];
}

const TripCarousel = ({ trips }: TripCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Scroll Buttons - Hidden on mobile, visible on tablet+ */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-card border border-border rounded-full items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all shadow-lg"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-card border border-border rounded-full items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all shadow-lg"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Cards Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {trips.map((trip, index) => (
          <motion.div
            key={trip.title}
            className="snap-start shrink-0 w-[280px] md:w-auto md:shrink md:flex-1"
          >
            <TripCard {...trip} index={index} />
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator Dots (Mobile Only) */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {trips.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-muted"
          />
        ))}
      </div>
    </div>
  );
};

export default TripCarousel;
