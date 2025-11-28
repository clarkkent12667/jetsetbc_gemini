import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { Target, Eye, Award, Users, Heart, Zap } from "lucide-react";

export const metadata = {
    title: "About Us | Jetset Business Center",
    description: "Learn about Jetset Business Center's mission to provide premium workspace solutions in Dubai.",
};

export default function AboutPage() {
    return (
        <>
            <PageHero
                title="Our Story"
                subtitle="Redefining the workspace experience in Dubai."
                image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
            />

            {/* Company Story */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6">
                                How did Jetset Business Center get started?
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Jetset began as an initiative to support startups and entrepreneurs by providing flexible, premium workspaces designed for growth. What started as a small concept to help new businesses thrive has evolved into a leading provider of serviced offices in Dubai.
                                </p>
                                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">What inspired you to open in Dubai's Business Bay?</h3>
                                <p>
                                    Business Bay is one of Dubai's most dynamic commercial hubs — a strategic location that bridges Downtown Dubai and major business districts. We saw a clear gap in the market for luxury business spaces in this prime area that offered both affordability and high-end amenities.
                                </p>
                                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">What makes Jetset different?</h3>
                                <p>
                                    Jetset offers a service experience unmatched by traditional business centers. We don’t charge for essentials like meeting rooms, printing, or administrative support — they’re all part of the package. Our focus is on community and enabling your success.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1887&auto=format&fit=crop"
                                    alt="Office Interior"
                                    className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop"
                                    alt="Meeting Room"
                                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-4">
                            Our Values
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Integrity, transparency, and service excellence define every aspect of Jetset's operations.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary-600">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity & Excellence</h3>
                            <p className="text-gray-600">
                                We believe in building lasting relationships based on trust. We strive for excellence in every service we provide.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary-600">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Collaboration</h3>
                            <p className="text-gray-600">
                                We foster a community where businesses can connect, share ideas, and grow together.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary-600">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                            <p className="text-gray-600">
                                We are constantly evolving to meet the changing needs of modern businesses with innovative solutions.
                            </p>
                        </div>
                         <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary-600">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Client-Centric</h3>
                            <p className="text-gray-600">
                                Your success is our success. We tailor our services to help you achieve your business goals.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary-600">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Respect</h3>
                            <p className="text-gray-600">
                                We value diversity and treat everyone with dignity and respect, creating an inclusive environment for all.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
