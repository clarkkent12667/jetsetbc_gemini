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
                title="Coworking Spaces"
                plans={[
                    {
                        name: "Day Pass",
                        price: "AED 80",
                        period: "/day",
                        description: "Perfect for occasional use.",
                        features: ["Access from 9AM to 6PM", "High-speed Wi-Fi", "Complimentary coffee/tea", "Lounge access"],
                    },
                    {
                        name: "Monthly Membership",
                        price: "AED 1,800",
                        period: "/month",
                        description: "For freelancers and remote workers.",
                        features: ["24/7 Access", "Dedicated locker", "Meeting room credits", "Business address", "Printing credits"],
                        popular: true,
                    },
                    {
                        name: "Annual Membership",
                        price: "AED 18,000",
                        period: "/year",
                        description: "Best value for long-term commitment.",
                        features: ["All Monthly benefits", "2 months free", "Priority support", "Guest passes", "Event access"],
                    },
                ]}
            />

            <div className="bg-white h-px w-full" />

            <ServicePricing
                title="Serviced Offices"
                plans={[
                    {
                        name: "Small Office",
                        price: "AED 2,500",
                        period: "/month",
                        description: "Ideal for 1-2 people.",
                        features: ["Fully furnished", "Ejari included", "High-speed internet", "Utility bills included", "Cleaning services"],
                    },
                    {
                        name: "Medium Office",
                        price: "AED 5,000",
                        period: "/month",
                        description: "Perfect for teams of 3-5.",
                        features: ["All Small Office features", "Meeting room credits", "Dedicated parking spot", "Logo on entrance", "Priority support"],
                        popular: true,
                    },
                    {
                        name: "Large Office",
                        price: "AED 10,000+",
                        period: "/month",
                        description: "For larger teams of 6+.",
                        features: ["Custom layout options", "Multiple parking spots", "Executive furniture", "Private server rack", "Dedicated account manager"],
                    },
                ]}
            />

            <div className="bg-white h-px w-full" />

            <ServicePricing
                title="Virtual Office"
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

            <CTASection />
        </>
    );
}
