import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import FAQList from "@/components/FAQList";
import siteData from "@/data";

export const metadata: Metadata = {
  title: siteData.faqPage.meta.title,
  description: siteData.faqPage.meta.description,
};

export default function FAQsPage() {
  return (
    <>
      <PageBanner {...siteData.faqPage.banner} />
      <FAQList />
    </>
  );
}