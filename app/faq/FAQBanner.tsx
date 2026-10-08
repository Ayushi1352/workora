import PageBanner from "@/components/PageBanner";
import siteData from "../../site.json";

export default function FAQBanner() {
  const { banner } = siteData.faqPage;

  return <PageBanner {...banner} />;
}