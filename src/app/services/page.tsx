import { PageHero } from "@/components/shared/PageHero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { CTASection } from "@/components/home/CTASection";

export const metadata = {
    title: "Our Services | Jetset Business Center",
    description: "Explore our premium workspace solutions in Dubai. From serviced offices to business setup, we have you covered.",
};

export default function ServicesPage() {
    return (
        <>
            <PageHero
                title="Our Services"
                subtitle="Comprehensive workspace solutions tailored to your needs."
                image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            />
            
            <ServicesOverview />
            
            <CTASection />
        </>
    );
}

