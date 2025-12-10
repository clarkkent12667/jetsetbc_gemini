import { PageHero } from "@/components/shared/PageHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServicePricing } from "@/components/services/ServicePricing";
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
                className="bg-white"
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
            <ServicePricing
                className="bg-gray-50"
                title="Tailored Packages"
                plans={[
                    {
                        name: "Freezone Company",
                        price: "AED 5,000",
                        description: "Starting from",
                        features: ["100% Foreign Ownership", "No local partner needed", "Ideal for international trade"],
                    },
                    {
                        name: "Mainland Company",
                        price: "AED 15,000",
                        description: "Starting from",
                        features: ["Trade anywhere in UAE", "100% Ownership (for most activities)", "Government contracts eligibility"],
                        popular: true,
                    },
                    {
                        name: "Visa & Support",
                        price: "AED 3,500",
                        description: "Starting from",
                        features: ["Visa processing", "Corporate bank account opening", "Ongoing PRO support"],
                    },
                ]}
            />

            <ServiceFAQ
                className="bg-white"
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
