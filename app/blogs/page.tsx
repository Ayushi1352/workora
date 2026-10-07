import BlogsBanner from "./BlogsBanner";
import BlogsGrid from "./BlogsGrid";

export const metadata = {
  title: "Blogs | Workora HR Consultancy",
  description: "Latest insights, employee engagement trends, and HR best practices by Workora experts.",
};

export default function BlogsPage() {
  return (
    <div>
      <BlogsBanner />
      <BlogsGrid />
    </div>
  );
}
