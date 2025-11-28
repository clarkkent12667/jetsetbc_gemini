"use client";

import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { MapComponent } from "@/components/shared/GoogleMap";
import { ImageGallery } from "@/components/shared/ImageGallery";
import { Wifi, Car, Clock, Printer, Coffee, ShieldCheck, MapPin } from "lucide-react";

interface LocationTemplateProps {
    name: string;
    description: string;
    heroImage: string;
    address: string;
    highlights: string[];
    images: string[];
}

const amenities = [
    { icon: Wifi, label: "High-Speed Internet" },
    { icon: Car, label: "Parking Available" },
    { icon: Clock, label: "24/7 Access" },
    { icon: Printer, label: "Printing Services" },
    { icon: Coffee, label: "Pantry & Lounge" },
    { icon: ShieldCheck, label: "Security & CCTV" },
];

export function LocationTemplate({ name, description, heroImage, address, highlights, images }: LocationTemplateProps) {
    return (
        <>
            <PageHero
                title={name}
                subtitle={address}
                image={heroImage}
            />

            {/* Overview */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                        <div className="lg:w-2/3">
                            <h2 className="text-3xl font-heading font-bold text-primary-700 mb-6">Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {description}
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">Location Highlights</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700">
                                        <MapPin className="w-5 h-5 text-secondary-500 shrink-0 mt-1" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
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

            {/* Gallery */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-heading font-bold text-primary-700 mb-8 md:mb-10 text-center">Gallery</h2>
                    <ImageGallery images={images} />
                </div>
            </section>

            {/* Map */}
            <section className="h-[400px] relative">
                <MapComponent location={name.includes("Prime") ? "prime-tower" : "regal-tower"} />
            </section>

            <CTASection />
        </>
    );
}
