"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Users, MessageCircle, Sparkles } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { PACKAGES_DATA } from '../../data/packages';
import Image from 'next/image';

const PACKAGE_BANNERS: Record<string, { src: string; alt: string }> = {
  'land-of-gurus-and-peers':        { src: '/images/land-of-gurus-and-peers.jpg',     alt: 'Land of Gurus and Peers' },
  'gurdwara-yatra-package':   { src: '/images/gurdwara-yatra-package.jpg',          alt: 'Gurdwara Yatra Package' },
  'tailor-made-yatra':          { src: '/images/tailor-made-yatra.jpg',        alt: 'Tailor Made Yatra' },
};

const FALLBACK_GRADIENTS = [
  'from-[#002147] to-[#003a7a]',
  'from-[#1a1a2e] to-[#002147]',
  'from-[#002147] to-[#F5821F]/40',
  'from-slate-800 to-[#002147]',
  'from-[#0d1b2a] to-[#002147]',
];

export default function PackagesPage() {
    const sikhBlue = "#002147";
    const sikhGold = "#F5821F";
    const [openSlug, setOpenSlug] = useState<string | null>(null);

    const waLink = (pkgName: string) =>
        `https://wa.me/923173176483?text=${encodeURIComponent(
            `Sat Sri Akal! I'm interested in the "${pkgName}" package. Could you please share pricing and availability?`
        )}`;

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 w-full overflow-x-hidden">
            <Navbar />
            <main className="flex-grow pt-28 sm:pt-40 md:pt-48 pb-16 md:pb-32 px-4 sm:px-6 md:px-10 max-w-[1400px] mx-auto w-full">
                <div className="max-w-3xl mb-10 sm:mb-16">
                    <span style={{ color: sikhGold }} className="text-[10px] font-black uppercase tracking-[4px] block mb-4">
                        Sacred Journeys, Planned With Care
                    </span>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase mb-6" style={{ color: sikhBlue }}>
                        Yatra <span style={{ color: sikhGold }}>Packages.</span>
                    </h1>
                    <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-medium">
                        Every package below can be tailored to your group's dates, comfort level and budget.
                        Pricing depends on group size, season and hotel tier, so our team shares an exact quote
                        directly on WhatsApp rather than a fixed number here.
                    </p>
                </div>
                <div className="space-y-6 sm:space-y-8">
                    {PACKAGES_DATA.map((pkg, cardIdx) => {
                        const isOpen = openSlug === pkg.slug;
                        const banner = PACKAGE_BANNERS[pkg.slug];
                        const fallback = FALLBACK_GRADIENTS[cardIdx % FALLBACK_GRADIENTS.length];

                        return (
                            <motion.div
                                key={pkg.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl sm:rounded-[32px] shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden transition-all duration-300"
                            >
                                <div className="relative w-full h-48 sm:h-60 md:h-72 overflow-hidden">
                                    {banner ? (
                                        <Image
                                            src={banner.src}
                                            alt={banner.alt}
                                            fill
                                            quality={95}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1400px"
                                            priority={cardIdx === 0}
                                            className="object-cover object-center scale-105 hover:scale-100 grayscale-0 md:grayscale transition-all duration-1000"
                                        />
                                    ) : (
                                        <div className={`w-full h-full bg-gradient-to-br ${fallback}`} />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                    <div className="absolute top-4 left-4 sm:top-5 sm:left-5 right-4 flex flex-wrap items-center gap-2">
                                        <span
                                            className="text-white text-[10px] font-mono font-bold px-3 py-1.5 rounded-xl backdrop-blur-sm"
                                            style={{ backgroundColor: `${sikhBlue}cc` }}
                                        >
                                            {pkg.code}
                                        </span>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white/80 backdrop-blur-sm bg-black/20 px-2 py-1.5 rounded-lg">
                                            {pkg.duration}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 right-4">
                                        <h2 className="text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white drop-shadow-lg leading-tight break-words">
                                            {pkg.name}
                                        </h2>
                                    </div>
                                </div>
                                <div className="p-5 sm:p-8 md:p-10">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 sm:gap-6">
                                        <div className="flex-1">
                                            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium mb-5 max-w-2xl">
                                                {pkg.tagline}
                                            </p>
                                            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-5">
                                                <Users size={14} style={{ color: sikhGold }} />
                                                Minimum Group: {pkg.minGroupSize}
                                            </div>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 mb-2">
                                                {pkg.highlights.map((h, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm font-bold text-slate-600">
                                                        <span style={{ color: sikhGold }} className="text-xs mt-1.5 shrink-0">●</span>
                                                        <span className="leading-snug">{h}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="flex flex-col sm:flex-row md:flex-col gap-2 sm:gap-3 md:w-56 shrink-0">
                                            <a
                                                href={waLink(pkg.name)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 text-white px-4 sm:px-5 py-3 sm:py-4 rounded-xl md:rounded-2xl font-black tracking-widest text-[10px] uppercase shadow-md hover:opacity-90 transition-all"
                                                style={{ backgroundColor: sikhGold }}
                                            >
                                                <MessageCircle size={16} />
                                                Get Pricing
                                            </a>
                                            {!pkg.isCustom && (
                                                <button
                                                    onClick={() => setOpenSlug(isOpen ? null : pkg.slug)}
                                                    className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-4 rounded-xl md:rounded-2xl font-black tracking-widest text-[10px] uppercase border transition-all hover:bg-slate-50"
                                                    style={{ color: sikhBlue, borderColor: `${sikhBlue}30` }}
                                                >
                                                    Itinerary
                                                    <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    {pkg.isCustom && (
                                        <div className="mt-6 pt-6 border-t border-slate-100 flex items-start gap-3 text-sm text-slate-500 font-medium">
                                            <Sparkles size={18} style={{ color: sikhGold }} className="shrink-0 mt-0.5" />
                                            <span>Tell us your dates, group size and the Gurdwaras that matter most to your Sangat — we'll propose a day-by-day plan on WhatsApp.</span>
                                        </div>
                                    )}
                                    {!pkg.isCustom && isOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="mt-8 pt-8 border-t border-slate-100 space-y-8"
                                        >
                                            <div>
                                                <h3 className="text-[11px] font-black uppercase tracking-widest mb-4" style={{ color: sikhGold }}>
                                                    Day-By-Day Itinerary
                                                </h3>
                                                <div className="space-y-5">
                                                    {pkg.itinerary.map((d, i) => (
                                                        <div key={i} className="flex gap-4 sm:gap-6">
                                                            <div className="shrink-0 w-16 sm:w-20 text-xs font-black uppercase tracking-widest pt-1" style={{ color: sikhBlue }}>
                                                                {d.day}
                                                            </div>
                                                            <div className="flex-1 border-l border-slate-100 pl-4 sm:pl-6">
                                                                <p className="font-black text-sm sm:text-base mb-2" style={{ color: sikhBlue }}>{d.title}</p>
                                                                <ul className="space-y-1.5">
                                                                    {d.points.map((p, j) => (
                                                                        <li key={j} className="text-xs sm:text-sm text-slate-500 font-medium flex items-start gap-2">
                                                                            <MapPin size={12} className="mt-1 shrink-0" style={{ color: sikhGold }} />
                                                                            {p}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: sikhGold }}>
                                                        Package Includes
                                                    </h3>
                                                    <ul className="space-y-1.5">
                                                        {pkg.includes.map((inc, i) => (
                                                            <li key={i} className="text-xs sm:text-sm text-slate-500 font-medium flex items-start gap-2">
                                                                <span style={{ color: sikhBlue }} className="text-xs mt-1 shrink-0">●</span>
                                                                {inc}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                {pkg.hotels.length > 0 && (
                                                    <div>
                                                        <h3 className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: sikhGold }}>
                                                            Hotels We Use
                                                        </h3>
                                                        <div className="space-y-3">
                                                            {pkg.hotels.map((h, i) => (
                                                                <div key={i}>
                                                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{h.tier}</p>
                                                                    <p className="text-xs sm:text-sm text-slate-600 font-bold leading-relaxed">{h.list.join(' · ')}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
                <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-2xl sm:rounded-[32px] bg-white border border-slate-100 text-center">
                    <p className="text-sm sm:text-base text-slate-500 font-medium">
                        Hotels may change to an equivalent standard. Check-in is after 12:00 noon — early check-in is available for an extra charge.
                        For exact pricing in CAD/USD for 5-Star or 4-Star options, child policy, and single supplement, message us on{' '}
                        <a href="https://wa.me/923173176483" target="_blank" rel="noopener noreferrer" className="font-black underline" style={{ color: sikhGold }}>
                            WhatsApp
                        </a>.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
