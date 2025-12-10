"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Wifi, Coffee, ShieldCheck, Users } from "lucide-react";

import { FeatureCard } from "@/components/shared/FeatureCard";

const benefits = [
    {
        title: "Prime Locations",
        description: "Prestigious addresses in Business Bay, near Burj Khalifa and Dubai Mall.",
        icon: <MapPin className="w-7 h-7" />,
    },
    {
        title: "24/7 Access",
        description: "Work on your schedule with round-the-clock secure access to your office.",
        icon: <Clock className="w-7 h-7" />,
    },
    {
        title: "High-Speed Internet",
        description: "Enterprise-grade connectivity ensuring you stay productive and connected.",
        icon: <Wifi className="w-7 h-7" />,
    },
    {
        title: "Premium Amenities",
        description: "Complimentary coffee, tea, and access to modern lounge areas.",
        icon: <Coffee className="w-7 h-7" />,
    },
    {
        title: "Business Support",
        description: "Dedicated reception, mail handling, and IT support services.",
        icon: <ShieldCheck className="w-7 h-7" />,
    },
    {
        title: "Vibrant Community",
        description: "Network with like-minded professionals and grow your business.",
        icon: <Users className="w-7 h-7" />,
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6"
                    >
                        Why Choose Jetset Business Center?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        We provide more than just an office space. We offer a comprehensive ecosystem
                        designed to help your business thrive in Dubai's competitive market.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="h-full"
                        >
                            <FeatureCard
                                icon={benefit.icon}
                                title={benefit.title}
                                description={benefit.description}
                                className="bg-white"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
