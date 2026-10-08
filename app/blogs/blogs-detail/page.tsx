import { redirect } from "next/navigation";
import siteData from "../../../site.json";

export default function ExactBlogDetailPage() {
  redirect(siteData.blogsPage.items[0].link);
}
