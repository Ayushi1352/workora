import ServiceDetailBanner from "../ServiceDetailBanner";
import ServiceDetailOverview from "../ServiceDetailOverview";
import ServiceDetailProcess from "../ServiceDetailProcess";
import ServiceDetailSidebar from "../ServiceDetailSidebar";
import { notFound } from "next/navigation";
import siteData from "../../../site.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return siteData.services.items.map(s => ({
    slug: s.link.replace("/services/", "")
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = siteData.services.items.find(s => s.link === `/services/${slug}`);
  return {
    title: service ? `${service.title} | ${siteData.company.name}` : siteData.serviceDetails.meta.title,
    description: service?.description ?? siteData.serviceDetails.meta.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = siteData.services.items.find(s => s.link === `/services/${slug}`);

  if (!service) {
    notFound();
  }

  const overviewData = {
    sectionSubtitle: siteData.serviceDetails.overview.sectionSubtitle,
    title: service.title,
    description: `${service.description} ${siteData.serviceDetails.overview.description}`,
    ctaText: siteData.serviceDetails.overview.ctaText,
    ctaLink: siteData.serviceDetails.overview.ctaLink,
    image: service.image
  };

  return (
    <div>
      <ServiceDetailBanner 
        title={service.title}
        parentTitle={siteData.servicesPage.banner.title}
        parentHref="/services"
      />

      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Main Content Area - 8 cols */}
          <div className="space-y-8 lg:col-span-9">
            <ServiceDetailOverview overview={overviewData} />
            <ServiceDetailProcess />
          </div>

          {/* Sidebar Area - 4 cols */}
          <div className="lg:col-span-3">
            <ServiceDetailSidebar currentSlug={slug} />
          </div>
        </div>
      </section>
    </div>
  );
}
