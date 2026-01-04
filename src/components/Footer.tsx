import { motion } from "framer-motion";
import { Instagram, Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="bg-forest-deep border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.png" 
                alt="travel agency Logo" 
                className="w-12 h-12 object-contain rounded-full border border-border"
              />
              <span className="font-heading text-2xl font-bold text-foreground">
                TRAVEL AGENCY
              </span>
            </div>
            <p className="font-body text-muted-foreground text-lg mb-6 max-w-md">
              Experiences that make you feel alive. Reconnecting people with nature, stories & self.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/skwasimafrose"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/918101389536"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg font-bold text-foreground mb-6 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Domestic Trips", "International Trips", "Community", "About Us"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg font-bold text-foreground mb-6 uppercase">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+918101389536"
                  className="font-body text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 8101389536
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:hello@ilahitravels.com"
                  className="font-body text-muted-foreground hover:text-primary transition-colors"
                >
                  ww.webdev@zohomail.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="font-body text-muted-foreground">
                  Kalyani, West Bengal, India
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="font-body text-sm text-muted-foreground">
                © 2024 Travel Agency. All rights reserved.
              </p>
              <p className="font-body text-xs text-muted-foreground/60">
                Built and Designed by{" "}
                <a 
                  href="https://whoiswasim.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Sk Wasim Afrose
                </a>
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="font-body text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Agent Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
