import PageBanner from "@/components/PageBanner";
import siteData from "../../site.json";

interface BlogDetailBannerProps {
  title?: string;
  parentTitle?: string;
  parentHref?: string;
}

export default function BlogDetailBanner({
  title,
  parentTitle,
  parentHref,
}: BlogDetailBannerProps) {
  const { banner } = siteData.blogDetailPage;
  return (
    <PageBanner
      title={title || banner.title}
      image={banner.image}
      variant="centered"
      parentBreadcrumbs={parentTitle && parentHref ? [{ title: parentTitle, href: parentHref }] : []}
    />
  );
}
