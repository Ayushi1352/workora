import PageBanner from "@/components/PageBanner";
import TeamHome from "@/components/TeamHome";
import siteData from "@/data";

export const metadata = {
  title: siteData.teamPage.meta.title,
  description: siteData.teamPage.meta.description,
};

export default function OurTeamPage() {
  return (
    <div>
      <PageBanner {...siteData.teamPage.banner} />
      <TeamHome />
    </div>
  );
}

