import Image from "next/image";
import siteData from "../site.json";

export default function TeamHome() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom text-center mb-16">
        <h5 className="text-primary font-semibold text-sm tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
           <span className="w-8 h-px bg-primary"></span>
           {siteData.team.sectionSubtitle}
           <span className="w-8 h-px bg-primary"></span>
        </h5>
        <h2 className="section-title max-w-2xl mx-auto">
          Our People <span className="text-primary">Make the Difference</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          {siteData.team.description}
        </p>
      </div>
      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteData.team.members.map((member, i) => (
          <div key={i} className="group relative overflow-hidden rounded-lg shadow-sm">
            <div className="relative h-[350px] w-full">
               <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4 mx-4 mb-4 rounded shadow-md border-b-4 border-transparent group-hover:border-primary transition-all text-center">
              <h4 className="font-bold text-dark text-lg heading-font">{member.name}</h4>
              <p className="text-primary text-sm font-medium">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}