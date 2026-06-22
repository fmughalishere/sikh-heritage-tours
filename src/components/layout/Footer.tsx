"use client"
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const sikhBlue = "#002147";
  const sikhGold = "#F5821F";

  return (
    <footer className="bg-slate-50 pt-10">
      <div className="w-full mx-auto bg-white p-12 md:p-20 text-slate-800 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
          <div className="space-y-8">
            <Image
              src="/images/Logo.png"
              alt="Sikh Heritage Tours Logo"
              width={200}
              height={90}
              className="h-24 w-auto object-contain"
            />
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/share/1CZA5XkAys/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  className="cursor-pointer transition-colors text-2xl"
                  style={{ color: sikhBlue }}
                  onMouseOver={(e) => (e.currentTarget.style.color = sikhGold)}
                  onMouseOut={(e) => (e.currentTarget.style.color = sikhBlue)}
                />
              </a>

              <a
                href="https://www.instagram.com/sikhheritageglobal?igsh=MzdhbmZkaHBhMzRz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="cursor-pointer transition-colors text-2xl"
                  style={{ color: sikhBlue }}
                  onMouseOver={(e) => (e.currentTarget.style.color = sikhGold)}
                  onMouseOut={(e) => (e.currentTarget.style.color = sikhBlue)}
                />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube
                  className="cursor-pointer transition-colors text-2xl"
                  style={{ color: sikhBlue }}
                  onMouseOver={(e) => (e.currentTarget.style.color = sikhGold)}
                  onMouseOut={(e) => (e.currentTarget.style.color = sikhBlue)}
                />
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
              <Mail size={18} style={{ color: sikhBlue }} />
              <span className="hover:text-[#c1272d] cursor-pointer transition">info@sikhheritageglobal.com</span>
            </div>
          </div>
          <div className="space-y-5">
            <h4 className="text-xl font-black border-b-2 pb-2 uppercase tracking-tighter" style={{ color: sikhBlue, borderColor: `${sikhGold}20` }}>
              Pakistan Address
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              101-Tipu Block Shakir Ali Museum Lane Garden Town Lahore Pakistan
            </p>
            <div className="flex items-center gap-2 font-black text-lg" style={{ color: sikhBlue }}>
              <Phone size={18} /> +92 317 317 6483
            </div>
          </div>
          <div className="space-y-5">
            <h4 className="text-xl font-black border-b-2 pb-2 uppercase tracking-tighter" style={{ color: sikhBlue, borderColor: `${sikhGold}20` }}>
              UAE Address
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Office No 314, 3rd Floor, Dar Al Wuheida Building - Al Doha St - Hor Al Anz East - Dubai - UAE
            </p>
            <div className="flex items-center gap-2 font-black text-lg" style={{ color: sikhBlue }}>
              <Phone size={18} /> +971 54 583 4874
            </div>
          </div>
           <div className="space-y-5">
            <h4 className="text-xl font-black border-b-2 pb-2 uppercase tracking-tighter" style={{ color: sikhBlue, borderColor: `${sikhGold}20` }}>
              Saudi Arabia Address
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Building # 3322, Street Amrou Ibn Saifi, Secondary # 8112,
              Al Sulary District, Riyadh — Postal Code: 14265
              <br />
              <span className="text-xs text-slate-400">Short Address: RQYA3322</span>
            </p>
            <div className="flex items-center gap-2 font-black text-lg" style={{ color: sikhBlue }}>
              <Phone size={18} /> +966 56 311 4674
            </div>
          </div>

        </div>
        <div className="mt-20 pt-8 border-t border-slate-100 text-center">
          <p className="text-[10px] font-bold text-slate-400 tracking-[2px] uppercase">
            © {new Date().getFullYear()} Big Way Umrah & Travels. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
