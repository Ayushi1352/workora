import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import siteData from "@/data";

export const metadata: Metadata = {
  title: siteData.legalPages.termsAndConditions.meta.title,
  description: siteData.legalPages.termsAndConditions.meta.description,
};

export default function TermsAndConditionsPage() {
  return <LegalDocument page={siteData.legalPages.termsAndConditions} />;
}