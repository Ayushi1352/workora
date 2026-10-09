import { Suspense } from "react";
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

function formatSlug(slug: string): string {
  const acronyms: Record<string, string> = {
    hr: "HR",
    rpo: "RPO",
  };
  const minorWords = new Set(["of", "and", "in", "for", "to", "the", "a", "an"]);
  return slug
    .split("-")
    .map((word, idx) => {
      const lower = word.toLowerCase();
      if (acronyms[lower]) return acronyms[lower];
      if (idx > 0 && minorWords.has(lower)) return lower;
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const blog = siteData.blogsPage.items.find((b) => b.link === `/blogs/${slug}`);
  const routeTitle = formatSlug(slug);
  return {
    title: `${routeTitle} | ${siteData.blogsPage.banner.title} | ${siteData.company.name}`,
    description: blog?.description.replace(/\n/g, " ") ?? siteData.blogDetailPage.meta.description,
  };
}

export default function BlogDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <BlogDetailInner params={params} />
    </Suspense>
  );
}

async function BlogDetailInner({ params }: PageProps) {
  const { slug } = await params;
  const blog = siteData.blogsPage.items.find((b) => b.link === `/blogs/${slug}`);

  if (!blog) {
    notFound();
  }

  const routeTitle = formatSlug(slug);

  return (
    <div>
      <PageBanner
        title={routeTitle}
        image={siteData.blogDetailPage.banner.image}
        parentBreadcrumbs={[{ title: siteData.blogsPage.banner.title, href: "/blogs" }]}
      />
      <BlogDetailContent
        post={{
          featuredImage: blog.image,
          intro: blog.description,
        }}
      />
    </div>
  );
}
