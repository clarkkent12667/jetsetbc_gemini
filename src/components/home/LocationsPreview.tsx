"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const locations = [
    {
        name: "Prime Tower",
        description: "Located in the heart of Business Bay with stunning views of Burj Khalifa.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        href: "/prime-tower",
    },
    {
        name: "Regal Tower",
        description: "A prestigious address offering premium office spaces and world-class amenities.",
        image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2069&auto=format&fit=crop",
        href: "/regal-tower",
    },
];

export function LocationsPreview() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-4"
                    >
                        Our Prime Locations
                    </motion.h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Strategically located in Business Bay, Dubai's central business district.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {locations.map((location, index) => (
                        <motion.div
                            key={location.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${location.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <div className="flex items-center gap-2 mb-2 text-secondary-400">
                                    <MapPin className="w-5 h-5" />
                                    <span className="text-sm font-semibold tracking-wider uppercase">Business Bay</span>
                                </div>
                                <h3 className="text-3xl font-bold mb-3">{location.name}</h3>
                                <p className="text-gray-300 mb-6 max-w-md">
                                    {location.description}
                                </p>
                                <Link
                                    href={location.href}
                                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-secondary-400 transition-colors"
                                >
                                    Explore Location
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
