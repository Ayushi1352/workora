import PageBanner from "@/components/PageBanner";
import BlogsGrid from "./BlogsGrid";
import siteData from "@/data";

export const metadata = {
  title: siteData.blogsPage.meta.title,
  description: siteData.blogsPage.meta.description,
};

export default function BlogsPage() {
  return (
    <div>
      <PageBanner {...siteData.blogsPage.banner} />
      <BlogsGrid />
    </div>
  );
}

