import PageBanner from "@/components/PageBanner";
import siteData from "../../site.json";

export default function QuoteBanner() {
  return <PageBanner {...siteData.getAQuotePage.banner} />;
}
