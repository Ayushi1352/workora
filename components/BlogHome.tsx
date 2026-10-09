import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HighlightedText from "./HighlightedText";
import siteData from "@/data";

const blogs = siteData.blogs;

interface BlogHomeProps {
  /** Blogs page: every post, with that page's spacing */
  all?: boolean;
}

export default function BlogHome({ all = false }: BlogHomeProps) {
  const items = all ? siteData.blogsPage.items : siteData.blogsPage.items.slice(0, 3);
  const header = all ? siteData.blogsPage : blogs;

  return (
    <section className="fluid bg-white font-figtree">
      <div className={`wrap px-5 py-14 sm:px-8 ${all ? "lg:pb-28.25 lg:pl-19.25 lg:pr-17 lg:pt-25.5" : "lg:px-19 lg:pb-24.75 lg:pt-16.5"}`}>
        <div className="text-center">
          <div className="flex items-center justify-center gap-5 text-[13px] font-bold uppercase text-[#1f4fae] lg:gap-7.25 lg:fs-19.25 lg:leading-none">
            <span className="h-0.5 w-10 bg-[#1f4fae] lg:w-18" />
            {header.sectionSubtitle}
            <span className="h-0.5 w-10 bg-[#1f4fae] lg:w-18" />
          </div>
          <h2 className="mt-3 font-noto text-[30px] font-semibold leading-[1.15] tracking-[-0.01em] text-[#081228] sm:text-[40px] lg:mt-3.5 lg:fs-50.25 lg:leading-[1.2]">
            <HighlightedText text={header.title} highlight={header.titleHighlight} className="text-[#1d4fc0]" />
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-lexend text-[15px] font-light leading-relaxed text-[#596177] lg:mt-2 lg:max-w-none lg:whitespace-pre-line lg:fs-19.5 lg:leading-[1.436]">
            {header.description}
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:mt-8.5 lg:gap-x-6 lg:gap-y-14.5">
          {items.map((blog, i) => (
            <article
              key={`${blog.link}-${i}`}
              className="group overflow-hidden rounded-lg border border-[#eceff5] bg-white shadow-[0_2px_12px_rgba(15,30,70,0.05)] lg:r-8"
            >
              <div className="relative aspect-[498/272] w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt=""
                  fill
                  unoptimized
                  sizes="(min-width:768px) 31vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-2.5 left-4 rounded-md bg-[#174aa1] px-3 py-1.5 text-sm font-bold text-white lg:bottom-2.5 lg:left-4.25 lg:r-7 lg:px-3.5 lg:py-0 lg:fs-17.5 lg:leading-[2.23]">
                  {blog.date}
                </span>
              </div>
              <div className="px-5 pb-6 pt-4 lg:px-6.25 lg:pb-5.5 lg:pt-3.5">
                <h3 className="font-noto text-xl font-semibold leading-snug text-[#060d27] lg:whitespace-pre-line lg:fs-25.5 lg:leading-[1.333]">
                  <Link href={blog.link} className="transition-colors hover:text-[#1d4fc0]">
                    {blog.title}
                  </Link>
                </h3>
                <p className="mt-2 font-lexend text-[15px] font-light leading-relaxed text-[#5b6478] lg:mt-1.75 lg:whitespace-pre-line lg:fs-19.75 lg:leading-[1.418]">
                  {blog.description}
                </p>
                <Link
                  href={blog.link}
                  className="mt-4 inline-flex items-center gap-4 text-base font-bold text-[#1c4fb5] transition-colors hover:text-[#12357d] lg:mt-5 lg:gap-5 lg:fs-20 lg:leading-[1.4]"
                >
                  {siteData.commonLabels.readMore}
                  <ArrowRight className="size-5 lg:size-6" strokeWidth={2.25} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
