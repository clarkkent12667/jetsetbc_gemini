import { PageHero } from "@/components/shared/PageHero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { CTASection } from "@/components/home/CTASection";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";

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
            
            <ServiceFAQ
                className="bg-gray-50"
                items={[
                    { 
                        question: "Can I rent for a short term?", 
                        answer: "Yes, we offer minimum 3-month rentals for private offices and daily/weekly/monthly rates for coworking." 
                    },
                    { 
                        question: "Do you help with Trade Licenses?", 
                        answer: "Yes, we cover the full spectrum of Commercial, Professional, Industrial, and Tourism licenses." 
                    },
                    { 
                        question: "Can I use the address for my license?", 
                        answer: "Yes, our Virtual Ejari allows you to use our Prime/Regal Tower address as your official legal domicile." 
                    },
                    { 
                        question: "Is it furnished?", 
                        answer: "Yes, all offices come with high-end custom-made furniture." 
                    },
                    { 
                        question: "What is the setup time?", 
                        answer: "Tours can be booked same-day. Virtual Ejari is processed in 24 hours. Company formation typically takes 3–10 working days." 
                    },
                ]}
            />
            
            <CTASection />
        </>
    );
}

