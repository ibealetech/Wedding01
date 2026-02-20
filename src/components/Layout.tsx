import { ReactNode } from 'react';
import Navbar from './Navbar';
import { motion } from 'motion/react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal overflow-x-hidden">
      <Navbar />
      <main className="flex-grow relative">
        {children}
      </main>
      <footer className="bg-[#1a1a1a] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Alex & Jamie</h2>
          <p className="text-sm uppercase tracking-[0.2em] opacity-60 mb-12">
            September 24, 2026 • Napa Valley, CA
          </p>
          <div className="flex gap-8 text-sm font-medium tracking-widest">
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors">Registry</a>
            <a href="#" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <div className="mt-20 text-xs opacity-30 tracking-widest">
            © 2026 Alex & Jamie Wedding. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
