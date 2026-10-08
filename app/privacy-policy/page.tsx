import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import siteData from "../../site.json";

export const metadata: Metadata = {
  title: siteData.legalPages.privacyPolicy.meta.title,
  description: siteData.legalPages.privacyPolicy.meta.description,
};

export default function PrivacyPolicyPage() {
  return <LegalDocument page={siteData.legalPages.privacyPolicy} />;
}