"use client";

import { FeatureCard } from "@/components/shared/FeatureCard";
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
    className?: string;
}

export function ServiceFeatures({ title, subtitle, features, className }: ServiceFeaturesProps) {
    return (
        <section className={`py-16 md:py-20 lg:py-24 ${className || "bg-white"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl font-heading font-bold text-primary-700 mb-4">{title}</h2>
                    {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full"
                        >
                            <FeatureCard
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                className="h-full"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
