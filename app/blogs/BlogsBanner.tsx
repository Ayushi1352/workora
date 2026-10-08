import PageBanner from "@/components/PageBanner";
import siteData from "../../site.json";

export default function BlogsBanner() {
  return <PageBanner {...siteData.blogsPage.banner} />;
}
