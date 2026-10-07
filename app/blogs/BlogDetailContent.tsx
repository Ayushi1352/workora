import Image from "next/image";
import { CheckCircle2, Quote } from "lucide-react";
import siteData from "../../site.json";

export default function BlogDetailContent() {
  const { blogDetailPage } = siteData;

  return (
    <article className="max-w-4xl mx-auto space-y-10">
      {/* Featured Header Image */}
      <div className="relative h-[280px] sm:h-[400px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-md">
        <Image
          src={blogDetailPage.featuredImage}
          alt="Employee Engagement Trends"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Intro Paragraph */}
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        {blogDetailPage.intro}
      </p>

      {/* Section 1: Why Matters */}
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-dark heading-font">
          {blogDetailPage.whyMatters.title}
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {blogDetailPage.whyMatters.paragraph}
        </p>
      </div>

      {/* Quote Block */}
      <div className="bg-blue-50/70 p-6 md:p-8 rounded-2xl border-l-4 border-primary flex items-start gap-4">
        <Quote size={28} className="text-primary flex-shrink-0 mt-1" />
        <p className="text-dark font-medium italic text-sm md:text-base leading-relaxed">
          {blogDetailPage.quote}
        </p>
      </div>

      {/* Section 2: Key Trends Shaping the Future */}
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-dark heading-font">
          {blogDetailPage.keyTrends.title}
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {blogDetailPage.keyTrends.intro}
        </p>

        {/* 2-column: Checklist & Side Image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 bg-[#f8fafc] p-6 rounded-2xl border border-gray-100">
            <ul className="space-y-3.5">
              {blogDetailPage.keyTrends.points.map((point, index) => (
                <li key={index} className="flex items-center gap-3 text-xs md:text-sm text-gray-700">
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 relative h-[220px] w-full rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={blogDetailPage.keyTrends.sideImage}
              alt="Colleagues discussing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Final Thoughts */}
      <div className="space-y-4 pt-4 border-t border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-dark heading-font">
          {blogDetailPage.finalThoughts.title}
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {blogDetailPage.finalThoughts.paragraph}
        </p>
      </div>
    </article>
  );
}
