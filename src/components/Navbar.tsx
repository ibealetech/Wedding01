import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const menuItems = [
  { title: "Home", path: "/", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" },
  { title: "Our Story", path: "/story", image: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1974&auto=format&fit=crop" },
  { title: "The Details", path: "/details", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" },
  { title: "RSVP", path: "/rsvp", image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop" },
  { title: "Registry", path: "/registry", image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(menuItems[0].image);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <Link to="/" className="text-2xl font-serif tracking-widest uppercase z-50">
          A & J
        </Link>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2 z-50 focus:outline-none"
        >
          <span className="uppercase tracking-widest text-sm font-medium hidden sm:block group-hover:tracking-[0.2em] transition-all duration-300">
            {isOpen ? 'Close' : 'Menu'}
          </span>
          <div className="relative w-8 h-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#1a1a1a] z-40 flex flex-col lg:flex-row text-white overflow-hidden"
          >
            {/* Image Side - Hidden on mobile, visible on large screens */}
            <div className="hidden lg:block w-1/2 h-full relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={hoveredImage}
                  src={hoveredImage}
                  alt="Menu Preview"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.6 }}
                  exit={{ scale: 1.1, opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Menu Links Side */}
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-8 lg:px-24 pt-20 lg:pt-0 bg-[#1a1a1a]">
              <div className="flex flex-col gap-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 50, opacity: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                    onMouseEnter={() => setHoveredImage(item.image)}
                    className="group relative"
                  >
                    <Link 
                      to={item.path}
                      className="block text-5xl md:text-7xl lg:text-8xl font-serif font-light py-2 overflow-hidden relative z-10 transition-colors duration-300 group-hover:text-gold"
                    >
                      <span className="inline-block transition-transform duration-500 group-hover:translate-x-4">
                        {item.title}
                      </span>
                    </Link>
                    <div className="h-[1px] w-full bg-white/10 mt-2 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                    
                    <motion.div 
                      className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-gold"
                    >
                      <ArrowRight size={32} />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-12 lg:mt-24 grid grid-cols-2 gap-8 text-sm uppercase tracking-widest text-white/50"
              >
                <div>
                  <h3 className="text-white mb-4">Contact</h3>
                  <p>hello@alexandjamie.com</p>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-white mb-4">Social</h3>
                  <p>Instagram</p>
                  <p>Pinterest</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
