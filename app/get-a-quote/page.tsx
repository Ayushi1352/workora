import PageBanner from "@/components/PageBanner";
import QuoteOverview from "./QuoteOverview";
import QuoteForm from "./QuoteForm";
import QuoteProcess from "./QuoteProcess";
import siteData from "@/data";

export const metadata = {
  title: siteData.getAQuotePage.meta.title,
  description: siteData.getAQuotePage.meta.description,
};

export default function GetAQuotePage() {
  return (
    <div className="bg-white">
      <PageBanner {...siteData.getAQuotePage.banner} />

      <section className="fluid">
        <div className="wrap flex flex-col gap-10 px-5 py-14 sm:px-8 md:py-18 lg:pb-6.5 lg:pt-19.25 lg:flex-row lg:items-start lg:gap-8.25 lg:px-0 lg:pl-36">
          <div className="lg:w-200.75 lg:shrink-0 lg:pt-2.75">
            <QuoteOverview />
          </div>
          <div className="lg:w-150.75 lg:shrink-0">
            <QuoteForm />
          </div>
        </div>
      </section>

      <QuoteProcess />
      <div className="fluid h-10 lg:h-13.5" />
    </div>
  );
}
