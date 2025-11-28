"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Users, Monitor, MapPin, Building2 } from "lucide-react";

const services = [
    {
        title: "Coworking Spaces",
        description: "Flexible hot desks and dedicated workstations in a collaborative environment.",
        icon: Users,
        href: "/services/coworking-space",
    },
    {
        title: "Serviced Offices",
        description: "Fully furnished private offices tailored to your team's size and needs.",
        icon: Building2,
        href: "/services/serviced-offices",
    },
    {
        title: "Meeting Rooms",
        description: "Professional meeting spaces equipped with state-of-the-art technology.",
        icon: Monitor,
        href: "/services/meeting-rooms",
    },
    {
        title: "Virtual Office & Ejari",
        description: "Prestigious business address and Ejari services for compliance.",
        icon: MapPin,
        href: "/services/virtual-ejari",
    },
    {
        title: "Business Setup",
        description: "End-to-end support for licensing, visas, and company formation.",
        icon: Briefcase,
        href: "/services/business-setup",
    },
];

export function ServicesOverview() {
    return (
        <section className="py-12 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-16">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                className="block group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary-500/30 h-full"
                            >
                                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-500 transition-colors duration-300">
                                    <service.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
