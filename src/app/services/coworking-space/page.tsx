import { PageHero } from "@/components/shared/PageHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServicePricing } from "@/components/services/ServicePricing";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { CTASection } from "@/components/home/CTASection";
import { Wifi, Coffee, Printer, Lock, Users, Calendar } from "lucide-react";

export const metadata = {
    title: "Best Co-Working Space in Dubai | Jetset Business Center",
    description: "Flexible coworking spaces and hot desks in Business Bay, Dubai. Affordable rates with premium amenities.",
};

export default function CoworkingPage() {
    return (
        <>
            <PageHero
                title="Best Co-Working Space in Dubai"
                subtitle="The Community"
                image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Intro Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-primary-700 mb-6">Innovation and Collaboration</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Jetset Business Center brings you flexible desks in a high-end collaborative environment designed to facilitate innovation and collaboration. 
                        Perfectly positioned in the heart of Business Bay, Dubai, our co-working environment is more than just a workplace.
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                        We offer a variety of flexible workspace options to suit your needs, from hot desking to dedicated desks and private cabins. 
                        Our shared office space in Dubai provides a dynamic and productive environment, with high-speed internet and premium amenities.
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                        Whether you’re seeking a coworking space in Business Bay, Dubai, or looking for a community to grow with, 
                        Jetset Business Center offers strategically located workspaces with modern amenities and vibrant networking opportunities.
                    </p>
                    <p className="text-lg text-gray-600">
                        What sets Jetset apart is our thriving community. Our members come from diverse sectors, bringing varied experiences and cultures into our workspace in Dubai. 
                        Here, you can network, collaborate on projects, and grow your business in an inspiring environment.
                    </p>
                </div>
            </section>

            <ServiceFeatures
                title="Everything You Need to Work"
                subtitle="Focus on your work while we take care of the rest."
                features={[
                    { title: "High-Speed Internet", description: "Secure and fast Wi-Fi connectivity for seamless work.", icon: <Wifi className="w-6 h-6" /> },
                    { title: "Premium Amenities", description: "Complimentary coffee, tea, and access to lounge areas.", icon: <Coffee className="w-6 h-6" /> },
                    { title: "Printing Services", description: "Business-class printing, scanning, and copying facilities.", icon: <Printer className="w-6 h-6" /> },
                    { title: "Secure Access", description: "24/7 secure access with biometric entry systems.", icon: <Lock className="w-6 h-6" /> },
                    { title: "Community Events", description: "Networking events to connect with other members.", icon: <Users className="w-6 h-6" /> },
                    { title: "Meeting Rooms", description: "Discounted rates on meeting room bookings.", icon: <Calendar className="w-6 h-6" /> },
                ]}
            />

            <ServicePricing
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
                        features: ["24/7 Access", "Hot Desks (first-come basis) or Dedicated Desks (reserved)", "Dedicated locker", "Meeting room credits", "Business address", "Printing credits"],
                        popular: true,
                    },
                    {
                        name: "Annual Membership",
                        price: "AED 18,000",
                        period: "/year",
                        description: "Best value for long-term commitment.",
                        features: ["All Monthly benefits", "Hot Desks (first-come basis) or Dedicated Desks (reserved)", "2 months free", "Priority support", "Guest passes", "Event access"],
                    },
                ]}
            />

            <ServiceFAQ
                items={[
                    { 
                        question: "How much does it cost to rent a coworking space in Dubai Business Bay?", 
                        answer: "At Jetset, we offer coworking space access in Dubai Business Bay at a daily rate of AED 80, monthly AED 1,800, and annually AED 18,000." 
                    },
                    { 
                        question: "Can I choose between hot desk and dedicated desk options at Jetset?", 
                        answer: "Yes, we offer both Hot Desks (first-come basis) and Dedicated Desks (reserved) options to suit your preference." 
                    },
                    { 
                        question: "Is it possible to rent a coworking desk on a daily, weekly, or monthly basis?", 
                        answer: "Possible. We offer flexible plans for co-working spaces including daily passes and monthly memberships." 
                    },
                    { 
                        question: "What facilities are included in the shared office space?", 
                        answer: "WiFi included, Printing and scanning, 2 hours meeting room usage per week, and complimentary Coffee, tea, and water." 
                    },
                    { 
                        question: "Do you offer private cabins in addition to coworking desks?", 
                        answer: "Yes, we offer private cabins in addition to coworking desks. Ideal for teams or individuals seeking more privacy and a dedicated workspace." 
                    },
                    { 
                        question: "Is Jetset coworking space suitable for freelancers, startups, and small teams?", 
                        answer: "Yes, Jetset is well-suited for freelancers, startups, and small teams. It offers flexible workspace options, including coworking desks and private cabins." 
                    },
                    { 
                        question: "Can I use Jetset Business Center’s address as my business address in Dubai?", 
                        answer: "Yes, you can use Jetset Business Center’s address as your business address in Dubai, especially if you have acquired an Ejari. This makes it a valid and official business location for your company." 
                    },
                    { 
                        question: "Are there networking or community events for members at Jetset coworking space?", 
                        answer: "Our coworking space is open and designed for collaboration, making it the perfect space for regular events like networking mixers and community meetups." 
                    },
                    { 
                        question: "Is the coworking space easily accessible by metro, bus, or parking facilities?", 
                        answer: "Yes, we are conveniently located few minutes from metro, bus stop and parking area." 
                    },
                    { 
                        question: "How do I book a free trial or schedule a tour of Jetset’s coworking space in Dubai?", 
                        answer: "WhatsApp or call +971 58 577 9312, or email contact@jetsetbc.com." 
                    }
                ]}
            />

            <CTASection />
        </>
    );
}
