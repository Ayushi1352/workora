import PageBanner from "@/components/PageBanner";
import siteData from "../../site.json";

export default function ContactBanner() {
  return <PageBanner {...siteData.contactUsPage.banner} />;
}
