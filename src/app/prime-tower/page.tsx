import { LocationTemplate } from "@/components/locations/LocationTemplate";

export const metadata = {
    title: "Prime Tower Office Space | JetSet Business Center",
    description: "Premium office spaces in Prime Tower, Business Bay. Stunning views of Burj Khalifa and modern amenities.",
};

export default function PrimeTowerPage() {
    return (
        <LocationTemplate
            name="Prime Tower"
            address="Prime Tower, Business Bay, Dubai"
            heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            description="Prime Tower is a commercial building located in the heart of Business Bay, Dubai. It offers state-of-the-art office spaces with breathtaking views of the Burj Khalifa and the Dubai Water Canal. Our center in Prime Tower is designed to provide a professional and inspiring environment for businesses of all sizes."
            highlights={[
                "Direct views of Burj Khalifa",
                "Walking distance to Business Bay Metro Station",
                "Close proximity to Dubai Mall and DIFC",
                "Easy access to Sheikh Zayed Road",
                "Surrounded by 5-star hotels and restaurants"
            ]}
            images={[
                "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1887&auto=format&fit=crop"
            ]}
        />
    );
}
