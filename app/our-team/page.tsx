import TeamBanner from "./TeamBanner";
import TeamList from "./TeamList";

export const metadata = {
  title: "Our Team | Workora HR Consultancy",
  description: "Meet the passionate team behind Workora HR Consultancy.",
};

export default function OurTeamPage() {
  return (
    <div>
      <TeamBanner />
      <TeamList />
    </div>
  );
}
