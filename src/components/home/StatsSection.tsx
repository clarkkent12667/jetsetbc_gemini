"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Happy Clients", value: "500+" },
    { label: "Premium Offices", value: "50+" },
    { label: "Square Feet", value: "20k+" },
    { label: "Years of Excellence", value: "10+" },
];

export function StatsSection() {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-primary-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                        >
                            <div className="text-4xl md:text-5xl font-bold text-secondary-500 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-primary-100 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
