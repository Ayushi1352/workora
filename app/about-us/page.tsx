import AboutBanner from "./AboutBanner";
import AboutOverview from "./AboutOverview";
import AboutStats from "./AboutStats";
import WhyChooseUs from "./WhyChooseUs";

export const metadata = {
  title: "About Us | Workora HR Consultancy",
  description: "Learn about Workora, our mission, values, and how we empower careers and build stronger businesses.",
};

export default function AboutPage() {
  return (
    <>
      <AboutBanner />
      <AboutOverview />
      <AboutStats />
      <WhyChooseUs />
    </>
  );
}
