import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TripCardProps {
  title: string;
  duration: string;
  price: string;
  image: string;
  badge?: string;
  index?: number;
}

const TripCard = ({ title, duration, price, image, badge, index = 0 }: TripCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 card-hover min-w-[280px] md:min-w-0"
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-heading font-semibold uppercase tracking-wider">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        {/* Duration */}
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
          <Calendar className="w-4 h-4" />
          <span>{duration}</span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Starting from</p>
            <p className="font-heading text-2xl font-bold text-primary">{price}</p>
          </div>
          <Button
            variant="ghost"
            className="group/btn flex items-center gap-2 text-foreground hover:text-primary hover:bg-transparent p-0"
          >
            <span className="font-body text-sm">View Itinerary</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default TripCard;
