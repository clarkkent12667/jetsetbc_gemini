import { LocationTemplate } from "@/components/locations/LocationTemplate";

export const metadata = {
    title: "Regal Tower Office Space | Jetset Business Center",
    description: "Luxury office spaces in Regal Tower, Business Bay. A prestigious address for your business.",
};

export default function RegalTowerPage() {
    return (
        <LocationTemplate
            name="Regal Tower"
            address="Regal Tower, Business Bay, Dubai"
            heroImage="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2069&auto=format&fit=crop"
            description="Regal Tower is a high-rise commercial tower in Business Bay, offering a prestigious address for your business. With its modern architecture and premium facilities, it attracts leading companies from various industries. Our center provides fully furnished offices and coworking spaces designed for productivity and comfort."
            highlights={[
                "Located in the central business district",
                "Minutes away from Dubai Mall",
                "High-speed elevators and modern lobby",
                "24/7 security and concierge",
                "Ample parking space for tenants and visitors"
            ]}
            images={[
                "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2664&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2662&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            ]}
        />
    );
}
