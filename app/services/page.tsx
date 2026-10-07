import ServicesBanner from "./ServicesBanner";
import ServicesList from "./ServicesList";

export const metadata = {
  title: "Services | Workora HR Consultancy",
  description: "Comprehensive HR Solutions for a Stronger Tomorrow. Talent Acquisition, Executive Search, Training & Development, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesBanner />
      <ServicesList />
    </>
  );
}
