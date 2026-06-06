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
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar />
            
            <main className="flex-grow pt-48 pb-32 px-6 sm:px-10 max-w-[1400px] mx-auto w-full">
                <h1 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase mb-20" style={{ color: sikhBlue }}>
                    Pakistan <span style={{ color: sikhGold }}>Gurdwaras.</span>
                </h1>

                <div className="space-y-8">
                    {GURDWARA_DATA.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-[32px] shadow-sm hover:shadow-xl border border-slate-100 p-8 sm:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-start transition-all duration-300 group"
                            style={{ 
                                borderColor: 'transparent' 
                            }}
                        >
                            <div className="md:w-1/4 w-full md:sticky md:top-32 border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-8 flex md:flex-col justify-between items-baseline md:justify-start gap-4">
                                <div>
                                    <h2 
                                        className="text-3xl sm:text-4xl font-black uppercase tracking-tight transition-colors duration-300"
                                        style={{ color: sikhBlue }}
                                    >
                                        {item.city}
                                    </h2>
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1 hidden md:block">
                                        Historical Sites
                                    </p>
                                </div>
                                <span 
                                    className="text-white text-xs font-mono font-bold px-3 py-1.5 rounded-xl md:mt-4"
                                    style={{ backgroundColor: sikhBlue }}
                                >
                                    {item.list.length.toString().padStart(2, '0')}
                                </span>
                            </div>

                            <div className="md:w-3/3 w-full">
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                    {item.list.map((gur, idx) => {
                                        const isSelected = selectedGur === `${i}-${idx}`;

                                        return (
                                            <li
                                                key={idx}
                                                onClick={() => setSelectedGur(isSelected ? null : `${i}-${idx}`)}
                                                className={`flex items-start gap-3 text-base font-bold transition-all duration-300 ease-out cursor-pointer transform select-none
                                                    ${isSelected
                                                        ? '-translate-x-2'
                                                        : 'text-gray-500 hover:-translate-x-1'
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
                                                    className={`text-xs mt-1.5 transition-all duration-300 ${isSelected ? 'scale-125' : ''}`}
                                                    style={{ color: isSelected ? sikhGold : '#cbd5e1' }}
                                                >
                                                    ●
                                                </span>
                                                <span className="leading-snug">
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