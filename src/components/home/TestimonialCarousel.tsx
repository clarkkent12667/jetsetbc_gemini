"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote } from "lucide-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Manelyn",
        title: "The View & The Vibe",
        content: "A modern, well-equipped business center in Business Bay with a stunning view of the Burj Khalifa. Fast Wi-Fi, professional staff... Highly recommended for anyone looking for a premium, inspiring workspace.",
    },
    {
        name: "Mohamed",
        title: "Service Excellence",
        content: "Hannah, Jessie and Pauline were really nice and helpful. The center is calm... The facilities are well-maintained and the atmosphere is conducive to productivity.",
    },
    {
        name: "Sunaina",
        title: "Best in Class",
        content: "Having worked from various business centers... Jetset really stood out. Their office spaces are exceptionally well-organized... the access to a beautiful lounge area adds a touch of professionalism. I can't forget to mention the incredibly friendly reception staff.",
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
        <section className="py-16 md:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-4">
                        What Our Clients Say
                    </h2>
                    <div className="flex flex-col items-center gap-4 mb-2">
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                                <div className="flex items-center gap-1">
                                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    <span className="text-xl font-bold text-gray-900">4.9</span>
                                    <span className="text-gray-500">/5</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <span className="font-medium">162+</span>
                                <span className="text-sm">Google Reviews</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600">
                        Trusted by hundreds of businesses in Dubai.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto w-full">
                    <div className="overflow-hidden w-full" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                                    <div className="bg-gray-50 p-8 md:p-12 rounded-2xl text-center relative border border-gray-100">
                                        <Quote className="w-12 h-12 text-secondary-200 absolute top-8 left-8 opacity-50" />
                                        
                                        <div className="flex items-center justify-center gap-2 mb-6">
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                                ))}
                                            </div>
                                            <div className="flex items-center gap-1.5 ml-2 px-2 py-1 bg-white rounded-lg shadow-sm border border-gray-200">
                                                <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                                </svg>
                                                <span className="text-xs font-semibold text-gray-700">Google</span>
                                            </div>
                                        </div>

                                        <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                                            "{testimonial.content}"
                                        </p>

                                        <div>
                                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500">{testimonial.title}</p>
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
