"use client"
import { useState } from 'react';
import { GURDWARA_DATA } from '../../data/gurdwaras';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function GurdwarasPage() {
    const sikhBlue = "#002147";
    const sikhGold = "#F5821F";
    const [selectedGur, setSelectedGur] = useState<string | null>(null);

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 w-full overflow-x-hidden">
            <Navbar />

            <main className="flex-grow pt-28 sm:pt-40 md:pt-48 pb-16 md:pb-32 px-4 sm:px-6 md:px-10 max-w-[1400px] mx-auto w-full">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase mb-10 sm:mb-16 text-left" style={{ color: sikhBlue }}>
                    Pakistan <span style={{ color: sikhGold }}>Gurdwaras.</span>
                </h1>
                <div className="space-y-6 sm:space-y-8">
                    {GURDWARA_DATA.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl sm:rounded-[32px] shadow-sm hover:shadow-xl border border-slate-100 p-5 sm:p-8 md:p-12 flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 items-start transition-all duration-300 group"
                        >                            <div className="w-full md:w-1/3 lg:w-1/4 md:sticky md:top-28 border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0 md:pr-6 lg:pr-8 flex flex-row md:flex-col justify-between items-center md:items-start gap-4">
                                <div className="text-left">
                                    <h2
                                        className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight transition-colors duration-300"
                                        style={{ color: sikhBlue }}
                                    >
                                        {item.city}
                                    </h2>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1 hidden md:block">
                                        Historical Sites
                                    </p>
                                </div>
                                <span
                                    className="text-white text-xs font-mono font-bold px-3 py-1.5 rounded-xl md:mt-4 shrink-0"
                                    style={{ backgroundColor: sikhBlue }}
                                >
                                    {item.list.length.toString().padStart(2, '0')}
                                </span>
                            </div>
                            <div className="w-full flex-1">
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-6 lg:gap-x-8 text-left">
                                    {item.list.map((gur, idx) => {
                                        const isSelected = selectedGur === `${i}-${idx}`;

                                        return (
                                            <li
                                                key={idx}
                                                onClick={() => setSelectedGur(isSelected ? null : `${i}-${idx}`)}
                                                className={`flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-bold transition-all duration-300 ease-out cursor-pointer transform select-none
                                                    ${isSelected
                                                        ? '-translate-x-1 sm:-translate-x-2'
                                                        : 'text-gray-500 hover:-translate-x-0.5 sm:hover:-translate-x-1'
                                                    }`}
                                                style={{
                                                    color: isSelected ? sikhGold : undefined,
                                                }}
                                                onMouseEnter={(e) => {
                                                    if (!isSelected) e.currentTarget.style.color = sikhBlue;
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (!isSelected) e.currentTarget.style.color = '#6b7280';
                                                }}
                                            >
                                                <span
                                                    className={`text-[10px] sm:text-xs mt-1 sm:mt-1.5 transition-all duration-300 shrink-0 ${isSelected ? 'scale-125' : ''}`}
                                                    style={{ color: isSelected ? sikhGold : '#cbd5e1' }}
                                                >
                                                    ●
                                                </span>
                                                <span className="leading-snug break-words">
                                                    {gur}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}