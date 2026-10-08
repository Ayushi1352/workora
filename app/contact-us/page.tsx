import ContactBanner from "./ContactBanner";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import ContactInfo from "./ContactInfo";
import siteData from "../../site.json";

export const metadata = {
  title: siteData.contactUsPage.meta.title,
  description: siteData.contactUsPage.meta.description,
};

export default function ContactUsPage() {
  return (
    <div>
      <ContactBanner />

      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Form */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>

          {/* Right: Map + Info Cards */}
          <div className="lg:col-span-6 space-y-6">
            <ContactMap />
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
}
