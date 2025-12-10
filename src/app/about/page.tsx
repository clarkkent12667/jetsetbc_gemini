import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { Target, Eye, Award, ShieldCheck, Sparkles, Heart, Handshake } from "lucide-react";

export const metadata = {
    title: "About Us | JetSet Business Center",
    description: "Learn about JetSet Business Center's mission to provide premium workspace solutions in Dubai.",
};

export default function AboutPage() {
    return (
        <>
            <PageHero
                title="Our Story"
                subtitle="Award-Winning Coworking And Private Offices in Dubai"
                image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
            />

            {/* Company Story */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6">
                                More Than Just an Office
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p className="font-semibold text-primary-700">
                                    Family-run business with over 20 years of real estate experience
                                </p>
                                <p>
                                    JetSet Business Center was founded with a singular vision: to create a workspace
                                    that empowers businesses to reach new heights. We understood that in a dynamic
                                    city like Dubai, professionals need more than just a desk—they need an environment
                                    that fosters growth, collaboration, and success.
                                </p>
                                <p>
                                    Located in the prestigious Business Bay district, our center in Prime Tower
                                    offers world-class facilities combined with personalized support services.
                                    Whether you're a freelancer, a startup, or an established enterprise, we provide
                                    flexible solutions tailored to your unique needs.
                                </p>
                                <p>
                                    Today, we are proud to be the home of hundreds of successful businesses, providing
                                    them with the infrastructure and community they need to thrive in the global market.
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

            {/* Awards Section */}
            <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-4">
                            Awards & Recognition
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our commitment to excellence has been recognized by industry leaders and our valued clients.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
                        <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl shadow-sm border border-primary-200 text-center">
                            <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-700 mb-2">Best Business Center</h3>
                            <p className="text-primary-600 font-semibold mb-1">Letswork, 2024</p>
                            <p className="text-gray-600 text-sm">Winner of the Year</p>
                        </div>
                        <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl shadow-sm border border-primary-200 text-center">
                            <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-700 mb-2">Best Newcomer</h3>
                            <p className="text-primary-600 font-semibold mb-1">Letswork, 2023</p>
                            <p className="text-gray-600 text-sm">Winner of the Year</p>
                        </div>
                        <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl shadow-sm border border-primary-200 text-center">
                            <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-700 mb-2">Client Satisfaction</h3>
                            <p className="text-primary-600 font-semibold mb-1">4.9/5 Star Rating</p>
                            <p className="text-gray-600 text-sm">162+ Google Reviews</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            The four pillars that guide everything we do and shape how we serve our clients.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary-700 mb-4">Transparency</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Clear pricing with no hidden operational costs. We believe in honest, upfront communication so you can make informed decisions about your workspace needs.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                            <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                                <Sparkles className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary-700 mb-4">Innovation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Continuously adapting to hybrid and remote work trends. We stay ahead of the curve to provide cutting-edge solutions that meet the evolving needs of modern businesses.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                            <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary-700 mb-4">Customer Obsession</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Treating every client—startup or enterprise—with equal respect. Your success is our success, and we're committed to delivering exceptional service regardless of your company size.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                                <Handshake className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary-700 mb-4">Relationship-Driven</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We prioritize long-term partnerships over transactional tenancy. Building trust and fostering meaningful connections is at the heart of how we operate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary-600">
                                <Eye className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600">
                                To redefine the business center concept in the UAE and GCC by combining luxury, convenience, and community. We envision a future where workspaces are hybrid-friendly, hospitality-driven, and technologically seamless.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary-600">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600">
                                To provide customized solutions for our clients' office and corporate setup requirements. We aim to remove the administrative burden of running an office so business owners can focus purely on revenue and growth.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary-600">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
                            <p className="text-gray-600">
                                Excellence, Integrity, Innovation, and Community. We believe in building
                                lasting relationships based on trust and mutual success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
