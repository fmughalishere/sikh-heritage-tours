"use client"
import { motion } from 'framer-motion';

export default function Hero() {
  const sikhBlue = "#002147";
  const sikhGold = "#F5821F";

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
      <img 
        src="/images/hero-banner.jfif" 
        className="absolute inset-0 w-full h-full object-cover object-center scale-100 transition-transform duration-700 select-none pointer-events-none" 
        alt="Gurdwara Hero Background" 
      />
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ y: 40, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ color: sikhBlue }}
          className="text-4xl md:text-[85px] font-black leading-[1.1] tracking-tighter uppercase drop-shadow-md"
        >
          RECONNECT WITH YOUR <span style={{ color: sikhGold }} className="italic font-extrabold">ROOTS.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 text-lg md:text-2xl text-slate-200 font-bold tracking-wide bg-black/40 max-w-3xl mx-auto drop-shadow-sm"
        >
          The Ancestral Villages Tour Where Your Story Began.
        </motion.p>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center gap-6"
        >
          <a 
            href="https://wa.me/923173176483"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white px-10 py-5 rounded-full font-black tracking-widest transition-all duration-300 shadow-xl border cursor-pointer hover:shadow-2xl text-xs md:text-sm inline-block"
            style={{ 
              backgroundColor: sikhGold,
              borderColor: sikhGold
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = sikhBlue;
              e.currentTarget.style.borderColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = sikhGold;
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = sikhGold;
              e.currentTarget.style.transform = 'translateY(0px)';
            }}
          >
            START YOUR YATRA
          </a>
        </motion.div>
      </div>
    </section>
  );
}