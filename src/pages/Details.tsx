import { motion } from 'motion/react';

export default function Details() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">The Details</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
              alt="Venue" 
              className="w-full aspect-[3/4] object-cover mb-8"
            />
            <h2 className="text-3xl font-serif mb-4">The Venue</h2>
            <p className="font-light text-charcoal/70 mb-4">
              V. Sattui Winery<br/>
              1111 White Ln<br/>
              St Helena, CA 94574
            </p>
            <a href="#" className="text-sm uppercase tracking-widest border-b border-gold text-gold">Get Directions</a>
          </motion.div>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif mb-6">Schedule of Events</h2>
              <div className="space-y-8">
                {[
                  { time: "4:00 PM", event: "Ceremony", desc: "The Vineyard Lawn" },
                  { time: "5:00 PM", event: "Cocktail Hour", desc: "The Barrel Room" },
                  { time: "6:30 PM", event: "Dinner & Reception", desc: "The Grand Hall" },
                  { time: "11:00 PM", event: "After Party", desc: "The Cellar" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 border-b border-charcoal/10 pb-6 last:border-0">
                    <span className="font-mono text-sm text-gold pt-1 w-20 shrink-0">{item.time}</span>
                    <div>
                      <h3 className="font-serif text-xl mb-1">{item.event}</h3>
                      <p className="font-light text-sm text-charcoal/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-serif mb-6">Accommodation</h2>
              <p className="font-light text-charcoal/70 mb-6">
                We have reserved a block of rooms at the Harvest Inn and the Wydown Hotel. 
                Please mention the "Alex & Jamie Wedding" when booking for a special rate.
              </p>
              <div className="flex flex-col gap-4">
                <a href="#" className="block p-6 bg-white border border-charcoal/5 hover:border-gold transition-colors group">
                  <h3 className="font-serif text-xl mb-1 group-hover:text-gold transition-colors">Harvest Inn</h3>
                  <p className="text-sm font-light text-charcoal/60">1 Main St, St Helena • (555) 123-4567</p>
                </a>
                <a href="#" className="block p-6 bg-white border border-charcoal/5 hover:border-gold transition-colors group">
                  <h3 className="font-serif text-xl mb-1 group-hover:text-gold transition-colors">The Wydown Hotel</h3>
                  <p className="text-sm font-light text-charcoal/60">1424 Main St, St Helena • (555) 987-6543</p>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
