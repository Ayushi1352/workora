import PageBanner from "@/components/PageBanner";
import ServicesHome from "@/components/ServicesHome";
import siteData from "@/data";

export const metadata = {
  title: siteData.servicesPage.meta.title,
  description: siteData.servicesPage.meta.description,
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner {...siteData.servicesPage.banner} />
      <ServicesHome page />
    </>
  );
}

