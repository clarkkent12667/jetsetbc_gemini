"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden w-full">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2301&auto=format&fit=crop')",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white max-w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight px-2">
                        Elevate Your Business in <br className="hidden sm:block" />
                        <span className="text-secondary-500">Dubai's Prime Locations</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                        Premium coworking spaces, serviced offices, and business setup services
                        in the heart of Business Bay. Experience luxury, flexibility, and success.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/book-tour"
                            className="px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center gap-2"
                        >
                            Book a Tour
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/pricing"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold text-lg transition-all"
                        >
                            View Pricing
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
