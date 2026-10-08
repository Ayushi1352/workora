import PageBanner from "@/components/PageBanner";
import siteData from "../../site.json";

export default function AboutBanner() {
  return <PageBanner {...siteData.aboutPage.banner} />;
}
