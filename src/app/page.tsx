"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import FAQ from '../components/sections/FAQ';
import { ArrowRight, Globe, History } from 'lucide-react';
import { PACKAGES_DATA } from '../data/packages';

export default function Home() {
  const sikhBlue = "#002147";
  const sikhGold = "#F5821F";

  return (
    <main className="bg-white overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <section className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 text-left"
          >
            <span style={{ color: sikhGold }} className="text-[10px] font-black uppercase tracking-[5px] block">
              Jewels of Punjab
            </span>
            <h2 style={{ color: sikhBlue }} className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] lg:leading-[0.85]">
              Reconnecting <br />
              <span style={{ color: sikhGold }}>With History.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
              Sikh tourism Pakistan, heritage, and culture are the jewels of Punjab.
              Over 80% of all holy Sikh shrines are located here, including the
              blessed Janam Asthaan of Guru Nanak Dev Ji.
            </p>
            <Link href="/about" className="inline-block">
              <button className="bg-[#002147] text-white px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-black tracking-widest text-[10px] hover:bg-[#F5821F] transition-all duration-500 shadow-xl uppercase w-full sm:w-auto">
                Our Story
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[350px] sm:h-[450px] md:h-[600px] w-full rounded-3xl sm:rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-3xl mt-6 lg:mt-0"
          >
            <Image
              src="/images/kartarpur-gate.jpg"
              alt="Kartarpur Gate"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="grayscale hover:grayscale-0 transition-all duration-700 object-cover"
              priority
            />
            <div className="absolute bottom-4 right-4 sm:-bottom-6 sm:-right-6 md:-bottom-10 md:-right-10 bg-white p-4 sm:p-8 md:p-10 rounded-2xl sm:rounded-[30px] md:rounded-[40px] shadow-2xl border border-slate-50 z-10 text-center sm:text-left">
              <p className="text-3xl sm:text-4xl md:text-5xl font-black" style={{ color: sikhGold }}>80%</p>
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1 sm:mt-2">Sikh Shrines in PK</p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1440px] mx-auto bg-[#002147] rounded-[40px] sm:rounded-[60px] md:rounded-[80px] p-6 sm:p-12 md:p-24 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#F5821F] opacity-10 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-tight uppercase">
                Find Your <br /> <span style={{ color: sikhGold }}>Ancestral Village.</span>
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed font-light">
                Have you ever dreamed of visiting the land of your forefathers?
                We help the Global Sangat bridge the gap between stories and reality.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-4 pt-2">
                {['United Kingdom', 'United States', 'Canada'].map((country) => (
                  <span key={country} className="bg-white/10 border border-white/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-[9px] sm:text-[10px] font-black tracking-widest uppercase">
                    {country}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6 bg-white/5 p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-[40px] md:rounded-[50px] border border-white/5 backdrop-blur-md">
              <div className="flex gap-4 sm:gap-6 items-start">
                <History style={{ color: sikhGold }} size={28} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-base sm:text-lg">Ancestral Roots Tracking</p>
                  <p className="text-xs sm:text-sm opacity-60">Walking the streets of your family's original pind.</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6 items-start">
                <Globe style={{ color: sikhGold }} size={28} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-base sm:text-lg">Cultural Immersion</p>
                  <p className="text-xs sm:text-sm opacity-60">Experience the warmth of Punjab's legendary hospitality.</p>
                </div>
              </div>
              <Link href="/forefather-villages" className="block pt-4 sm:pt-6">
                <button className="w-full bg-white text-[#002147] py-4 md:py-5 rounded-xl md:rounded-2xl font-black tracking-widest text-[10px] hover:bg-[#F5821F] hover:text-white transition-all uppercase">
                  Trace Your Roots Now
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4">
          <div>
            <h2 style={{ color: sikhBlue }} className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase">
              MAJOR <span style={{ color: sikhGold }}>YATRA SITES.</span>
            </h2>
          </div>
          <Link href="/gurdwaras" className="group flex items-center gap-3 font-black text-[10px] uppercase tracking-widest self-start md:self-auto" style={{ color: sikhGold }}>
            View All Gurdwaras <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {[
            { name: "Nankana Sahib", img: "/images/nankana.jpg", count: "8 Gurdwaras" },
            { name: "Kartarpur Sahib", img: "/images/kartarpur.jpg", count: "Darbar Sahib" },
            { name: "Panja Sahib", img: "/images/panja.jpg", count: "Hassan Abdal" }
          ].map((site, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="relative h-[350px] sm:h-[400px] md:h-[450px] rounded-3xl sm:rounded-[40px] md:rounded-[50px] overflow-hidden shadow-2xl group cursor-pointer"
            >
              <Image
                src={site.img}
                alt={site.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="transition-transform duration-700 group-hover:scale-110 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002147] via-transparent to-transparent opacity-90 z-10" />
              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white z-20">
                <p style={{ color: sikhGold }} className="text-[10px] font-black uppercase tracking-[3px] mb-1 sm:mb-2">{site.count}</p>
                <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter">{site.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4">
          <div>
            <span style={{ color: sikhGold }} className="text-[10px] font-black uppercase tracking-[4px] block mb-3">
              From 5 Days To 7 Days
            </span>
            <h2 style={{ color: sikhBlue }} className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase">
              YATRA <span style={{ color: sikhGold }}>PACKAGES.</span>
            </h2>
          </div>
          <Link href="/packages" className="group flex items-center gap-3 font-black text-[10px] uppercase tracking-widest self-start md:self-auto" style={{ color: sikhGold }}>
            View All Packages <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {PACKAGES_DATA.map((pkg) => (
            <Link href="/packages" key={pkg.slug} className="block">
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full bg-slate-50 rounded-3xl sm:rounded-[40px] p-8 sm:p-10 border border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                <span
                  className="text-white text-[10px] font-mono font-bold px-3 py-1.5 rounded-xl inline-block mb-6"
                  style={{ backgroundColor: sikhBlue }}
                >
                  {pkg.code}
                </span>
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-3" style={{ color: sikhBlue }}>
                  {pkg.name}
                </h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">{pkg.duration}</p>
                <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: sikhGold }}>
                  Contact For Pricing →
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
