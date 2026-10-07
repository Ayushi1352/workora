import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import siteData from "../site.json";

export default function BlogHome() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom text-center mb-16">
        <h5 className="text-primary font-semibold text-sm tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
           <span className="w-8 h-px bg-primary"></span>
           {siteData.blogs.sectionSubtitle}
           <span className="w-8 h-px bg-primary"></span>
        </h5>
        <h2 className="section-title max-w-2xl mx-auto">
          Latest Insights & <span className="text-primary">HR Trends</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          {siteData.blogs.description}
        </p>
      </div>
      <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
        {siteData.blogs.items.map((blog, i) => (
          <div key={i} className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
            <div className="relative h-56 overflow-hidden">
               <Image src={blog.image} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded">
                  {blog.date}
               </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-dark mb-3 group-hover:text-primary transition-colors heading-font line-clamp-2">
                <Link href={blog.link}>{blog.title}</Link>
              </h3>
              <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                {blog.description}
              </p>
              <Link href={blog.link} className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:text-dark transition-colors">
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}