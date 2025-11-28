import { PageHero } from "@/components/shared/PageHero";
import { BookingForm } from "@/components/booking/BookingForm";

export const metadata = {
    title: "Book a Tour | Jetset Business Center",
    description: "Schedule a visit to our premium office spaces in Business Bay, Dubai.",
};

export default function BookTourPage() {
    return (
        <>
            <PageHero
                title="Book a Tour"
                subtitle="Experience our premium workspaces firsthand."
                image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
                height="h-[40vh]"
            />

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-heading font-bold text-primary-700 mb-4">Visit Us Today</h2>
                            <p className="text-gray-600">
                                We'd love to show you around. Fill out the form below to schedule a tour of our Prime Tower or Regal Tower locations.
                            </p>
                        </div>

                        <BookingForm />
                    </div>
                </div>
            </section>
        </>
    );
}
