import TeamBanner from "./TeamBanner";
import TeamList from "./TeamList";
import siteData from "../../site.json";

export const metadata = {
  title: siteData.teamPage.meta.title,
  description: siteData.teamPage.meta.description,
};

export default function OurTeamPage() {
  return (
    <div>
      <TeamBanner />
      <TeamList />
    </div>
  );
}
