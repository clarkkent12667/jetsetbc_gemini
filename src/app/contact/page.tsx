import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapComponent } from "@/components/shared/GoogleMap";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
    title: "Contact Us | Jetset Business Center",
    description: "Get in touch with Jetset Business Center for office bookings and inquiries.",
};

export default function ContactPage() {
    return (
        <>
            <PageHero
                title="Get in Touch"
                subtitle="We're here to help you find the perfect workspace solution."
                image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                height="h-[40vh]"
            />

            <section className="py-12 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
                        {/* Contact Info */}
                        <div className="lg:w-1/3 space-y-8">
                            <div>
                                <h2 className="text-3xl font-heading font-bold text-primary-700 mb-6">Contact Information</h2>
                                <p className="text-gray-600 mb-8">
                                    Have questions? Reach out to us directly or fill out the form and we'll get back to you.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary-500 shadow-sm shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Our Locations</h4>
                                        <p className="text-gray-600">Prime Tower & Regal Tower,<br />Business Bay, Dubai, UAE</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary-500 shadow-sm shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                                        <p className="text-gray-600">+971 00 000 0000</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary-500 shadow-sm shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                                        <p className="text-gray-600">info@jetsetbc.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary-500 shadow-sm shrink-0">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Business Hours</h4>
                                        <p className="text-gray-600">Mon - Fri: 8:00 AM - 8:00 PM</p>
                                        <p className="text-gray-600">Sat: 9:00 AM - 5:00 PM</p>
                                        <p className="text-gray-600">Sun: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:w-2/3">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[400px] relative">
                <MapComponent />
            </section>
        </>
    );
}
