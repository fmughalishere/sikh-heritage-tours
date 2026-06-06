"use client"
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const sikhBlue = "#002147";
    const sikhGold = "#F5821F";

    return (
        <nav
            className="fixed w-full z-50 backdrop-blur-md h-24 flex items-center transition-all bg-white"
            style={{
                borderBottom: `1px solid ${sikhGold}26`
            }}
        >
            <div className="max-w-[1400px] mx-auto px-10 w-full flex justify-between items-center">
                <Link href="/">
                    <Image
                        src="/images/Logo.png"
                        alt="Logo"
                        width={180}
                        height={70}
                        className="h-16 w-auto object-contain cursor-pointer"
                        priority
                    />
                </Link>

                <div className="hidden lg:flex gap-10 font-bold text-[12px] tracking-widest uppercase items-center">
                    <Link
                        href="/"
                        className="transition-colors duration-300"
                        style={{ color: sikhBlue }}
                        onMouseEnter={(e) => e.currentTarget.style.color = sikhGold}
                        onMouseLeave={(e) => e.currentTarget.style.color = sikhBlue}
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className="transition-colors duration-300"
                        style={{ color: sikhBlue }}
                        onMouseEnter={(e) => e.currentTarget.style.color = sikhGold}
                        onMouseLeave={(e) => e.currentTarget.style.color = sikhBlue}
                    >
                        About Us
                    </Link>

                    <Link
                        href="/gurdwaras"
                        className="transition-colors duration-300"
                        style={{ color: sikhBlue }}
                        onMouseEnter={(e) => e.currentTarget.style.color = sikhGold}
                        onMouseLeave={(e) => e.currentTarget.style.color = sikhBlue}
                    >
                        Gurdwaras
                    </Link>

                    <Link
                        href="/forefather-villages"
                        className="transition-colors duration-300"
                        style={{ color: sikhBlue }}
                        onMouseEnter={(e) => e.currentTarget.style.color = sikhGold}
                        onMouseLeave={(e) => e.currentTarget.style.color = sikhBlue}
                    >
                        Forefather Villages
                    </Link>
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
            </div>
        </nav>
    );
}