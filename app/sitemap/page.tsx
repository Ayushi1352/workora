import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import SitemapContent from "./SitemapContent";
import siteData from "@/data";

export const metadata: Metadata = {
  title: siteData.siteMapPage.meta.title,
  description: siteData.siteMapPage.meta.description,
};

export default function SitemapPage() {
  const { banner } = siteData.siteMapPage;

  return (
    <>
      <PageBanner {...banner} />
      <SitemapContent />
    </>
  );
}