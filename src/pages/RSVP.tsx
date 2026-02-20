import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';

export default function RSVP() {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold block mb-4">Kindly Reply</span>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">RSVP</h1>
          <p className="font-light text-charcoal/70">
            Please respond by August 1st, 2026.
          </p>
        </motion.div>

        {formState === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 text-center shadow-sm border border-charcoal/5"
          >
            <h3 className="text-3xl font-serif mb-4 text-gold">Thank You!</h3>
            <p className="font-light text-charcoal/70">
              Your response has been recorded. We can't wait to celebrate with you!
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-8 bg-white p-8 md:p-12 shadow-sm border border-charcoal/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-charcoal/50">First Name</label>
                <input required type="text" className="w-full border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-charcoal/50">Last Name</label>
                <input required type="text" className="w-full border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-charcoal/50">Email Address</label>
              <input required type="email" className="w-full border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent" />
            </div>

            <div className="space-y-4">
              <label className="text-xs uppercase tracking-widest text-charcoal/50 block">Will you be attending?</label>
              <div className="flex gap-8">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" name="attending" value="yes" className="peer sr-only" />
                  <div className="w-5 h-5 border border-charcoal/30 rounded-full peer-checked:border-gold peer-checked:bg-gold transition-all" />
                  <span className="font-light group-hover:text-gold transition-colors">Joyfully Accept</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" name="attending" value="no" className="peer sr-only" />
                  <div className="w-5 h-5 border border-charcoal/30 rounded-full peer-checked:border-gold peer-checked:bg-gold transition-all" />
                  <span className="font-light group-hover:text-gold transition-colors">Regretfully Decline</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-charcoal/50">Dietary Restrictions</label>
              <textarea className="w-full border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent resize-none h-24" />
            </div>

            <button 
              type="submit"
              disabled={formState === 'submitting'}
              className="w-full bg-charcoal text-white py-4 uppercase tracking-widest text-sm hover:bg-gold transition-colors duration-300 disabled:opacity-50"
            >
              {formState === 'submitting' ? 'Sending...' : 'Send RSVP'}
            </button>
          </motion.form>
        )}
      </div>
    </div>
  );
}
