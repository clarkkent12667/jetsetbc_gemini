import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { Target, Eye, Award } from "lucide-react";

export const metadata = {
    title: "About Us | JetSet Business Center",
    description: "Learn about JetSet Business Center's mission to provide premium workspace solutions in Dubai.",
};

export default function AboutPage() {
    return (
        <>
            <PageHero
                title="Our Story"
                subtitle="Redefining the workspace experience in Dubai since 2015."
                image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
            />

            {/* Company Story */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6">
                                More Than Just an Office
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
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

            {/* Vision & Mission */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary-600">
                                <Eye className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600">
                                To be the leading provider of premium workspace solutions in the UAE,
                                recognized for our commitment to excellence and innovation.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary-600">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600">
                                To empower businesses by providing exceptional environments, flexible solutions,
                                and comprehensive support services that enable them to focus on what they do best.
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
