import ServiceDetailBanner from "../ServiceDetailBanner";
import ServiceDetailOverview from "../ServiceDetailOverview";
import ServiceDetailProcess from "../ServiceDetailProcess";
import ServiceDetailSidebar from "../ServiceDetailSidebar";
import siteData from "../../../site.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: "executive-search" },
    { slug: "talent-acquisition" },
    { slug: "temporary-staffing" },
    { slug: "contract-staffing" },
    { slug: "rpo" },
    { slug: "hr-consulting" },
    { slug: "training-development" },
    { slug: "workforce-solutions" },
    { slug: "career-guidance" },
    { slug: "hr-outsourcing" }
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = siteData.services.items.find(s => s.link.includes(slug));
  const title = service ? `${service.title} | Workora` : "Services Details | Workora";
  return { title };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = siteData.services.items.find(s => s.link.includes(slug));

  const overviewData = service ? {
    sectionSubtitle: "SERVICE OVERVIEW",
    title: `${service.title} for Exceptional Leadership`,
    description: service.description + " We combine industry expertise, extensive networks, and a proven assessment process to find leaders who align with your vision, culture, and long-term goals.",
    ctaText: "Get Started",
    ctaLink: "/contact-us",
    image: service.image || "/service-detail-main.webp"
  } : undefined;

  return (
    <div>
      <ServiceDetailBanner 
        title={service ? service.title : "Services Details"} 
        breadcrumb={service ? service.title : "Services Details"} 
      />

      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content Area - 8 cols */}
          <div className="lg:col-span-8 space-y-12">
            <ServiceDetailOverview overview={overviewData} />
            <ServiceDetailProcess />
          </div>

          {/* Sidebar Area - 4 cols */}
          <div className="lg:col-span-4">
            <ServiceDetailSidebar currentSlug={slug} />
          </div>
        </div>
      </section>
    </div>
  );
}
