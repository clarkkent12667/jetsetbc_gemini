import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { BlogList } from "@/components/blog/BlogList";

export const metadata: Metadata = {
    title: "Blog | Jetset Business Center",
    description: "Stay updated with the latest insights, trends, and news about business setup, office spaces, and coworking in Dubai.",
};

export default function BlogPage() {
    return (
        <main>
            <PageHero
                title="Our Blog"
                subtitle="Insights, tips, and news from the world of business in Dubai"
                image="https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=2070&auto=format&fit=crop"
                height="h-[40vh]"
            />
            <BlogList />
        </main>
    );
}

