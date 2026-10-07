import Image from "next/image";
import siteData from "../../site.json";

export default function TeamList() {
  const { team } = siteData;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom text-center mb-16">
        <h5 className="text-primary font-semibold text-xs tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
          <span className="w-6 h-[2px] bg-primary"></span>
          {team.sectionSubtitle}
          <span className="w-6 h-[2px] bg-primary"></span>
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 leading-tight heading-font">
          Our People <span className="text-primary">Make the Difference</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
          {team.description}
        </p>
      </div>

      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.members.map((member, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="relative h-[360px] w-full">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 mx-4 mb-4 rounded-xl shadow-md border-b-4 border-transparent group-hover:border-primary transition-all text-center">
              <h4 className="font-bold text-dark text-base heading-font">
                {member.name}
              </h4>
              <p className="text-primary text-xs font-semibold mt-0.5">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
