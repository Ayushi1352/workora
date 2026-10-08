import PageBanner from "@/components/PageBanner";
import siteData from "../../site.json";

export default function ServicesBanner() {
  return <PageBanner {...siteData.servicesPage.banner} />;
}
