import ServicesBanner from "./ServicesBanner";
import ServicesList from "./ServicesList";
import siteData from "../../site.json";

export const metadata = {
  title: siteData.servicesPage.meta.title,
  description: siteData.servicesPage.meta.description,
};

export default function ServicesPage() {
  return (
    <>
      <ServicesBanner />
      <ServicesList />
    </>
  );
}
