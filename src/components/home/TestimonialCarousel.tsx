"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote } from "lucide-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechStart",
        content: "JetSet Business Center provided us with the perfect launchpad for our startup. The facilities are top-notch and the location is unbeatable.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    },
    {
        name: "Mohammed Al-Fayed",
        role: "Director, Global Trade Co",
        content: "We've been with JetSet for 3 years now. Their support team is incredible and handles everything from mail to meeting room bookings seamlessly.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    },
    {
        name: "Elena Petrova",
        role: "Freelance Consultant",
        content: "The coworking space is vibrant and professional. It's great to be surrounded by other motivated professionals. Highly recommended!",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
    },
];

export function TestimonialCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-600">
                        Trusted by hundreds of businesses in Dubai.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto w-full">
                    <div className="overflow-hidden w-full" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                                    <div className="bg-gray-50 p-8 md:p-12 rounded-2xl text-center relative">
                                        <Quote className="w-12 h-12 text-secondary-200 absolute top-8 left-8 opacity-50" />

                                        <div className="flex justify-center mb-6">
                                            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex justify-center gap-1 mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 text-secondary-500 fill-secondary-500" />
                                            ))}
                                        </div>

                                        <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                                            "{testimonial.content}"
                                        </p>

                                        <div>
                                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollPrev}
                        className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}
