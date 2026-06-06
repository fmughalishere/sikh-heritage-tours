import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sikh Heritage Global | Reconnect With Your Roots",
  description: "Experience the ultimate Sikh Yatra in Pakistan. We specialize in Gurdwara Yatra tours, Ancestral Roots tracking, and cultural immersion across Punjab.",
  keywords: "Sikh Tourism, Pakistan Gurdwaras, Kartarpur Sahib Yatra, Nankana Sahib, Ancestral Village Tour, Sikh Heritage",
  icons: {
    icon: "/images/Logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} font-inter antialiased bg-white text-[#002147] selection:bg-[#F5821F] selection:text-white`}
      >        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}