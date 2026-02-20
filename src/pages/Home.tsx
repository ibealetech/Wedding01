import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
            alt="Couple" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base uppercase tracking-[0.3em] mb-6"
          >
            September 24, 2026 • Napa Valley
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif italic mb-8"
          >
            Alex & Jamie
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              to="/rsvp" 
              className="inline-block border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              RSVP Now
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <ArrowDown className="text-white/70" size={24} />
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-32 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8 text-charcoal">
              We invite you to celebrate our love story amidst the rolling vineyards of Napa Valley.
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-charcoal/70 mb-12">
              Join us for a weekend of laughter, love, and unforgettable memories as we begin our forever together.
            </p>
            <Link to="/story" className="text-sm uppercase tracking-widest border-b border-charcoal/30 pb-1 hover:border-charcoal transition-colors">
              Read Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Marquee Image Strip */}
      <section className="py-12 overflow-hidden bg-cream">
        <div className="flex">
          <motion.div 
            className="flex"
            animate={{ x: "-50%" }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 40 
            }}
          >
            {[
              "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1974&auto=format&fit=crop"
            ].map((src, i) => (
              <div 
                key={i}
                className="h-64 md:h-80 aspect-[3/4] md:aspect-[4/3] relative shrink-0 pr-4 md:pr-8"
              >
                <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Details Preview */}
      <section className="py-24 md:py-32 px-6 bg-[#E8E6E1]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2069&auto=format&fit=crop" 
              alt="Venue" 
              className="w-full aspect-[4/5] object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gold">The Details</span>
            <h2 className="text-4xl md:text-6xl font-serif">A Weekend to Remember</h2>
            <div className="space-y-6 text-charcoal/80 font-light">
              <p>
                The ceremony and reception will be held at the historic V. Sattui Winery. 
                Expect an evening of fine wine, local cuisine, and dancing under the stars.
              </p>
              <ul className="space-y-4 border-l border-charcoal/10 pl-6 my-8">
                <li>
                  <strong className="block font-serif text-xl mb-1">Ceremony</strong>
                  4:00 PM • The Vineyard Lawn
                </li>
                <li>
                  <strong className="block font-serif text-xl mb-1">Cocktail Hour</strong>
                  5:00 PM • The Barrel Room
                </li>
                <li>
                  <strong className="block font-serif text-xl mb-1">Reception</strong>
                  6:30 PM • The Grand Hall
                </li>
              </ul>
            </div>
            <Link 
              to="/details" 
              className="inline-block bg-charcoal text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-gold transition-colors duration-300"
            >
              View Full Schedule
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
