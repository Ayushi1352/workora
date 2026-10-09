import PageBanner from "@/components/PageBanner";
import ServiceDetailOverview from "../ServiceDetailOverview";
import ServiceDetailProcess from "../ServiceDetailProcess";
import ServiceDetailSidebar from "../ServiceDetailSidebar";
import { notFound } from "next/navigation";
import siteData from "@/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const details = siteData.serviceDetails;

export function generateStaticParams() {
  return siteData.services.items.map((s) => ({
    slug: s.link.replace("/services/", ""),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = siteData.services.items.find((s) => s.link === `/services/${slug}`);
  return {
    title: service ? `${service.title} | ${siteData.company.name}` : details.meta.title,
    description: service?.description.replace(/\n/g, " ") ?? details.meta.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = siteData.services.items.find((s) => s.link === `/services/${slug}`);

  if (!service) {
    notFound();
  }

  // The service the design was drawn for uses the overview copy as-is; the others reuse it with their own title, intro and photo.
  const overviewData =
    slug === details.overview.slug
      ? details.overview
      : {
          ...details.overview,
          title: service.title,
          description: `${service.description.replace(/\n/g, " ")} ${details.overview.description.replace(/\n/g, " ")}`,
          image: service.image,
        };

  return (
    <div>
      <PageBanner {...details.banner} />

      <section className="fluid bg-white">
        <div className="wrap flex flex-col gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:items-start lg:gap-13.75 lg:px-0 lg:pb-38.25 lg:pl-19.25 lg:pt-29.75">
          <div className="flex flex-col gap-10 lg:w-293.25 lg:shrink-0 lg:gap-9">
            <ServiceDetailOverview overview={overviewData} />
            <ServiceDetailProcess />
          </div>
          <div className="lg:w-77.25 lg:shrink-0">
            <ServiceDetailSidebar currentSlug={slug} />
          </div>
        </div>
      </section>
    </div>
  );
}
