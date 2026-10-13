import ThankYouContent from "./ThankYouContent";
import siteData from "@/data";

export const metadata = siteData.thankYouPage.meta;

export default function ThankYouPage() {
  return (
    <div>
      <ThankYouContent />
    </div>
  );
}
