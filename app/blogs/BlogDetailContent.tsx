import Image from "next/image";
import { FaQuoteLeft, FaCheckCircle } from "react-icons/fa";
import siteData from "@/data";

interface BlogDetailContentProps {
  post?: {
    featuredImage?: string;
    intro?: string;
  };
}

const heading = "font-exo text-2xl font-bold text-[#0b1030] lg:fs-30 lg:leading-[1.167]";
const body = "text-[15px] leading-relaxed text-[#4c5470] sm:text-base lg:whitespace-pre-line lg:fs-22.5 lg:leading-[1.29]";

export default function BlogDetailContent({ post: customPost }: BlogDetailContentProps = {}) {
  const post = {
    ...siteData.blogDetailPage,
    ...(customPost?.featuredImage ? { featuredImage: customPost.featuredImage } : {}),
    ...(customPost?.intro ? { intro: customPost.intro } : {}),
  };
  return (
    <section className="bg-white font-lexend font-light">
      <article className="mx-auto max-w-5xl px-5 py-14 sm:px-8 md:py-18 lg:py-20">
        <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl shadow-sm">
          <Image src={post.featuredImage} alt="" fill preload unoptimized sizes="(min-width:1024px) 1024px, 100vw" className="object-cover" />
        </div>

        <p className={`mt-8 ${body}`}>{post.intro}</p>

        <h2 className={`mt-8 ${heading}`}>{post.whyMatters.title}</h2>
        <p className={`mt-3 ${body}`}>{post.whyMatters.paragraph}</p>

        <blockquote className="mt-6 flex items-start gap-4 rounded-xl bg-[#eef4fe] p-6 sm:p-7">
          <FaQuoteLeft className="mt-1 size-6 shrink-0 text-[#1d4fd8] sm:size-7" />
          <p className="text-base font-normal italic leading-relaxed text-[#1d4fd8] sm:text-lg">
            {post.quote}
          </p>
        </blockquote>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h2 className={heading}>{post.keyTrends.title}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#4c5470] sm:text-base">
              {post.keyTrends.intro}
            </p>
            <ul className="mt-5 flex flex-col gap-3 rounded-xl bg-[#eef4fe] p-5 text-[15px] text-[#3f4864] sm:p-6 sm:text-base">
              {post.keyTrends.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-0.5 size-5 shrink-0 text-[#1d4fd8]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl shadow-sm lg:col-span-5">
            <Image src={post.keyTrends.sideImage} alt="" fill unoptimized sizes="(min-width:1024px) 420px, 100vw" className="object-cover" />
          </div>
        </div>

        <h2 className={`mt-8 ${heading}`}>{post.finalThoughts.title}</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4c5470] sm:text-base">
          {post.finalThoughts.paragraph}
        </p>
      </article>
    </section>
  );
}
