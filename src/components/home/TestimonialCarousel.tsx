"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote } from "lucide-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechStart",
        content: "Jetset Business Center provided us with the perfect launchpad for our startup. The facilities are top-notch and the location is unbeatable.",
    },
    {
        name: "Mohammed Al-Fayed",
        role: "Director, Global Trade Co",
        content: "We've been with Jetset for 3 years now. Their support team is incredible and handles everything from mail to meeting room bookings seamlessly.",
    },
    {
        name: "Elena Petrova",
        role: "Freelance Consultant",
        content: "The coworking space is vibrant and professional. It's great to be surrounded by other motivated professionals. Highly recommended!",
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
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-16">
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

                                        <div className="flex flex-col items-center justify-center mb-6">
                                            <div className="flex items-center gap-2 mb-2">
                                                <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
                                                    <path
                                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                        fill="#4285F4"
                                                    />
                                                    <path
                                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                        fill="#34A853"
                                                    />
                                                    <path
                                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26-.19-.58z"
                                                        fill="#FBBC05"
                                                    />
                                                    <path
                                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                        fill="#EA4335"
                                                    />
                                                </svg>
                                                <span className="font-semibold text-gray-900">Google Reviews</span>
                                            </div>
                                            <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
                                                <span className="font-bold text-gray-900">4.9</span>
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className="w-4 h-4 text-[#FBBC05] fill-[#FBBC05]" />
                                                    ))}
                                                </div>
                                                <span className="text-xs text-gray-500 ml-1">(162)</span>
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
                        className="hidden md:flex absolute top-1/2 -left-12 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="hidden md:flex absolute top-1/2 -right-12 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}
