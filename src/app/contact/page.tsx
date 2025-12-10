import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapComponent } from "@/components/shared/GoogleMap";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
    title: "Contact Us | JetSet Business Center",
    description: "Get in touch with JetSet Business Center for office bookings and inquiries.",
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

            <section className="py-16 md:py-20 lg:py-24 bg-white w-full overflow-x-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 w-full">
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
                                        <h4 className="font-bold text-gray-900 mb-1">Locate Us</h4>
                                        <p className="text-gray-600">Prime Tower & Regal Tower,<br />Business Bay, Dubai</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary-500 shadow-sm shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Phone/WhatsApp</h4>
                                        <a href="tel:+971585779312" className="text-gray-600 hover:text-primary-600 transition-colors">+971 58 577 9312</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary-500 shadow-sm shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Landline</h4>
                                        <a href="tel:+97146657555" className="text-gray-600 hover:text-primary-600 transition-colors">04 665 7555</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary-500 shadow-sm shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                                        <a href="mailto:contact@jetsetbc.com" className="text-gray-600 hover:text-primary-600 transition-colors">contact@jetsetbc.com</a>
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

                            <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-200">
                                <p className="text-sm text-primary-800">
                                    <strong>Tours available same-day.</strong> Contact us to schedule a viewing of the Burj Khalifa view offices.
                                </p>
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
            <section className="h-[400px] md:h-[500px] relative w-full overflow-hidden mb-0 pb-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.2592949248583!2d55.2666454784102!3d25.188412174622673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f697de05c6e1f%3A0x9f530a5a77a5f1d2!2sJetset%20Business%20Center%20-%20Prime%20Tower!5e1!3m2!1sen!2sus!4v1764343207847!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, margin: 0, padding: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Jetset Business Center - Prime Tower"
                    className="w-full h-full m-0 p-0 block"
                />
            </section>
        </>
    );
}
