"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import FAQ from '../components/sections/FAQ';
import ContactAddresses from '../components/sections/ContactAddresses';
import { ArrowRight, Globe, History } from 'lucide-react';

export default function Home() {
  const sikhBlue = "#002147";
  const sikhGold = "#F5821F";

  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
            <section className="py-32 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span style={{ color: sikhGold }} className="text-[10px] font-black uppercase tracking-[5px] block">
              Jewels of Punjab
            </span>
            <h2 style={{ color: sikhBlue }} className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85}">
              Reconnecting <br />
              <span style={{ color: sikhGold }}>With History.</span>
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              Sikh tourism Pakistan, heritage, and culture are the jewels of Punjab.
              Over 80% of all holy Sikh shrines are located here, including the
              blessed Janam Asthaan of Guru Nanak Dev Ji.
            </p>
            <Link href="/about">
              <button className="bg-[#002147] text-white px-10 py-5 rounded-2xl font-black tracking-widest text-[10px] hover:bg-[#F5821F] transition-all duration-500 shadow-xl uppercase">
                Our Story
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full rounded-[60px] overflow-hidden shadow-3xl"
          >
            <Image 
              src="/images/kartarpur-gate.jpg" 
              alt="Kartarpur Gate"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="grayscale hover:grayscale-0 transition-all duration-700 object-cover"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[40px] shadow-2xl border border-slate-50 z-10">
              <p className="text-5xl font-black" style={{ color: sikhGold }}>80%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-2">Sikh Shrines in PK</p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1440px] mx-auto bg-[#002147] rounded-[80px] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5821F] opacity-10 blur-[120px] rounded-full" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight uppercase">
                Find Your <br /> <span style={{ color: sikhGold }}>Ancestral Village.</span>
              </h3>
              <p className="text-xl text-white/70 leading-relaxed font-light">
                Have you ever dreamed of visiting the land of your forefathers?
                We help the Global Sangat bridge the gap between stories and reality.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {['United Kingdom', 'United States', 'Canada'].map((country) => (
                  <span key={country} className="bg-white/10 border border-white/10 px-6 py-3 rounded-full text-[10px] font-black tracking-widest uppercase">
                    {country}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6 bg-white/5 p-10 rounded-[50px] border border-white/5 backdrop-blur-md">
              <div className="flex gap-6 items-start">
                <History style={{ color: sikhGold }} size={32} />
                <div><p className="font-bold text-lg">Ancestral Roots Tracking</p><p className="text-sm opacity-60">Walking the streets of your family's original pind.</p></div>
              </div>
              <div className="flex gap-6 items-start">
                <Globe style={{ color: sikhGold }} size={32} />
                <div><p className="font-bold text-lg">Cultural Immersion</p><p className="text-sm opacity-60">Experience the warmth of Punjab's legendary hospitality.</p></div>
              </div>
              <Link href="/forefather-villages" className="block pt-6">
                <button className="w-full bg-white text-[#002147] py-5 rounded-2xl font-black tracking-widest text-[10px] hover:bg-[#F5821F] hover:text-white transition-all uppercase">
                  Trace Your Roots Now
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="py-32 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 style={{ color: sikhBlue }} className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              MAJOR <span style={{ color: sikhGold }}>YATRA SITES.</span>
            </h2>
          </div>
          <Link href="/gurdwaras" className="group flex items-center gap-3 font-black text-[10px] uppercase tracking-widest" style={{ color: sikhGold }}>
            View All Gurdwaras <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { name: "Nankana Sahib", img: "/images/nankana.jpg", count: "8 Gurdwaras" },
            { name: "Kartarpur Sahib", img: "/images/kartarpur.jpg", count: "Darbar Sahib" },
            { name: "Panja Sahib", img: "/images/panja.jpg", count: "Hassan Abdal" }
          ].map((site, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="relative h-[450px] rounded-[50px] overflow-hidden shadow-2xl group cursor-pointer"
            >
              <Image 
                src={site.img} 
                alt={site.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="transition-transform duration-700 group-hover:scale-110 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002147] via-transparent to-transparent opacity-90 z-10" />
              <div className="absolute bottom-10 left-10 text-white z-20">
                <p style={{ color: sikhGold }} className="text-[10px] font-black uppercase tracking-[3px] mb-2">{site.count}</p>
                <h4 className="text-3xl font-black uppercase tracking-tighter">{site.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FAQ />
      <ContactAddresses />
      <Footer />
    </main>
  );
}