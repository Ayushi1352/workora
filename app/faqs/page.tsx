import type { Metadata } from "next";
import FAQBanner from "../faq/FAQBanner";
import FAQList from "../faq/FAQList";
import siteData from "../../site.json";

export const metadata: Metadata = {
  title: siteData.faqPage.meta.title,
  description: siteData.faqPage.meta.description,
};

export default function FAQsPage() {
  return (
    <>
      <FAQBanner />
      <FAQList />
    </>
  );
}