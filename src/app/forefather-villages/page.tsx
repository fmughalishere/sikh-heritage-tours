"use client"
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { motion } from 'framer-motion';
import { MapPin, Globe, History, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function ForefatherVillages() {
    const sikhBlue = "#002147";
    const sikhGold = "#F5821F";

    return (
        <div className="relative min-h-screen w-full flex flex-col bg-white overflow-x-hidden">
            <Navbar />
            <section className="relative h-[60vh] sm:h-[75vh] w-full overflow-hidden">
                <Image
                    src="/images/punjab-banner.jfif"
                    fill
                    priority
                    quality={75}
                    className="object-cover object-center scale-105 grayscale opacity-60 transition-transform duration-700"
                    alt="Ancestral Village Banner"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-12 sm:bottom-20 left-0 w-full px-4 sm:px-6 md:px-10 max-w-[1440px] mx-auto right-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ color: sikhBlue }}
                        className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.95]"
                    >
                        Your Ancestral <br /> <span style={{ color: sikhGold }}>Roots.</span>
                    </motion.h1>
                </div>
            </section>
            <main className="relative z-10 flex-grow px-4 sm:px-6 md:px-10 max-w-[1440px] mx-auto w-full -mt-10 sm: -mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 sm:p-12 md:p-20 rounded-[32px] sm:rounded-[60px] shadow-[0_20px_60px_rgba(0,0,0,0.10)] sm:shadow-[0_40px_100px_rgba(0,0,0,0.15)] bg-white border border-slate-100"
                >
                    <div className="max-w-4xl">
                        <span style={{ color: sikhGold }} className="text-[10px] font-black uppercase tracking-[4px] sm:tracking-[5px] block mb-4 sm:mb-6">
                            The Journey of a Lifetime
                        </span>
                        <h2 className="text-2xl sm:text-4xl md:text-7xl font-black tracking-tighter mb-6 sm:mb-10 leading-[1.1] text-[#002147]">
                            Have You Ever Dreamed of Visiting the Village of Your Forefathers?
                        </h2>
                        <p className="text-base sm:text-xl leading-relaxed text-slate-500 font-medium mb-8 sm:mb-12">
                            The stories passed down through generations... The land your ancestors once called home...
                            The spiritual connection you've always carried. With <span style={{ color: sikhBlue }} className="font-black">Sikh Heritage Global</span>, bridge the gap between history and reality.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-8 sm:pt-10 border-t border-slate-100 uppercase font-black text-[10px] tracking-[3px]">
                        {['United Kingdom', 'United States', 'Canada'].map((country) => (
                            <div key={country} className="flex items-center justify-center gap-3 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100 text-[#002147] hover:bg-[#F5821F] hover:text-white transition-all duration-500 group">
                                <Globe size={16} className="group-hover:rotate-12 transition-transform shrink-0" />
                                <span className="text-center">{country}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <div className="mt-16 sm:mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center mb-16 sm:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 sm:space-y-10"
                    >
                        <h3 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.95] text-[#002147]">
                            History & <br /> <span style={{ color: sikhGold }}>Pride.</span>
                        </h3>
                        <p className="text-base sm:text-xl text-slate-500 leading-relaxed font-medium">
                            Walking the streets of your family's original village (pind). Reclaiming your unique connection to the soil of your ancestors. We don't just plan tours; we create deeply meaningful journeys.
                        </p>

                        <ul className="space-y-4 sm:space-y-6">
                            {[
                                { icon: <History />, txt: "Ancestral Roots Tracking" },
                                { icon: <Globe />, txt: "Cultural Immersion" },
                                { icon: <MapPin />, txt: "Generational Legacy" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 sm:gap-6 group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-slate-50 text-[#F5821F] group-hover:bg-[#F5821F] group-hover:text-white transition-all shrink-0">
                                        {item.icon}
                                    </div>
                                    <span className="font-black uppercase tracking-widest text-xs text-[#002147]">{item.txt}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative p-8 sm:p-12 md:p-16 rounded-[32px] sm:rounded-[60px] shadow-2xl flex flex-col justify-center min-h-[400px] sm:min-h-[500px] overflow-hidden"
                        style={{ backgroundColor: sikhBlue }}
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5821F] opacity-10 blur-[100px]" />

                        <div className="relative z-10 space-y-6 sm:space-y-8">
                            <span style={{ color: sikhGold }} className="text-[10px] font-black uppercase tracking-[4px] sm:tracking-[5px] block">
                                Mapping History
                            </span>
                            <h4 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                                Legacy <br /> Preservation.
                            </h4>
                            <p className="text-base sm:text-lg font-medium text-white/60 leading-relaxed">
                                Our specialized mapping team deep-dives into historical regional records to precisely locate your ancestral homes and community lands.
                            </p>
                            <button className="flex items-center text-left gap-4 text-white font-black uppercase tracking-widest text-[10px] group pt-2">
                                <span>Consult Our Mapping Team</span>
                                <ArrowRight style={{ color: sikhGold }} className="group-hover:translate-x-2 transition-transform shrink-0" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}