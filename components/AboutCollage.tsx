import Image from "next/image";
import siteData from "@/data";

const about = siteData.about;

/* Three photos + experience badge. Everything is positioned in percentages of a
   778x740 design box, so the collage keeps its exact proportions at any width. */
export default function AboutCollage() {
  const words = about.experienceText.split(" ");

  return (
    <div className="@container relative aspect-[778/740] w-full">
      {/* dotted grid */}
      <div
        className="absolute -left-[0.4%] top-[5.1%] h-[15.3%] w-[17%]"
        style={{
          backgroundImage: "radial-gradient(circle, #d3d9e4 0.28cqw, transparent 0.32cqw)",
          backgroundSize: "20% 20%",
        }}
      />
      {/* soft circle behind the badge */}
      <div className="absolute left-[61.2%] top-[92%] aspect-square w-[12.9%] rounded-full bg-[#eef2f9]" />

      <div className="absolute left-[44%] top-0 h-[75.8%] w-[56%] overflow-hidden rounded-[2.8cqw]">
        <Image src={about.images.woman} alt="" fill unoptimized sizes="(min-width:1024px) 26vw, 56vw" className="object-cover" />
      </div>
      <div className="absolute left-0 top-[25.8%] h-[38.1%] w-[41.9%] overflow-hidden rounded-[2.6cqw]">
        <Image src={about.images.meeting1} alt="" fill unoptimized sizes="(min-width:1024px) 20vw, 42vw" className="object-cover" />
      </div>
      <div className="absolute left-0 top-[65.5%] h-[34.5%] w-[57.2%] overflow-hidden rounded-[2.6cqw] ring-[1.8cqw] ring-white">
        <Image src={about.images.meeting2} alt="" fill unoptimized sizes="(min-width:1024px) 27vw, 57vw" className="object-cover" />
      </div>

      <div className="absolute left-[59.1%] top-[77.6%] flex h-[18.8%] w-[40.9%] items-center rounded-[1.6cqw] bg-[#355b9e] pl-[4.4cqw] font-figtree text-white">
        <span className="text-[9.2cqw] font-semibold leading-none">{about.experienceYears}</span>
        <span className="ml-[3cqw] h-[58%] w-px bg-white/45" />
        <span className="ml-[3cqw] text-[3.1cqw] font-medium leading-[1.45]">
          {words.slice(0, 2).join(" ")}
          <br />
          {words.slice(2).join(" ")}
        </span>
      </div>
    </div>
  );
}
