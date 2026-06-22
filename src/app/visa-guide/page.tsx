"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, Globe2, MessageCircle, ShieldAlert } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import {
    VPA_COUNTRIES_BY_REGION,
    GCC_VISA_ON_ARRIVAL_COUNTRIES,
    VISA_GUIDE_NOTES,
    OTHER_COUNTRIES_GUIDE,
} from '../../data/visa';

export default function VisaGuidePage() {
    const sikhBlue = "#002147";
    const sikhGold = "#F5821F";
    const [tab, setTab] = useState<'evisa' | 'other'>('evisa');
    const [openRegion, setOpenRegion] = useState<string | null>('Europe');

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 w-full overflow-x-hidden">
            <Navbar />
            <main className="flex-grow pt-28 sm:pt-40 md:pt-48 pb-16 md:pb-32 px-4 sm:px-6 md:px-10 max-w-[1400px] mx-auto w-full">
                <div className="max-w-3xl mb-10 sm:mb-14">
                    <span style={{ color: sikhGold }} className="text-[10px] font-black uppercase tracking-[4px] block mb-4">
                        Plan Ahead With Confidence
                    </span>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase mb-6" style={{ color: sikhBlue }}>
                        Pakistan <span style={{ color: sikhGold }}>Visa Guide.</span>
                    </h1>
                    <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-medium">
                        Visa rules for entering Pakistan changed in 2026. Here's where things stand as of {VISA_GUIDE_NOTES.lastChecked},
                        so you can apply with the right expectations — and we're always a WhatsApp message away if anything is unclear.
                    </p>
                </div>

                <div className="mb-10 sm:mb-14 p-5 sm:p-8 rounded-2xl sm:rounded-[32px] bg-white border-2 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start" style={{ borderColor: `${sikhGold}40` }}>
                    <AlertTriangle size={28} style={{ color: sikhGold }} className="shrink-0" />
                    <div>
                        <h3 className="text-sm sm:text-base font-black uppercase tracking-tight mb-2" style={{ color: sikhBlue }}>
                            2026 Update: Free Fast-Track Visa Suspended
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">
                            {VISA_GUIDE_NOTES.vpaStatus}
                        </p>
                    </div>
                </div>

                <div className="flex gap-2 sm:gap-3 mb-10 sm:mb-14 flex-wrap">
                    <button
                        onClick={() => setTab('evisa')}
                        className="px-5 sm:px-7 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all"
                        style={tab === 'evisa' ? { backgroundColor: sikhBlue, color: '#fff' } : { backgroundColor: '#fff', color: sikhBlue, border: `1px solid ${sikhBlue}20` }}
                    >
                        126-Country e-Visa List
                    </button>
                    <button
                        onClick={() => setTab('other')}
                        className="px-5 sm:px-7 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all"
                        style={tab === 'other' ? { backgroundColor: sikhBlue, color: '#fff' } : { backgroundColor: '#fff', color: sikhBlue, border: `1px solid ${sikhBlue}20` }}
                    >
                        Other Countries & India
                    </button>
                </div>

                {tab === 'evisa' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 sm:space-y-10">
                        <div className="bg-white rounded-2xl sm:rounded-[32px] border border-slate-100 shadow-sm p-5 sm:p-10">
                            <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight mb-6" style={{ color: sikhBlue }}>
                                How To Apply Now
                            </h3>
                            <ol className="space-y-4">
                                {VISA_GUIDE_NOTES.standardEvisaSteps.map((step, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span
                                            className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black text-white"
                                            style={{ backgroundColor: sikhGold }}
                                        >
                                            {i + 1}
                                        </span>
                                        <span className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed pt-0.5">{step}</span>
                                    </li>
                                ))}
                            </ol>
                            <div className="mt-8 pt-8 border-t border-slate-100 flex items-start gap-3">
                                <CheckCircle2 size={20} style={{ color: sikhGold }} className="shrink-0 mt-0.5" />
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{VISA_GUIDE_NOTES.groupTourNote}</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl sm:rounded-[32px] border border-slate-100 shadow-sm p-5 sm:p-10">
                            <div className="flex items-center gap-3 mb-3">
                                <Globe2 size={22} style={{ color: sikhGold }} />
                                <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight" style={{ color: sikhBlue }}>
                                    Gulf (GCC) Nationals
                                </h3>
                            </div>
                            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium mb-4">{VISA_GUIDE_NOTES.gccNote}</p>
                            <div className="flex flex-wrap gap-2">
                                {GCC_VISA_ON_ARRIVAL_COUNTRIES.map((c) => (
                                    <span key={c} className="text-[11px] font-bold px-3 py-1.5 rounded-full" style={{ backgroundColor: `${sikhBlue}08`, color: sikhBlue }}>
                                        {c}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl sm:rounded-[32px] border border-slate-100 shadow-sm p-5 sm:p-10">
                            <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight mb-2" style={{ color: sikhBlue }}>
                                The 126 Countries
                            </h3>
                            <p className="text-sm text-slate-400 font-medium mb-6">
                                Previously eligible for the free fast-track visa — now use the standard paid e-Visa process above.
                            </p>
                            <div className="space-y-4">
                                {VPA_COUNTRIES_BY_REGION.map((group) => {
                                    const isOpen = openRegion === group.region;
                                    return (
                                        <div key={group.region} className="border border-slate-100 rounded-2xl overflow-hidden">
                                            <button
                                                onClick={() => setOpenRegion(isOpen ? null : group.region)}
                                                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left"
                                            >
                                                <span className="font-black uppercase tracking-tight text-sm sm:text-base" style={{ color: sikhBlue }}>
                                                    {group.region}
                                                </span>
                                                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg text-white" style={{ backgroundColor: sikhGold }}>
                                                    {group.countries.length}
                                                </span>
                                            </button>
                                            {isOpen && (
                                                <div className="px-5 sm:px-6 pb-5 sm:pb-6 flex flex-wrap gap-2">
                                                    {group.countries.map((c) => (
                                                        <span key={c} className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-slate-50 text-slate-600">
                                                            {c}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}

                {tab === 'other' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 sm:space-y-10">
                        <div className="bg-white rounded-2xl sm:rounded-[32px] border border-slate-100 shadow-sm p-5 sm:p-10">
                            <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight mb-4" style={{ color: sikhBlue }}>
                                Not On The 126-Country List?
                            </h3>
                            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium">{OTHER_COUNTRIES_GUIDE.summary}</p>
                        </div>

                        <div className="rounded-2xl sm:rounded-[32px] p-5 sm:p-10 text-white relative overflow-hidden" style={{ backgroundColor: sikhBlue }}>
                            <div className="absolute top-0 right-0 w-64 h-64 opacity-10 blur-[100px] rounded-full" style={{ backgroundColor: sikhGold }} />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <ShieldAlert size={22} style={{ color: sikhGold }} />
                                    <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight">For Sangat Travelling From India</h3>
                                </div>
                                <p className="text-sm sm:text-base text-white/70 leading-relaxed font-medium mb-6">{OTHER_COUNTRIES_GUIDE.indiaNote}</p>
                                <a
                                    href="https://wa.me/923173176483?text=Sat%20Sri%20Akal!%20I'm%20enquiring%20about%20a%20Jatha%2Fgroup%20pilgrimage%20visa%20from%20India."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white text-[#002147] px-6 py-3.5 rounded-xl font-black tracking-widest text-[10px] uppercase hover:opacity-90 transition-all"
                                >
                                    <MessageCircle size={16} />
                                    Ask About Jatha Registration
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl sm:rounded-[32px] border border-slate-100 shadow-sm p-5 sm:p-8">
                            <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">{OTHER_COUNTRIES_GUIDE.disclaimer}</p>
                        </div>
                    </motion.div>
                )}
            </main>
            <Footer />
        </div>
    );
}
