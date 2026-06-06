"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const sikhBlue = "#002147";
    const sikhGold = "#F5821F";

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Gurdwaras', href: '/gurdwaras' },
        { name: 'Forefather Villages', href: '/forefather-villages' },
    ];

    return (
        <nav
            className="fixed w-full z-50 backdrop-blur-md h-20 sm:h-24 flex items-center transition-all bg-white"
            style={{
                borderBottom: `1px solid ${sikhGold}26`
            }}
        >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-10 w-full flex justify-between items-center relative">
                <Link href="/">
                    <Image
                        src="/images/Logo.png"
                        alt="Logo"
                        width={180}
                        height={70}
                        className="h-12 sm:h-16 w-auto object-contain cursor-pointer"
                        priority
                    />
                </Link>
                <div className="hidden lg:flex gap-10 font-bold text-[12px] tracking-widest uppercase items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="transition-colors duration-300"
                            style={{ color: sikhBlue }}
                            onMouseEnter={(e) => e.currentTarget.style.color = sikhGold}
                            onMouseLeave={(e) => e.currentTarget.style.color = sikhBlue}
                        >
                            {link.name}
                        </Link>
                    ))}
                    
                    <Link
                        href="/contact"
                        className="px-8 py-3 rounded-full transition-all duration-300 shadow-md font-bold border"
                        style={{
                            backgroundColor: sikhBlue,
                            borderColor: sikhBlue,
                            color: '#ffffff'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#ffffff';
                            e.currentTarget.style.color = sikhGold;
                            e.currentTarget.style.borderColor = sikhGold;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = sikhBlue;
                            e.currentTarget.style.color = '#ffffff';
                            e.currentTarget.style.borderColor = sikhBlue;
                        }}
                    >
                        Book Now
                    </Link>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 transition-colors focus:outline-none"
                    style={{ color: sikhBlue }}
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            <div 
                className={`absolute top-20 sm:top-24 left-0 w-full bg-white border-b shadow-xl lg:hidden flex flex-col px-6 py-8 gap-6 font-bold text-sm tracking-widest uppercase items-start transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}
                style={{ borderColor: `${sikhGold}26` }}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="w-full py-2 border-b border-slate-50 transition-colors"
                        style={{ color: sikhBlue }}
                    >
                        {link.name}
                    </Link>
                ))}
                
                <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center px-8 py-4 rounded-xl transition-all font-bold text-xs"
                    style={{
                        backgroundColor: sikhBlue,
                        color: '#ffffff'
                    }}
                >
                    Book Now
                </Link>
            </div>
        </nav>
    );
}