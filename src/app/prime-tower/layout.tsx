import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Prime Tower Office Space | JetSet Business Center",
    description: "Premium office spaces in Prime Tower, Business Bay. Stunning views of Burj Khalifa and modern amenities.",
};

export default function PrimeTowerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

