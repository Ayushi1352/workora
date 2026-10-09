import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import CareerContent from "./CareerContent";
import siteData from "@/data";

export const metadata: Metadata = {
  title: siteData.careerPage.meta.title,
  description: siteData.careerPage.meta.description,
};

export default function CareerPage() {
  const { banner } = siteData.careerPage;

  return (
    <>
      <PageBanner {...banner} />
      <CareerContent />
    </>
  );
}