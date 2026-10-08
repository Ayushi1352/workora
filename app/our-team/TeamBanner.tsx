import PageBanner from "@/components/PageBanner";
import siteData from "../../site.json";

export default function TeamBanner() {
  return <PageBanner {...siteData.teamPage.banner} />;
}
