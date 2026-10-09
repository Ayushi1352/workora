import PageBanner from "@/components/PageBanner";
import BlogDetailContent from "../BlogDetailContent";
import { notFound } from "next/navigation";
import siteData from "@/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const slugs = new Set(siteData.blogsPage.items.map((b) => b.link.replace("/blogs/", "")));
  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const blog = siteData.blogsPage.items.find((b) => b.link === `/blogs/${slug}`);
  return {
    title: blog ? `${blog.title.replace(/\n/g, " ")} | ${siteData.company.name}` : siteData.blogDetailPage.meta.title,
    description: blog?.description.replace(/\n/g, " ") ?? siteData.blogDetailPage.meta.description,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = siteData.blogsPage.items.find((b) => b.link === `/blogs/${slug}`);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <PageBanner {...siteData.blogDetailPage.banner} />
      <BlogDetailContent />
    </div>
  );
}
