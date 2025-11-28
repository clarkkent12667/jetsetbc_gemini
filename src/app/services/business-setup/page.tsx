import { PageHero } from "@/components/shared/PageHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { CTASection } from "@/components/home/CTASection";
import { FileCheck, Globe, Building, Users, CreditCard, Award } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "New Company Setup in Dubai | Hassle-Free Business Solutions",
    description: "Complete business setup solutions in Dubai. Mainland, Freezone, and Offshore company formation.",
};

export default function BusinessSetupPage() {
    return (
        <>
            <PageHero
                title="New Company Setup in Dubai"
                subtitle="Hassle-free business solutions for company formation in Dubai and the UAE."
                image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
            />

            <ServiceFeatures
                title="End-to-End Company Formation"
                subtitle="We handle the paperwork so you can focus on your business."
                features={[
                    { title: "License Issuance", description: "Assistance with Commercial, Professional, Industrial, and Tourism licenses.", icon: <FileCheck className="w-6 h-6" /> },
                    { title: "Visa Processing", description: "Employment and investor visa processing services.", icon: <Globe className="w-6 h-6" /> },
                    { title: "Corporate Banking", description: "Support with opening corporate bank accounts.", icon: <Building className="w-6 h-6" /> },
                    { title: "PRO Services", description: "Document clearing, government liaison, and license renewal.", icon: <Award className="w-6 h-6" /> },
                    { title: "Local Sponsorship", description: "Reliable local sponsors for Mainland companies where required.", icon: <Users className="w-6 h-6" /> },
                    { title: "Special Approvals", description: "Assistance with external approvals for healthcare, education, finance, etc.", icon: <CreditCard className="w-6 h-6" /> },
                ]}
            />

            {/* Custom Pricing/Consultation Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-heading font-bold text-primary-700 mb-6">Tailored Packages</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        Every business is unique. We offer customized setup packages based on your specific activity,
                        jurisdiction, and requirements.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Freezone Company</h3>
                            <p className="text-gray-500 mb-4">Starting from</p>
                            <p className="text-3xl font-bold text-primary-600 mb-6">AED 5,000</p>
                            <ul className="text-left space-y-2 mb-8 text-sm text-gray-600">
                                <li>• 100% Foreign Ownership</li>
                                <li>• No local partner needed</li>
                                <li>• Ideal for international trade</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-secondary-500 relative">
                            <div className="absolute top-0 right-0 bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Mainland Company</h3>
                            <p className="text-gray-500 mb-4">Starting from</p>
                            <p className="text-3xl font-bold text-primary-600 mb-6">AED 15,000</p>
                            <ul className="text-left space-y-2 mb-8 text-sm text-gray-600">
                                <li>• Trade anywhere in UAE</li>
                                <li>• 100% Ownership (for most activities)</li>
                                <li>• Government contracts eligibility</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Visa & Support</h3>
                            <p className="text-gray-500 mb-4">Starting from</p>
                            <p className="text-3xl font-bold text-primary-600 mb-6">AED 3,500</p>
                            <ul className="text-left space-y-2 mb-8 text-sm text-gray-600">
                                <li>• Visa processing</li>
                                <li>• Corporate bank account opening</li>
                                <li>• Ongoing PRO support</li>
                            </ul>
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold text-lg transition-colors"
                    >
                        Get a Free Consultation
                    </Link>
                </div>
            </section>

            <ServiceFAQ
                items={[
                    { 
                        question: "What are the basic steps to start a business in Dubai?", 
                        answer: "1. Choose your business activity. 2. Select legal structure. 3. Choose a trade name. 4. Apply for initial approval. 5. Secure office space/virtual address. 6. Get necessary approvals. 7. Submit docs & pay fees. 8. Open bank account. 9. Apply for visa." 
                    },
                    { 
                        question: "How long does it take to set up a new company in Dubai?", 
                        answer: "Typically 3 to 10 working days, depending on the business type, jurisdiction (Mainland or Free Zone), and approvals required." 
                    },
                    { 
                        question: "Do I need a local partner or sponsor to open a business in Dubai?", 
                        answer: "For Free Zones, no local partner is needed. For Mainland, foreigners can now own 100% of many businesses, though some activities still require a local Emirati partner or service agent." 
                    },
                    { 
                        question: "Can foreigners fully own their business in Dubai?", 
                        answer: "Yes. Free Zones allow 100% foreign ownership. Mainland also allows 100% foreign ownership for most activities." 
                    },
                    { 
                        question: "What types of business licenses are available in Dubai?", 
                        answer: "Commercial License (trading/retail), Professional License (services/consulting), Industrial License (manufacturing), and Tourism License." 
                    },
                    { 
                        question: "How much does it usually cost to start a business in Dubai?", 
                        answer: "Costs vary. Free Zones start from AED 5,000 to AED 25,000+. Mainland starts around AED 15,000 to AED 50,000+, depending on activity, office space, and visa." 
                    },
                    { 
                        question: "Does Jetset help with visas and residency for business owners and staff?", 
                        answer: "Yes, we assist with visa processing for business owners, employees, and family members." 
                    },
                    { 
                        question: "Can you also assist with opening a company bank account in Dubai?", 
                        answer: "Yes, we provide support in opening corporate bank accounts." 
                    },
                    { 
                        question: "Are there any business activities that need special approvals in Dubai?", 
                        answer: "Yes. Activities in healthcare, education, finance, legal services, media, and food sectors may require external approvals from regulators (e.g., DHA, KHDA, DFSA)." 
                    },
                    { 
                        question: "Does Jetset provide ongoing support after my company is set up?", 
                        answer: "Yes. Jetset offers post-setup services including PRO support, license renewal, and business advisory." 
                    }
                ]}
            />

            <CTASection />
        </>
    );
}
