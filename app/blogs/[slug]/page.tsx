import BlogDetailBanner from "../BlogDetailBanner";
import BlogDetailContent from "../BlogDetailContent";
import siteData from "../../../site.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: "future-of-employee-engagement" },
    { slug: "handle-employee-conflict" },
    { slug: "remote-work-best-practices" }
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const blog = siteData.blogsPage.items.find(b => b.link.includes(slug));
  const title = blog ? `${blog.title} | Workora Blogs` : "Blogs Detail | Workora";
  return { title };
}

export default async function DynamicBlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = siteData.blogsPage.items.find(b => b.link.includes(slug));

  return (
    <div>
      <BlogDetailBanner 
        title={blog ? "Blogs Detail" : "Blogs Detail"} 
        breadcrumb="Blogs Detail" 
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <BlogDetailContent />
        </div>
      </section>
    </div>
  );
}
