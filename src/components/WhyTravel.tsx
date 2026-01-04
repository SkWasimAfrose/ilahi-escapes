import { motion } from "framer-motion";
import { Heart, Leaf, Users, Shield, Compass, Star } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Soulful",
    description: "Reconnecting you with self through meaningful experiences.",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    description: "Eco-conscious travel that respects nature and local communities.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join the Campfire Council with 1,700+ adventure seekers.",
  },
  {
    icon: Shield,
    title: "Safe",
    description: "Experienced guides and safety protocols on every journey.",
  },
  {
    icon: Compass,
    title: "Curated",
    description: "Hand-picked routes and hidden gems off the beaten path.",
  },
  {
    icon: Star,
    title: "Memorable",
    description: "Stories you'll tell forever. Friendships that last a lifetime.",
  },
];

const WhyTravel = () => {
  return (
    <section id="community" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background with topo pattern */}
      <div className="absolute inset-0 bg-forest-deep topo-pattern" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-primary text-sm tracking-widest uppercase mb-3">
            The Ilahi Difference
          </p>
          <h2 className="section-title">
            Why Travel With Us?
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            We don't just plan trips. We craft experiences that transform you.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 md:p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:bg-card/80"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 glass rounded-2xl p-8"
        >
          {[
            { value: "50+", label: "Destinations" },
            { value: "1,700+", label: "Community Members" },
            { value: "200+", label: "Trips Completed" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.p
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2"
              >
                {stat.value}
              </motion.p>
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTravel;
