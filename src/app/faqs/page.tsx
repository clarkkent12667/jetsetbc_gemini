import { PageHero } from "@/components/shared/PageHero";
import { CategorizedFAQ } from "@/components/services/CategorizedFAQ";
import { CTASection } from "@/components/home/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | Jetset Business Center",
    description: "Find answers to common questions about our office spaces, business setup services, and workspace solutions in Dubai.",
};

export default function FAQsPage() {
    const faqCategories = [
        {
            title: "General Questions",
            items: [
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
            ]
        },
        {
            title: "Serviced Offices",
            items: [
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
                    answer: "Visit our website or contact us via WhatsApp or call at +971 585 779 312." 
                }
            ]
        },
        {
            title: "Coworking Space",
            items: [
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
                    question: "Can I use Jetset Business Center's address as my business address in Dubai?", 
                    answer: "Yes, you can use Jetset Business Center's address as your business address in Dubai, especially if you have acquired an Ejari. This makes it a valid and official business location for your company." 
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
                    question: "How do I book a free trial or schedule a tour of Jetset's coworking space in Dubai?", 
                    answer: "WhatsApp or call +971 58 577 9312, or email contact@jetsetbc.com." 
                }
            ]
        },
        {
            title: "Meeting Rooms",
            items: [
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
                    answer: "We have three meeting rooms to offer: Majilis (9-10 person capacity, VIP/Executive style), Conference Room (8 person capacity, Boardroom), and Standard Room (6 person capacity). Members also receive 2 hours of complimentary access per day." 
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
                    answer: "Yes. We recommend our reception lounge area for networking and breakout sessions. It's a comfortable, open space designed to encourage collaboration and informal meetings." 
                },
                { 
                    question: "Are your meeting rooms suitable for corporate seminars and workshops?", 
                    answer: "Yes, our meeting rooms are well-suited for corporate seminars, workshops, and training sessions. We offer different room options based on the size and format of events." 
                }
            ]
        },
        {
            title: "Virtual Ejari",
            items: [
                { 
                    question: "What is Ejari and why do I need it for my business in Dubai?", 
                    answer: "Ejari is Dubai's official system for registering rental contracts, legally required for all businesses renting office or commercial space." 
                },
                { 
                    question: "Can I get Ejari with a virtual office, or do I need a physical space?", 
                    answer: "Yes, you can usually get Ejari with a virtual office if your provider is approved. It's ideal for businesses needing an official address without full-time physical space." 
                },
                { 
                    question: "How does Jetset Business Center help with Ejari registration?", 
                    answer: "Jetset Business Center offers comprehensive support for Ejari registration, making it easier for businesses to comply with Dubai's tenancy regulations." 
                },
                { 
                    question: "What documents are required for Virtual Ejari registration in Dubai?", 
                    answer: "Emirates ID, Passport copy, and Visa." 
                },
                { 
                    question: "How long does it take to complete Ejari registration through Jetset?", 
                    answer: "Jetset Business Center offers same-day processing for Virtual Ejari registrations, assuming all required documents are complete and accurate." 
                },
                { 
                    question: "Is Virtual Ejari accepted by government authorities and banks in Dubai?", 
                    answer: "Yes, Virtual Ejari is usually accepted by government departments and some banks in Dubai, as long as it's issued by a RERA/DLD-approved provider." 
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
                    question: "How do I get started with Jetset's Virtual Ejari service?", 
                    answer: "Contact Jetset, provide the relevant documents such as trade license, Emirates ID, visa, passport copies and the team will handle the rest. Usually within 1–2 business days." 
                }
            ]
        },
        {
            title: "Business Setup",
            items: [
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
            ]
        }
    ];

    return (
        <>
            <PageHero
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about our services"
                image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            />
            
            <CategorizedFAQ categories={faqCategories} />
            
            <CTASection />
        </>
    );
}

