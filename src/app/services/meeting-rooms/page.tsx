import { PageHero } from "@/components/shared/PageHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServicePricing } from "@/components/services/ServicePricing";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { CTASection } from "@/components/home/CTASection";
import { Monitor, Video, Mic, Wifi, Coffee, Calendar } from "lucide-react";

export const metadata = {
    title: "Book Your Ideal Meeting Space in Dubai | Jetset Business Center",
    description: "Book professional meeting rooms and boardrooms in Business Bay. Equipped with AV technology.",
};

export default function MeetingRoomsPage() {
    return (
        <>
            <PageHero
                title="Book Your Ideal Meeting Space in Dubai"
                subtitle="Impress your clients with our state-of-the-art meeting facilities."
                image="https://images.unsplash.com/photo-1517502884422-41e157d44301?q=80&w=2074&auto=format&fit=crop"
            />

            <ServiceFeatures
                title="Designed for Productivity"
                subtitle="Everything you need for successful presentations and collaborations."
                features={[
                    { title: "HD Projectors/Screens", description: "Crystal clear displays for your presentations.", icon: <Monitor className="w-6 h-6" /> },
                    { title: "Video Conferencing", description: "Support for hybrid meetings with in-person and virtual attendees.", icon: <Video className="w-6 h-6" /> },
                    { title: "Audio Systems", description: "Premium audio for clear communication.", icon: <Mic className="w-6 h-6" /> },
                    { title: "Secure Wi-Fi", description: "Dedicated bandwidth for confidential business discussions.", icon: <Wifi className="w-6 h-6" /> },
                    { title: "Breakout Areas", description: "Access to reception lounge for networking and informal meetings.", icon: <Coffee className="w-6 h-6" /> },
                    { title: "Easy Booking", description: "Last-minute bookings welcome, subject to availability.", icon: <Calendar className="w-6 h-6" /> },
                ]}
            />

            <ServicePricing
                title="Room Rates"
                plans={[
                    {
                        name: "Standard Meeting Room",
                        price: "AED 100",
                        period: "/hour",
                        description: "Capacity: 6 people",
                        features: ["Whiteboard", "TV Screen", "Wi-Fi", "Water & Coffee"],
                    },
                    {
                        name: "Conference Room",
                        price: "AED 150",
                        period: "/hour",
                        description: "Capacity: 8 people",
                        features: ["Projector", "Video Conferencing", "Premium Seating", "Dedicated Support"],
                        popular: true,
                    },
                    {
                        name: "Majlis",
                        price: "AED 250",
                        period: "/hour",
                        description: "Capacity: 9-10 people",
                        features: ["Traditional Style", "Premium Amenities", "Video Conferencing", "VIP Experience"],
                    },
                ]}
            />

            <ServiceFAQ
                items={[
                    { 
                        question: "Can I customize the meeting room setup (boardroom, classroom, U-shape) to fit my event?", 
                        answer: "Our meeting rooms come with a standard setup, but we can reconfigure the arrangement to match the requirement." 
                    },
                    { 
                        question: "Do you provide on-site technical support during meetings or presentations?", 
                        answer: "Yes, we can provide technical support to ensure your meeting runs smoothly." 
                    },
                    { 
                        question: "Is it possible to host hybrid meetings with both in-person and virtual attendees?", 
                        answer: "Our meeting rooms are designed to support both in-person and virtual participation, with smart TVs to connect remote attendees." 
                    },
                    { 
                        question: "Can I brand the meeting room with my company logo or presentation materials for clients?", 
                        answer: "Yes, we can help display the company logo or set up presentation materials during the booking." 
                    },
                    { 
                        question: "How many people can your meeting and conference rooms accommodate?", 
                        answer: "We have three meeting rooms to offer: Majlis (9-10 people), Conference (8 people), and Standard (6 people)." 
                    },
                    { 
                        question: "Is catering or coffee service available inside the meeting room?", 
                        answer: "Food is not allowed inside the meeting rooms. However, we have a dining area within our business centers, where you can enjoy food and beverages from our in-house coffee shop." 
                    },
                    { 
                        question: "Can I book last-minute meeting rooms in Dubai if a client visit comes up unexpectedly?", 
                        answer: "Yes, last-minute bookings are welcome, subject to availability." 
                    },
                    { 
                        question: "Do your meeting rooms come with secure Wi-Fi for confidential business discussions?", 
                        answer: "Yes, all our meeting rooms are equipped with secure, high-speed Wi-Fi to support confidential meetings and business communications." 
                    },
                    { 
                        question: "Are there networking lounges or breakout areas available alongside the meeting rooms?", 
                        answer: "Yes. We recommend our reception lounge area for networking and breakout sessions. It’s a comfortable, open space designed to encourage collaboration and informal meetings." 
                    },
                    { 
                        question: "Are your meeting rooms suitable for corporate seminars and workshops?", 
                        answer: "Yes, our meeting rooms are well-suited for corporate seminars, workshops, and training sessions. We offer different room options based on the size and format of events." 
                    }
                ]}
            />

            <CTASection />
        </>
    );
}
