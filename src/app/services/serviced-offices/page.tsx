import { PageHero } from "@/components/shared/PageHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServicePricing } from "@/components/services/ServicePricing";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { CTASection } from "@/components/home/CTASection";
import { Layout, Shield, Phone, Mail, Monitor, Coffee } from "lucide-react";

export const metadata = {
    title: "Office Work Space in Dubai | Jetset Business Center",
    description: "Premium office spaces in Dubai. Flexible terms, fully furnished, and ready to move in.",
};

export default function ServicedOfficesPage() {
    return (
        <>
            <PageHero
                title="Office Work Space in Dubai"
                subtitle="The Headquarters"
                image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Intro Section */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-primary-700 mb-6">Welcome to Jetset Business Center</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Your destination for premium office spaces in Dubai. Fully furnished, move-in-ready suites tailored for privacy and prestige. 
                        Strategically located on the 20th floor of Prime Tower, in the bustling heart of Business Bay, we offer an elegant and modern workspace designed to elevate your business.
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                        With Jetset Business Center, you get to enjoy the flexibility of choosing between short and long-term rentals. 
                        Our goal is to provide you with an office space in Dubai that matches your business aspirations.
                    </p>
                    <p className="text-lg text-gray-600">
                        All our offices are move-in ready, allowing you to settle in without delay. At Jetset Business Center, 
                        we are more than just a Dubai office space provider — we aim to be a partner in your success.
                    </p>
                    </div>
                </div>
            </section>

            <ServiceFeatures
                className="bg-gray-50"
                title="Premium Office Solutions"
                subtitle="Focus on growing your business while we manage your office."
                features={[
                    { title: "Fully Furnished", description: "Modern ergonomic furniture included for your entire team.", icon: <Layout className="w-6 h-6" /> },
                    { title: "Privacy & Security", description: "Secure private offices with 24/7 access control.", icon: <Shield className="w-6 h-6" /> },
                    { title: "Dedicated Phone Line", description: "Private landline number with call answering services.", icon: <Phone className="w-6 h-6" /> },
                    { title: "Mail Handling", description: "Professional mail and package handling services.", icon: <Mail className="w-6 h-6" /> },
                    { title: "IT Infrastructure", description: "Enterprise-grade IT infrastructure and support.", icon: <Monitor className="w-6 h-6" /> },
                    { title: "Pantry Access", description: "Unlimited coffee, tea, and water for you and your guests.", icon: <Coffee className="w-6 h-6" /> },
                ]}
            />

            <ServicePricing
                className="bg-white"
                title="Private Offices"
                plans={[
                    {
                        name: "Inner Offices",
                        price: "AED 50,000",
                        period: "/annum",
                        description: "Designed for focus and cost-efficiency.",
                        features: ["Utilities included", "24/7 access", "Front desk support", "Cleaning services", "Minimum lease: 3 months"],
                        popular: false,
                    },
                    {
                        name: "Outer Offices",
                        price: "AED 50,000",
                        period: "/annum",
                        description: "Premium suites with floor-to-ceiling windows and iconic city views.",
                        features: ["Utilities included", "24/7 access", "Front desk support", "Cleaning services", "Minimum lease: 3 months", "Floor-to-ceiling windows", "Iconic city views"],
                        popular: true,
                    },
                ]}
            />

            <ServiceFAQ
                className="bg-gray-50"
                items={[
                    { 
                        question: "How much does it cost to rent an office space in Dubai Business Bay?", 
                        answer: "Private offices start at AED 50,000 per annum, with a minimum lease of 3 months. This includes utilities, 24/7 access, front desk support, and cleaning services." 
                    },
                    { 
                        question: "What types of office spaces are available at Jetset Business Center?", 
                        answer: "We offer Inner offices (without window) and Outer offices (with window) featuring views of Burj Khalifa, Dubai Canal and Downtown." 
                    },
                    { 
                        question: "Are the offices fully furnished and move-in ready?", 
                        answer: "Yes, all our offices are fully furnished and move-in ready." 
                    },
                    { 
                        question: "Can I rent a small office in Dubai for a startup or freelancer?", 
                        answer: "Yes, we provide startup offices suitable for small teams and freelancers." 
                    },
                    { 
                        question: "Does Jetset Business Center provide meeting rooms and conference facilities?", 
                        answer: "Yes, we offer 2 hours complimentary meeting room usage. We also offer meeting rooms for external clients." 
                    },
                    { 
                        question: "What are the benefits of renting an office at Business Bay, Dubai?", 
                        answer: "Renting an office at Business Bay, Dubai offers prime location, excellent connectivity, modern infrastructure, and a prestigious business address." 
                    },
                    { 
                        question: "Can I rent an office in Dubai on a short-term basis?", 
                        answer: "Yes, we offer flexible lease terms with a minimum rental duration of 3 months." 
                    },
                    { 
                        question: "Do you provide business support services along with office rentals?", 
                        answer: "Yes, including reception support, meeting room access, and more to help your operations run smoothly." 
                    },
                    { 
                        question: "Is the location easily accessible by public transport and parking facilities?", 
                        answer: "Yes, near metro and public parking is available." 
                    },
                    { 
                        question: "How do I book a tour of Jetset Business Center's office spaces in Dubai?", 
                        answer: "Visit our website or contact us via WhatsApp or call at +971 58 577 9312. Tours available same-day. Contact us to schedule a viewing of the Burj Khalifa view offices." 
                    }
                ]}
            />

            <CTASection />
        </>
    );
}
