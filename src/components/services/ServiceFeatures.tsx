"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Feature {
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface ServiceFeaturesProps {
    title: string;
    subtitle?: string;
    features: Feature[];
}

export function ServiceFeatures({ title, subtitle, features }: ServiceFeaturesProps) {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-heading font-bold text-primary-700 mb-4">{title}</h2>
                    {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-secondary-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
