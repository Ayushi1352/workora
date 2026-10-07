import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import siteData from "../../site.json";

export default function BlogsGrid() {
  const { blogsPage } = siteData;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom text-center mb-16">
        <h5 className="text-primary font-semibold text-xs tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
          <span className="w-6 h-[2px] bg-primary"></span>
          {blogsPage.sectionSubtitle}
          <span className="w-6 h-[2px] bg-primary"></span>
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 leading-tight heading-font">
          Latest Insights & <span className="text-primary">HR Trends</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
          {blogsPage.description}
        </p>
      </div>

      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogsPage.items.map((blog, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-primary text-white text-[11px] font-bold px-3 py-1 rounded shadow-sm">
                {blog.date}
              </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-bold text-base md:text-lg text-dark mb-2.5 group-hover:text-primary transition-colors heading-font line-clamp-2">
                <Link href={blog.link}>{blog.title}</Link>
              </h3>
              <p className="text-gray-500 text-xs md:text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                {blog.description}
              </p>
              <Link
                href={blog.link}
                className="inline-flex items-center gap-2 text-primary font-bold text-xs hover:text-dark transition-colors self-start"
              >
                Read More <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
