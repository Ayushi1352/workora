import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import GalleryGrid from "./GalleryGrid";
import siteData from "@/data";

export const metadata: Metadata = {
  title: siteData.galleryPage.meta.title,
  description: siteData.galleryPage.meta.description,
};

export default function GalleryPage() {
  const { banner } = siteData.galleryPage;

  return (
    <>
      <PageBanner {...banner} />
      <GalleryGrid />
    </>
  );
}