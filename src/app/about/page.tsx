"use client"
import { motion } from 'framer-motion';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function AboutPage() {
    const sikhBlue = "#002147";
    const sikhGold = "#F5821F";

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <section className="pt-48 pb-20 px-6 sm:px-10 max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6 select-none">
                            <span
                                className="text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-sm"
                                style={{ backgroundColor: sikhGold }}
                            >
                                20+ Years
                            </span>
                            <span className="text-xs font-black uppercase tracking-widest text-gray-400">
                                of Professional Guiding
                            </span>
                        </div>

                        <h2 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase leading-[1.1] mb-10" style={{ color: sikhBlue }}>
                            Jewels of <br /><span style={{ color: sikhGold }}>Punjab.</span>
                        </h2>

                        <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
                            <p>
                                Sikh tourism Pakistan, heritage, culture and religious tourism are the jewels of Punjab. We proudly claim that Guru Nanak Dev Ji’s Janam Asthaan is in this part of sub-continent and spent most of his life time in the same region.
                            </p>
                            <p>
                                On factual basis, more than eighty percent of all the holy Sikh shrines and Sikh heritage is in Pakistan. Apart from the Gurdwara yatra tours to Nankana Sahib ji and Kartarpur, the region is also rich in other Sikh heritage sites that is part of pilgrimage. It is deplored that there is a lot of negative propaganda about the security situation of Pakistan.
                            </p>
                            <p>
                                As Sikh tours guide I have guided many yatra tours but all Sikh pilgrims to Pakistan found security situation satisfactory, at least with Sikh community. The people are so kind and hospitable towards Sikh pilgrims that one feels at home. I hope you would enjoy Nankana Sahib yatra tours and other Gurdwaras with us.
                            </p>
                            <p>
                                Pakistan is proud to be the cradle of Sikh heritage. After the Mughals’ downfall in the Indian sub-continent, the Sikhs took over India and ruled here for about two decades and during their era, there were a lot of new additions into Indian history which are quite visible if we concentrate a little on it. There are endless monuments, havelis, forts and Gurdwaras which are now part of the major landmarks of Pakistan.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative lg:mt-0 mt-12 w-full h-[500px] sm:h-[650px] rounded-[50px] sm:rounded-[60px] overflow-hidden shadow-2xl group bg-slate-900"
                    >
                        <img
                            src="/images/kartarpur-about.jpg"
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 select-none pointer-events-none transform group-hover:scale-105"
                            alt="Kartarpur Sahib Gurdwara Background Texture"
                        />

                        <div
                            className="absolute inset-0 transition-opacity duration-500 opacity-40 group-hover:opacity-10"
                            style={{ backgroundColor: sikhBlue }}
                        />
                        <div className="absolute inset-8 border border-white/20 rounded-[32px] sm:rounded-[40px] pointer-events-none" />
                    </motion.div>

                </div>
            </section>
            <section className="bg-slate-50 py-24 px-6 sm:px-10 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-12"
                    >
                        <div className="space-y-4">
                            <h3 className="text-xl font-black uppercase tracking-tight" style={{ color: sikhBlue }}>
                                The First Defence
                            </h3>
                            <div className="w-12 h-1 rounded" style={{ backgroundColor: sikhGold }} />
                            <p className="text-gray-600 leading-relaxed text-sm font-medium pt-2">
                                Jamrud Fort is one of the old forts built by Sikhs. The fort is at the main gateway to India (Khyber Pass), which was known as the first defence for India.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-black uppercase tracking-tight" style={{ color: sikhBlue }}>
                                The Fortresses Network
                            </h3>
                            <div className="w-12 h-1 rounded" style={{ backgroundColor: sikhGold }} />
                            <p className="text-gray-600 leading-relaxed text-sm font-medium pt-2">
                                There are also other forts in Shabqadar, Lockhart, Balahisar Fort, a fort in Bara, Michni, Bannu, Dera Ismail Khan, Haripur, Mansehra and Oghi. Some of the Sikh ruins at Khairabad, Akora Khattak and Jehangira forts are still to be explored, which were built by Sikhs.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-black uppercase tracking-tight" style={{ color: sikhBlue }}>
                                Legendary Milestones
                            </h3>
                            <div className="w-12 h-1 rounded" style={{ backgroundColor: sikhGold }} />
                            <p className="text-gray-600 leading-relaxed text-sm font-medium pt-2">
                                One can also witness the famed March 14, 1823, battle of Nowshera and the Samadh of Bhai Phoola Singh Akali, a general of the Sikh army who fell in the battle and was cremated on the site located near the northern bank of the Kabul river at Pir Sabak.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}