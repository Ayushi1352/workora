import PageBanner from "@/components/PageBanner";
import siteData from "../../site.json";

interface ServiceDetailBannerProps {
  title?: string;
  parentTitle?: string;
  parentHref?: string;
}

export default function ServiceDetailBanner({
  title,
  parentTitle,
  parentHref,
}: ServiceDetailBannerProps) {
  const banner = siteData.serviceDetails.banner;
  return (
    <PageBanner
      title={title || banner.title}
      image={banner.image}
      parentBreadcrumbs={parentTitle && parentHref ? [{ title: parentTitle, href: parentHref }] : []}
    />
  );
}
