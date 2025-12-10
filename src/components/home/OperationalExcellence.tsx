"use client";

import { motion } from "framer-motion";
import { 
    Coffee, 
    UtensilsCrossed, 
    Wifi, 
    Printer, 
    Phone, 
    Users,
    Sparkles
} from "lucide-react";

interface Amenity {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
}

const amenities: Amenity[] = [
    {
        title: "Complimentary Beverages",
        description: "Unlimited tea, coffee, and water for staff and guests",
        icon: Coffee,
    },
    {
        title: "Dining",
        description: "In-house restaurant featuring a curated chef's menu",
        icon: UtensilsCrossed,
    },
    {
        title: "Connectivity",
        description: "Enterprise-grade Wi-Fi and secure IT infrastructure",
        icon: Wifi,
    },
    {
        title: "Administrative Support",
        description: "Free printing and scanning facilities",
        icon: Printer,
    },
    {
        title: "Front of House",
        description: "Call management and guest greeting",
        icon: Phone,
    },
    {
        title: "Networking",
        description: "Curated community events to facilitate introductions between tenants",
        icon: Users,
    },
];

export function OperationalExcellence() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -z-10" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-4"
                    >
                        <Sparkles className="w-6 h-6 text-secondary-600" />
                        <span className="text-sm font-semibold text-secondary-600 uppercase tracking-wider">
                            All-Inclusive Model
                        </span>
                        <Sparkles className="w-6 h-6 text-secondary-600" />
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-700 mb-4"
                    >
                        Operational Excellence & Amenities
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
                    >
                        Hospitality-grade features designed to elevate your work experience. 
                        Everything you need is included—no hidden fees, no extra charges.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {amenities.map((amenity, index) => (
                        <motion.div
                            key={amenity.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="group relative"
                        >
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-secondary-500/50 h-full relative overflow-hidden">
                                {/* Hover gradient effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/0 to-primary-500/0 group-hover:from-secondary-500/5 group-hover:to-primary-500/5 transition-all duration-300 rounded-2xl" />
                                
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                                        <amenity.icon className="w-8 h-8 text-white" />
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                                        {amenity.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 leading-relaxed">
                                        {amenity.description}
                                    </p>
                                    
                                    {/* Premium indicator badge */}
                                    <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-secondary-600">
                                        <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full"></span>
                                        Included
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* All-Inclusive CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block bg-gradient-to-r from-secondary-500/10 to-primary-500/10 rounded-2xl p-8 border-2 border-secondary-500/20">
                        <p className="text-lg font-semibold text-gray-800 mb-2">
                            Experience the All-Inclusive Difference
                        </p>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            All amenities and services are included in your membership. 
                            No surprise charges, no à la carte fees—just premium hospitality, always.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

