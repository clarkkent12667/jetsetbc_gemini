import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-primary-700 relative overflow-hidden w-full">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary-500 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                    Ready to Find Your Perfect Workspace?
                </h2>
                <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
                    Join the Jetset community today and take your business to new heights.
                    Book a tour or contact us for a personalized quote.
                </p>
                <p className="text-lg text-primary-200 mb-10 max-w-2xl mx-auto">
                    Tours available same-day. Contact us to schedule a viewing of the Burj Khalifa view offices.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/book-tour"
                        className="px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center gap-2"
                    >
                        Book a Tour
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 rounded-full font-semibold text-lg transition-all"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
