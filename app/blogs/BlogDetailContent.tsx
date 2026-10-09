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
    <section className="fluid bg-white font-lexend font-light">
      <article className="wrap px-5 py-14 sm:px-8 md:py-18 lg:pb-23.5 lg:pt-26.75 lg:px-0 lg:pl-59 lg:pr-61.75">
        <div className="relative aspect-[1203/385] w-full overflow-hidden rounded-xl lg:r-12">
          <Image src={post.featuredImage} alt="" fill preload unoptimized sizes="(min-width:1024px) 72vw, 100vw" className="object-cover" />
        </div>

        <p className={`mt-6 ${body}`}>{post.intro}</p>

        <h2 className={`mt-7 lg:mt-6.5 ${heading}`}>{post.whyMatters.title}</h2>
        <p className={`mt-2.5 lg:mt-2.25 ${body}`}>{post.whyMatters.paragraph}</p>

        <blockquote className="mt-5 flex gap-4 rounded-xl bg-[#eef4fe] px-5 py-5 lg:mt-4 lg:h-23.75 lg:gap-7.75 lg:r-10 lg:px-0 lg:py-0 lg:pl-9.25 lg:pt-4.75">
          <FaQuoteLeft className="mt-1 size-6 shrink-0 text-[#1d4fd8] lg:mt-1.25 lg:size-8" />
          <p className="text-base font-normal italic leading-relaxed text-[#1d4fd8] lg:whitespace-pre-line lg:fs-22.5 lg:leading-[1.29]">
            {post.quote}
          </p>
        </blockquote>

        <div className="mt-7 flex flex-col gap-6 lg:mt-7 lg:flex-row lg:gap-9.5">
          <div className="lg:w-159.25 lg:shrink-0">
            <h2 className={heading}>{post.keyTrends.title}</h2>
            <p className="mt-2.5 text-[15px] leading-relaxed text-[#4c5470] sm:text-base lg:mt-2.25 lg:whitespace-pre lg:fs-21 lg:leading-[1.38]">
              {post.keyTrends.intro}
            </p>
            <ul className="mt-4 flex flex-col gap-3 rounded-xl bg-[#eef4fe] px-5 py-5 text-[15px] text-[#3f4864] lg:mt-3.5 lg:h-53 lg:gap-0 lg:r-10 lg:px-0 lg:py-0 lg:pl-8.75 lg:pt-3.5 lg:fs-20.5">
              {post.keyTrends.points.map((point) => (
                <li key={point} className="flex items-center gap-3 lg:h-9 lg:gap-3.75">
                  <FaCheckCircle className="size-5 shrink-0 text-[#1d4fd8] lg:size-5.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[527/321] w-full overflow-hidden rounded-xl lg:mt-1.75 lg:h-80.25 lg:w-132 lg:r-12">
            <Image src={post.keyTrends.sideImage} alt="" fill unoptimized sizes="(min-width:1024px) 32vw, 100vw" className="object-cover" />
          </div>
        </div>

        <h2 className={`mt-7 lg:mt-4 ${heading}`}>{post.finalThoughts.title}</h2>
        <p className="mt-2.5 text-[15px] leading-relaxed text-[#4c5470] sm:text-base lg:mt-2.25 lg:whitespace-pre-line lg:fs-20 lg:leading-[1.425]">
          {post.finalThoughts.paragraph}
        </p>
      </article>
    </section>
  );
}
