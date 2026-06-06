"use client"
import { useState } from 'react';
import { SIKH_FAQS } from '../../data/gurdwaras';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-slate-50 px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-black tracking-tighter text-[#002147] text-center mb-20 uppercase">
          Frequently <span className="text-[#F5821F]">Asked.</span>
        </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {SIKH_FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            
            return (
              <motion.div 
                key={i} 
                layout
                className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 group hover:border-[#F5821F] transition-colors duration-300 cursor-pointer overflow-hidden"
                onClick={() => toggleFAQ(i)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-xl font-bold text-[#002147]">
                    {faq.q}
                  </h3>
                  <span className={`text-xl font-bold transition-transform duration-300 ${isOpen ? 'text-[#F5821F] rotate-45' : 'text-gray-400'}`}>
                    ＋
                  </span>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="text-gray-500 leading-relaxed border-t border-slate-50 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}