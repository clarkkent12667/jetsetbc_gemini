import { PageHero } from "@/components/shared/PageHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServicePricing } from "@/components/services/ServicePricing";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { CTASection } from "@/components/home/CTASection";
import { MapPin, FileText, Phone, Mail, Globe, Briefcase } from "lucide-react";

export const metadata = {
    title: "Simplify Your Virtual Office Ejari in Dubai | Jetset Business Center",
    description: "Get a prestigious business address and Ejari for your Dubai company license. Hassle-free and cost-efficient.",
};

export default function VirtualEjariPage() {
    return (
        <>
            <PageHero
                title="Simplify Your Virtual Office Ejari in Dubai"
                subtitle="Establish your business presence in Dubai without the cost of a physical office."
                image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Intro Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-primary-700 mb-6">Hassle-Free Solutions</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Ejari is a system implemented by the Real Estate Regulatory Agency (RERA) to regulate and facilitate the rental market. 
                        The term “Ejari” means ‘my rent’ in Arabic. With Jetset’s virtual office Ejari in Dubai services, we ensure 
                        your business operations are in line with local regulations.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Hassle-Free Registration</h3>
                            <p className="text-gray-600">No need to navigate complex paperwork or governmental procedures; our team handles everything for you with expert Ejari services.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Flexibility</h3>
                            <p className="text-gray-600">Our virtual office Ejari in Dubai services are designed for those who desire a presence in the region without the need for physical office space.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Cost-Efficient</h3>
                            <p className="text-gray-600">Save on costs associated with traditional office spaces while still maintaining a professional image.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Access to Amenities</h3>
                            <p className="text-gray-600">Even with a Virtual Ejari, you can enjoy access to our meeting rooms, business lounges, and other premium amenities on a pay-as-you-go basis.</p>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceFeatures
                title="Professional Business Presence"
                subtitle="Meet all legal requirements for your business license."
                features={[
                    { title: "Prestigious Address", description: "Use our Prime Tower address for your business.", icon: <MapPin className="w-6 h-6" /> },
                    { title: "Ejari Contract", description: "Official tenancy contract required for DED licensing.", icon: <FileText className="w-6 h-6" /> },
                    { title: "Call Handling", description: "Dedicated local number with professional call answering.", icon: <Phone className="w-6 h-6" /> },
                    { title: "Mail Management", description: "Receipt and forwarding of your business mail.", icon: <Mail className="w-6 h-6" /> },
                    { title: "Meeting Access", description: "Access to meeting rooms at discounted rates.", icon: <Briefcase className="w-6 h-6" /> },
                    { title: "Online Presence", description: "Use the address for your website and Google Maps.", icon: <Globe className="w-6 h-6" /> },
                ]}
            />

            <ServicePricing
                title="Virtual Office Packages"
                plans={[
                    {
                        name: "Basic Virtual Office",
                        price: "AED 6,000",
                        period: "/year",
                        description: "Essential for license renewal.",
                        features: ["Business Address", "Ejari Contract", "Mail Handling", "Reception Services"],
                    },
                    {
                        name: "Premium Virtual Office",
                        price: "AED 9,000",
                        period: "/year",
                        description: "Complete business presence.",
                        features: ["All Basic features", "Dedicated Phone Number", "Call Answering", "5 hours Meeting Room/month", "Lounge Access"],
                        popular: true,
                    },
                ]}
            />

            <ServiceFAQ
                items={[
                    { 
                        question: "What is Ejari and why do I need it for my business in Dubai?", 
                        answer: "Ejari is Dubai’s official system for registering rental contracts, legally required for all businesses renting office or commercial space." 
                    },
                    { 
                        question: "Can I get Ejari with a virtual office, or do I need a physical space?", 
                        answer: "Yes, you can usually get Ejari with a virtual office if your provider is approved. It’s ideal for businesses needing an official address without full-time physical space." 
                    },
                    { 
                        question: "How does Jetset Business Center help with Ejari registration?", 
                        answer: "Jetset Business Center offers comprehensive support for Ejari registration, making it easier for businesses to comply with Dubai’s tenancy regulations." 
                    },
                    { 
                        question: "What documents are required for Virtual Ejari registration in Dubai?", 
                        answer: "Emirates ID, Passport copy, and Visa." 
                    },
                    { 
                        question: "How long does it take to complete Ejari registration through Jetset?", 
                        answer: "Jetset Business Center typically processes Virtual Ejari registrations in 1 business day, assuming all required documents are complete and accurate." 
                    },
                    { 
                        question: "Is Virtual Ejari accepted by government authorities and banks in Dubai?", 
                        answer: "Yes, Virtual Ejari is usually accepted by government departments and some banks in Dubai, as long as it’s issued by a RERA/DLD-approved provider." 
                    },
                    { 
                        question: "Can Jetset help me renew my Ejari when it expires?", 
                        answer: "Yes, Jetset Business Center does help with renewing Ejari when your lease expires." 
                    },
                    { 
                        question: "What are the benefits of choosing a Virtual Ejari instead of renting a full office?", 
                        answer: "Virtual Ejari is a cost-effective, flexible alternative to renting an office, meeting trade license requirements without high rents or long leases." 
                    },
                    { 
                        question: "Do I get access to meeting rooms or business facilities with a Virtual Ejari?", 
                        answer: "Yes, many virtual Ejari / virtual office providers do include access to meeting rooms or business facilities." 
                    },
                    { 
                        question: "How do I get started with Jetset’s Virtual Ejari service?", 
                        answer: "Contact Jetset, provide the relevant documents such as trade license, Emirates ID, visa, passport copies and the team will handle the rest. Usually within 1–2 business days." 
                    }
                ]}
            />

            <CTASection />
        </>
    );
}
