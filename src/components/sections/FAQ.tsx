"use client";
import { useState } from "react";
import { SIKH_FAQS } from "../../data/gurdwaras";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const sikhBlue = "#002147";
  const sikhGold = "#F5821F";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-center mb-10 sm:mb-14 md:mb-20 uppercase"
          style={{ color: sikhBlue }}
        >
          Frequently <span style={{ color: sikhGold }}>Asked.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
          {SIKH_FAQS.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                layout
                className="bg-white p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 hover:border-[#F5821F] transition-colors duration-300 cursor-pointer overflow-hidden"
                onClick={() => toggleFAQ(i)}
              >
                <div className="flex justify-between items-center gap-3 sm:gap-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold leading-snug" style={{ color: sikhBlue }}>
                    {faq.q}
                  </h3>
                  <span
                    className={`shrink-0 text-lg sm:text-xl font-bold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    style={{ color: isOpen ? sikhGold : "#9ca3af" }}
                  >
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
                      <p
                        className="text-sm sm:text-base leading-relaxed border-t border-slate-50 pt-3 sm:pt-4"
                        style={{ color: sikhBlue }}
                      >
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
