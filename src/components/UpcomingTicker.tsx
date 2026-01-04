import { motion } from "framer-motion";

const upcomingBatches = [
  "SPITI (Oct 4th)",
  "KASHMIR (Oct 20th)",
  "VIETNAM (Nov 1st)",
  "BHUTAN (Sept 28th)",
  "MEGHALAYA (Nov 15th)",
  "THAILAND (Dec 5th)",
  "ZANSKAR (Jan 10th)",
];

const UpcomingTicker = () => {
  return (
    <section className="py-6 bg-primary overflow-hidden">
      <div className="relative">
        {/* Marquee Container */}
        <div className="flex">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex shrink-0"
          >
            {/* First set of items */}
            {upcomingBatches.map((batch, index) => (
              <div key={index} className="flex items-center shrink-0">
                <span className="font-heading text-sm md:text-base font-semibold text-primary-foreground uppercase tracking-wider whitespace-nowrap px-4">
                  UPCOMING BATCHES:
                </span>
                <span className="font-body text-sm md:text-base text-primary-foreground whitespace-nowrap">
                  {batch}
                </span>
                <span className="mx-6 text-primary-foreground/50">•</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {upcomingBatches.map((batch, index) => (
              <div key={`dup-${index}`} className="flex items-center shrink-0">
                <span className="font-heading text-sm md:text-base font-semibold text-primary-foreground uppercase tracking-wider whitespace-nowrap px-4">
                  UPCOMING BATCHES:
                </span>
                <span className="font-body text-sm md:text-base text-primary-foreground whitespace-nowrap">
                  {batch}
                </span>
                <span className="mx-6 text-primary-foreground/50">•</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingTicker;
