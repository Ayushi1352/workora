import PageBanner from "@/components/PageBanner";
import AboutOverview from "./AboutOverview";
import Stats from "@/components/Stats";
import WhyChooseUs from "./WhyChooseUs";
import siteData from "@/data";

export const metadata = {
  title: siteData.aboutPage.meta.title,
  description: siteData.aboutPage.meta.description,
};

export default function AboutPage() {
  return (
    <>
      <PageBanner {...siteData.aboutPage.banner} />
      <AboutOverview />
      <Stats />
      <WhyChooseUs />
    </>
  );
}

