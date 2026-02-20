import { motion } from 'motion/react';

export default function Story() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold block mb-4">Our Journey</span>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">How We Met</h1>
          <p className="text-lg font-light leading-relaxed max-w-2xl mx-auto">
            From a chance encounter in a coffee shop to a proposal in Paris, here is the story of us.
          </p>
        </motion.div>

        <div className="space-y-24 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:w-0.5 before:-translate-x-px before:h-full before:bg-gradient-to-b before:from-transparent before:via-charcoal/20 before:to-transparent">
          {[
            {
              year: "2018",
              title: "The First Hello",
              desc: "We met at a small coffee shop in downtown Seattle. It was raining (of course), and we both reached for the last almond croissant.",
              image: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1974&auto=format&fit=crop"
            },
            {
              year: "2020",
              title: "Moving In",
              desc: "After two years of long drives and late night calls, we decided to build a home together in San Francisco.",
              image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
            },
            {
              year: "2024",
              title: "The Proposal",
              desc: "On a sunset boat ride along the Seine, Alex got down on one knee. It was the easiest 'Yes' ever.",
              image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${i % 2 === 0 ? 'md:flex-row' : ''}`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-charcoal/20 bg-cream shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10">
                <div className="w-2 h-2 bg-gold rounded-full" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-10 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm border border-charcoal/5">
                <span className="text-gold font-serif text-2xl block mb-2">{item.year}</span>
                <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                <p className="font-light text-charcoal/70 mb-6">{item.desc}</p>
                <img src={item.image} alt={item.title} className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
