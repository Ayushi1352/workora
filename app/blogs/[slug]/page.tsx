import BlogDetailBanner from "../BlogDetailBanner";
import BlogDetailContent from "../BlogDetailContent";
import { notFound } from "next/navigation";
import siteData from "../../../site.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return siteData.blogsPage.items.map(b => ({
    slug: b.link.replace("/blogs/", "")
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const blog = siteData.blogsPage.items.find(b => b.link === `/blogs/${slug}`);
  return {
    title: blog ? `${blog.title} | ${siteData.company.name}` : siteData.blogDetailPage.meta.title,
    description: blog?.description ?? siteData.blogDetailPage.meta.description,
  };
}

export default async function DynamicBlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = siteData.blogsPage.items.find(b => b.link === `/blogs/${slug}`);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <BlogDetailBanner
        title={blog.title}
        parentTitle={siteData.blogsPage.banner.title}
        parentHref="/blogs"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <BlogDetailContent />
        </div>
      </section>
    </div>
  );
}
