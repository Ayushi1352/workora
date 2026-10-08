import BlogsBanner from "./BlogsBanner";
import BlogsGrid from "./BlogsGrid";
import siteData from "../../site.json";

export const metadata = {
  title: siteData.blogsPage.meta.title,
  description: siteData.blogsPage.meta.description,
};

export default function BlogsPage() {
  return (
    <div>
      <BlogsBanner />
      <BlogsGrid />
    </div>
  );
}
