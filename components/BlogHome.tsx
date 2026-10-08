import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HighlightedText from "./HighlightedText";
import siteData from "../site.json";

export default function BlogHome() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mb-10 text-center">
        <h5 className="text-primary font-semibold text-sm tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
           <span className="w-8 h-px bg-primary"></span>
           {siteData.blogs.sectionSubtitle}
           <span className="w-8 h-px bg-primary"></span>
        </h5>
        <h2 className="section-title max-w-2xl mx-auto">
          <HighlightedText
            text={siteData.blogs.title}
            highlight={siteData.blogs.titleHighlight}
            className="text-primary"
          />
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          {siteData.blogs.description}
        </p>
      </div>
      <div className="container-custom grid grid-cols-1 gap-4 md:grid-cols-3">
        {siteData.blogsPage.items.slice(0, 3).map((blog, i) => (
          <div key={i} className="group overflow-hidden rounded-md border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg">
            <div className="relative h-48 overflow-hidden">
               <Image src={blog.image} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute bottom-3 left-3 rounded-sm bg-primary px-2.5 py-1 text-[10px] font-semibold text-white">
                  {blog.date}
               </div>
            </div>
            <div className="p-4">
              <h3 className="mb-2 line-clamp-2 text-base font-bold text-dark transition-colors group-hover:text-primary heading-font">
                <Link href={blog.link}>{blog.title}</Link>
              </h3>
              <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-gray-600">
                {blog.description}
              </p>
              <Link href={blog.link} className="inline-flex items-center gap-2 text-xs font-semibold text-primary transition-colors group-hover:text-dark">
                {siteData.commonLabels.readMore} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}