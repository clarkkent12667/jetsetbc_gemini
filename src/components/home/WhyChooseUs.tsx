"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Wifi, Coffee, ShieldCheck, Users } from "lucide-react";

const benefits = [
    {
        title: "Prime Locations",
        description: "Prestigious addresses in Business Bay, near Burj Khalifa and Dubai Mall.",
        icon: MapPin,
    },
    {
        title: "24/7 Access",
        description: "Work on your schedule with round-the-clock secure access to your office.",
        icon: Clock,
    },
    {
        title: "High-Speed Internet",
        description: "Enterprise-grade connectivity ensuring you stay productive and connected.",
        icon: Wifi,
    },
    {
        title: "Premium Amenities",
        description: "Complimentary coffee, tea, and access to modern lounge areas.",
        icon: Coffee,
    },
    {
        title: "Business Support",
        description: "Dedicated reception, mail handling, and IT support services.",
        icon: ShieldCheck,
    },
    {
        title: "Vibrant Community",
        description: "Network with like-minded professionals and grow your business.",
        icon: Users,
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6"
                        >
                            Why Choose Jetset Business Center?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-600 text-lg mb-8 leading-relaxed"
                        >
                            We provide more than just an office space. We offer a comprehensive ecosystem
                            designed to help your business thrive in Dubai's competitive market.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600">
                                            <benefit.icon className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                                        <p className="text-sm text-gray-600">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
                                alt="Modern Office Space"
                                className="w-full h-auto"
                            />
                        </motion.div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
