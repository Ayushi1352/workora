import { redirect } from "next/navigation";
import siteData from "@/data";

export default function ExactBlogDetailPage() {
  redirect(siteData.blogsPage.items[0].link);
}
