import QuoteBanner from "./QuoteBanner";
import QuoteOverview from "./QuoteOverview";
import QuoteForm from "./QuoteForm";
import QuoteProcess from "./QuoteProcess";

export const metadata = {
  title: "Get a Quote | Workora HR Consultancy",
  description: "Request a custom HR solutions quote from Workora experts. Connect with the right talent for your business.",
};

export default function GetAQuotePage() {
  return (
    <div>
      <QuoteBanner />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Top section: Overview + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <QuoteOverview />
            </div>
            <div className="lg:col-span-5">
              <QuoteForm />
            </div>
          </div>

          {/* Bottom Process: From Enquiry to Results */}
          <QuoteProcess />
        </div>
      </section>
    </div>
  );
}
