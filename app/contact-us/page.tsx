import PageBanner from "@/components/PageBanner";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import ContactInfo from "./ContactInfo";
import siteData from "@/data";

export const metadata = {
  title: siteData.contactUsPage.meta.title,
  description: siteData.contactUsPage.meta.description,
};

export default function ContactUsPage() {
  return (
    <div>
      <PageBanner {...siteData.contactUsPage.banner} />

      <section className="fluid bg-white">
        <div className="wrap flex flex-col gap-8 px-5 py-12 sm:px-8 lg:flex-row lg:items-start lg:gap-7 lg:px-0 lg:pb-29.25 lg:pl-33.75 lg:pt-24.25">
          <div className="lg:w-175.5 lg:shrink-0">
            <ContactForm />
          </div>
          <div className="flex flex-col gap-5 lg:w-172.75 lg:shrink-0 lg:gap-6">
            <ContactMap />
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
}
