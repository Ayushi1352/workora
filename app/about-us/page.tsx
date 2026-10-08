import AboutBanner from "./AboutBanner";
import AboutOverview from "./AboutOverview";
import AboutStats from "./AboutStats";
import WhyChooseUs from "./WhyChooseUs";
import siteData from "../../site.json";

export const metadata = {
  title: siteData.aboutPage.meta.title,
  description: siteData.aboutPage.meta.description,
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
