"use client";

import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { MapComponent } from "@/components/shared/GoogleMap";
import { ImageGallery } from "@/components/shared/ImageGallery";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { Wifi, Car, Clock, Printer, Coffee, ShieldCheck, MapPin, Building2, Eye, ArrowRight, FileCheck, Globe, Building, Users, CreditCard, Zap, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const amenities = [
    { icon: Wifi, label: "High-Speed Internet" },
    { icon: Car, label: "Parking Available" },
    { icon: Clock, label: "24/7 Access" },
    { icon: Printer, label: "Printing Services" },
    { icon: Coffee, label: "Pantry & Lounge" },
    { icon: ShieldCheck, label: "Security & CCTV" },
];

const keyFeatures = [
    {
        title: "Panoramic Views",
        description: "Breathtaking views of the Burj Khalifa and Dubai Canal from premium office spaces.",
        icon: <Eye className="w-6 h-6" />,
    },
    {
        title: "High-Speed Elevators",
        description: "Modern elevator systems ensuring quick and efficient access to all floors.",
        icon: <Zap className="w-6 h-6" />,
    },
    {
        title: "Dedicated Parking",
        description: "Convenient parking facilities for tenants and visitors.",
        icon: <Car className="w-6 h-6" />,
    },
    {
        title: "Retail Outlets",
        description: "On-site retail outlets for your convenience and daily needs.",
        icon: <Building2 className="w-6 h-6" />,
    },
    {
        title: "Commute Accessibility",
        description: "Ideal for teams requiring heavy commute accessibility with excellent transport links.",
        icon: <MapPin className="w-6 h-6" />,
    },
    {
        title: "DIFC Proximity",
        description: "Close proximity to Dubai International Financial Centre (DIFC).",
        icon: <Building className="w-6 h-6" />,
    },
];

const businessSetupSteps = [
    {
        title: "Activity Selection",
        description: "Choose your business activity and legal structure.",
        icon: <FileCheck className="w-6 h-6" />,
    },
    {
        title: "Trade Name",
        description: "Select and reserve your company trade name.",
        icon: <Building2 className="w-6 h-6" />,
    },
    {
        title: "Initial Approval",
        description: "Obtain initial approval from relevant authorities.",
        icon: <FileCheck className="w-6 h-6" />,
    },
    {
        title: "License Issuance",
        description: "Complete documentation and receive your business license.",
        icon: <CreditCard className="w-6 h-6" />,
    },
];

export default function PrimeTowerPage() {
    return (
        <>
            <PageHero
                title="Prime Tower"
                subtitle="Prime Tower, Business Bay, Dubai"
                image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Key Differentiators Banner */}
            <section className="py-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                        >
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Same-Day Tour Booking</h3>
                                <p className="text-white/90 text-sm">Book your office tour today and visit us the same day</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                        >
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">24-Hour Virtual Ejari Processing</h3>
                                <p className="text-white/90 text-sm">Get your Virtual Ejari processed within 24 hours</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-2/3">
                            <h2 className="text-3xl font-heading font-bold text-primary-700 mb-6">Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Prime Tower is a commercial building located in the heart of Business Bay, Dubai. It offers state-of-the-art office spaces with breathtaking views of the Burj Khalifa and the Dubai Water Canal. Our center in Prime Tower is designed to provide a professional and inspiring environment for businesses of all sizes.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">Location Highlights</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <MapPin className="w-5 h-5 text-secondary-500 shrink-0 mt-1" />
                                    <span>Direct views of Burj Khalifa</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <MapPin className="w-5 h-5 text-secondary-500 shrink-0 mt-1" />
                                    <span>Walking distance to Business Bay Metro Station</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <MapPin className="w-5 h-5 text-secondary-500 shrink-0 mt-1" />
                                    <span>Close proximity to Dubai Mall and DIFC</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <MapPin className="w-5 h-5 text-secondary-500 shrink-0 mt-1" />
                                    <span>Easy access to Sheikh Zayed Road</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <MapPin className="w-5 h-5 text-secondary-500 shrink-0 mt-1" />
                                    <span>Surrounded by 5-star hotels and restaurants</span>
                                </li>
                            </ul>
                        </div>

                        <div className="lg:w-1/3">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Amenities</h3>
                                <ul className="space-y-4">
                                    {amenities.map((amenity, index) => (
                                        <li key={index} className="flex items-center gap-3 text-gray-700">
                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-secondary-500 shadow-sm">
                                                <amenity.icon className="w-4 h-4" />
                                            </div>
                                            <span>{amenity.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <ServiceFeatures
                title="Key Features"
                subtitle="Premium amenities and strategic location advantages"
                features={keyFeatures}
            />

            {/* Business Setup Services */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-primary-700 mb-4">Business Setup Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Complete end-to-end business setup solutions for your company formation in Dubai
                        </p>
                    </div>

                    {/* Process Flow */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Process</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {businessSetupSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow h-full">
                                        <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4 text-primary-600">
                                            {step.icon}
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-sm font-bold text-primary-600">Step {index + 1}</span>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                                        <p className="text-gray-600 text-sm">{step.description}</p>
                                    </div>
                                    {index < businessSetupSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                            <ArrowRight className="w-6 h-6 text-secondary-500" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Service Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100">
                            <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center mb-4 text-secondary-600">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Mainland Licenses</h4>
                            <p className="text-gray-600 text-sm">100% foreign ownership where applicable. Trade anywhere in UAE with government contract eligibility.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100">
                            <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center mb-4 text-secondary-600">
                                <Building className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Free Zone Licenses</h4>
                            <p className="text-gray-600 text-sm">100% foreign ownership, no local partner required. Ideal for international trade and specific activities.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100">
                            <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center mb-4 text-secondary-600">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Visa Processing</h4>
                            <p className="text-gray-600 text-sm">Complete visa processing support for investors and staff members, including family visas.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100">
                            <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center mb-4 text-secondary-600">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Bank Account Opening</h4>
                            <p className="text-gray-600 text-sm">Corporate bank account opening support with guidance through the entire process.</p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/services/business-setup"
                            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold text-lg transition-colors"
                        >
                            Learn More About Business Setup
                        </Link>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-heading font-bold text-primary-700 mb-10 text-center">Gallery</h2>
                    <ImageGallery images={[
                        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1887&auto=format&fit=crop"
                    ]} />
                </div>
            </section>

            {/* Map */}
            <section className="h-[400px] relative">
                <MapComponent location="prime-tower" />
            </section>

            <CTASection />
        </>
    );
}
