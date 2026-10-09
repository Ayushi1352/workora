import { Suspense } from "react";
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

function formatSlug(slug: string): string {
  if (slug === "training-development") return "Training & Development";
  const acronyms: Record<string, string> = {
    hr: "HR",
    rpo: "RPO",
  };
  const minorWords = new Set(["of", "and", "in", "for", "to", "the", "a", "an"]);
  return slug
    .split("-")
    .map((word, idx) => {
      const lower = word.toLowerCase();
      if (acronyms[lower]) return acronyms[lower];
      if (idx > 0 && minorWords.has(lower)) return lower;
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = siteData.services.items.find((s) => s.link === `/services/${slug}`);
  const routeTitle = formatSlug(slug);
  return {
    title: service ? `${routeTitle} | ${siteData.servicesPage.banner.title} | ${siteData.company.name}` : details.meta.title,
    description: service?.description.replace(/\n/g, " ") ?? details.meta.description,
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ServiceDetailContent params={params} />
    </Suspense>
  );
}

async function ServiceDetailContent({ params }: PageProps) {
  const { slug } = await params;
  const service = siteData.services.items.find((s) => s.link === `/services/${slug}`);

  if (!service) {
    notFound();
  }

  const routeTitle = formatSlug(slug);

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
      <PageBanner
        title={routeTitle}
        image={details.banner.image}
        parentBreadcrumbs={[{ title: siteData.servicesPage.banner.title, href: "/services" }]}
      />

      <section className="fluid bg-white">
        <div className="wrap flex flex-col gap-10 px-5 py-14 sm:px-8 md:py-18 lg:pb-38.25 lg:pt-29.75 lg:flex-row lg:items-start lg:gap-13.75 lg:px-0 lg:pl-19.25">
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
