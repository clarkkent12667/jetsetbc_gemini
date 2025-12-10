import { PageHero } from "@/components/shared/PageHero";
import { ServicePricing } from "@/components/services/ServicePricing";
import { CTASection } from "@/components/home/CTASection";

export const metadata = {
    title: "Pricing | Jetset Business Center",
    description: "Transparent pricing for coworking spaces, serviced offices, and virtual offices in Dubai.",
};

export default function PricingPage() {
    return (
        <>
            <PageHero
                title="Transparent Pricing"
                subtitle="Flexible plans designed to scale with your business."
                image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
            />

            <ServicePricing
                className="bg-white"
                title="Coworking Spaces"
                plans={[
                    {
                        name: "Daily Rate",
                        price: "AED 80",
                        period: "/day",
                        description: "Perfect for occasional use.",
                        features: ["Access from 9AM to 6PM", "High-speed Wi-Fi", "Complimentary coffee/tea", "Lounge access", "Hot Desk access (first-come basis)"],
                    },
                    {
                        name: "Monthly Membership",
                        price: "AED 1,800",
                        period: "/month",
                        description: "For freelancers and remote workers.",
                        features: ["24/7 Access", "Hot Desks (first-come basis) or Dedicated Desks (reserved)", "Private Cabins available", "Dedicated locker", "Meeting room credits", "Business address", "Printing credits"],
                        popular: true,
                    },
                    {
                        name: "Annual Membership",
                        price: "AED 18,000",
                        period: "/year",
                        description: "Best value for long-term commitment.",
                        features: ["All Monthly benefits", "Hot Desks (first-come basis) or Dedicated Desks (reserved)", "Private Cabins available", "2 months free", "Priority support", "Guest passes", "Event access"],
                    },
                ]}
            />

            <div className="hidden" />

            <ServicePricing
                className="bg-gray-50"
                title="Serviced Offices"
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

            <div className="hidden" />

            <ServicePricing
                className="bg-white"
                title="Virtual Ejari"
                plans={[
                    {
                        name: "Virtual Ejari",
                        price: "AED 8,500",
                        period: "/annum",
                        description: "Complete virtual office solution.",
                        features: ["Registered tenancy contract", "Unlimited inspections", "Same-day processing", "Business address", "Mail handling"],
                        popular: true,
                    },
                ]}
            />

            <CTASection />
        </>
    );
}
