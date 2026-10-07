import ServiceDetailBanner from "../ServiceDetailBanner";
import ServiceDetailOverview from "../ServiceDetailOverview";
import ServiceDetailProcess from "../ServiceDetailProcess";
import ServiceDetailSidebar from "../ServiceDetailSidebar";

export const metadata = {
  title: "Services Details | Workora HR Consultancy",
  description: "Executive Search for Exceptional Leadership - Workora HR Services Details",
};

export default function ServiceDetailsExactPage() {
  return (
    <div>
      <ServiceDetailBanner 
        title="Services Details" 
        breadcrumb="Services Details" 
      />

      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content Area - 8 cols */}
          <div className="lg:col-span-8 space-y-12">
            <ServiceDetailOverview />
            <ServiceDetailProcess />
          </div>

          {/* Sidebar Area - 4 cols */}
          <div className="lg:col-span-4">
            <ServiceDetailSidebar currentSlug="executive-search" />
          </div>
        </div>
      </section>
    </div>
  );
}
