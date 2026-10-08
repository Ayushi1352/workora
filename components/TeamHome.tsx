import Image from "next/image";
import HighlightedText from "./HighlightedText";
import siteData from "../site.json";

export default function TeamHome() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mb-10 text-center">
        <h5 className="text-primary font-semibold text-sm tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
           <span className="w-8 h-px bg-primary"></span>
           {siteData.team.sectionSubtitle}
           <span className="w-8 h-px bg-primary"></span>
        </h5>
        <h2 className="section-title max-w-2xl mx-auto">
          <HighlightedText
            text={siteData.team.title}
            highlight={siteData.team.titleHighlight}
            className="text-primary"
          />
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          {siteData.team.description}
        </p>
      </div>
      <div className="container-custom grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {siteData.team.members.map((member, i) => (
          <div key={i} className="group overflow-hidden rounded-md border border-gray-100 bg-white shadow-sm">
            <div className="relative h-[260px] w-full">
               <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            <div className="border-t border-gray-100 px-4 py-3 text-left">
              <h4 className="text-sm font-bold text-dark heading-font">{member.name}</h4>
              <p className="mt-1 text-xs font-medium text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}