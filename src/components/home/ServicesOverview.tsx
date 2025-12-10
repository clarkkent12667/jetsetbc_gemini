"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Users, Monitor, MapPin, Building2 } from "lucide-react";

import { FeatureCard } from "@/components/shared/FeatureCard";

interface Service {
    title: string;
    subtitle?: string;
    description: string;
    icon: React.ReactNode;
    href: string;
}

const services: Service[] = [
    {
        title: "Coworking Spaces",
        subtitle: "The Community",
        description: "Flexible desks in a high-end collaborative environment.",
        icon: <Users className="w-7 h-7" />,
        href: "/services/coworking-space",
    },
    {
        title: "Serviced Offices",
        subtitle: "The Headquarters",
        description: "Fully furnished, move-in-ready suites tailored for privacy and prestige.",
        icon: <Building2 className="w-7 h-7" />,
        href: "/services/serviced-offices",
    },
    {
        title: "Meeting Rooms",
        description: "Professional meeting spaces equipped with state-of-the-art technology.",
        icon: <Monitor className="w-7 h-7" />,
        href: "/services/meeting-rooms",
    },
    {
        title: "Virtual Office & Ejari",
        description: "Prestigious business address and Ejari services for compliance.",
        icon: <MapPin className="w-7 h-7" />,
        href: "/services/virtual-ejari",
    },
    {
        title: "Business Setup",
        description: "End-to-end support for licensing, visas, and company formation.",
        icon: <Briefcase className="w-7 h-7" />,
        href: "/services/business-setup",
    },
];

export function ServicesOverview() {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-4"
                    >
                        Our Premium Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Everything you need to run your business successfully in Dubai, all under one roof.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={service.href}
                                className="block h-full"
                            >
                                <FeatureCard
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                    badge={service.subtitle}
                                />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
