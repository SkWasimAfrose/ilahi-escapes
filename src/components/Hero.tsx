import { motion, useScroll, useTransform } from "framer-motion";
import { Search, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </motion.div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-20 min-h-screen flex flex-col justify-center"
      >
        <div className="max-w-5xl">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-primary text-sm md:text-base tracking-widest uppercase mb-6"
          >
            Sustainable • Safe • Soulful
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-none mb-6"
          >
            ESCAPE THE
            <br />
            <span className="text-primary">ORDINARY.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-lg md:text-xl text-foreground/80 max-w-2xl mb-12"
          >
            Experiences that make you feel alive. Join our next journey to Spiti, Vietnam, or Bhutan.
          </motion.p>
        </div>

        {/* Search Widget */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass rounded-2xl p-4 md:p-6 max-w-4xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Destination */}
            <div className="flex items-center gap-3 flex-1 w-full md:w-auto">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Destination</p>
                <select className="w-full bg-transparent text-foreground font-body text-sm md:text-base outline-none cursor-pointer">
                  <option value="">Where to?</option>
                  <option value="spiti">Spiti Valley</option>
                  <option value="kashmir">Kashmir</option>
                  <option value="bhutan">Bhutan</option>
                  <option value="vietnam">Vietnam</option>
                </select>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-border" />

            {/* Month */}
            <div className="flex items-center gap-3 flex-1 w-full md:w-auto">
              <Calendar className="w-5 h-5 text-primary shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">When</p>
                <select className="w-full bg-transparent text-foreground font-body text-sm md:text-base outline-none cursor-pointer">
                  <option value="">Select Month</option>
                  <option value="oct">October 2024</option>
                  <option value="nov">November 2024</option>
                  <option value="dec">December 2024</option>
                  <option value="jan">January 2025</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <Button className="btn-primary w-full md:w-auto flex items-center gap-2">
              <Search className="w-4 h-4" />
              Search
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
