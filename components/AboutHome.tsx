import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import siteData from "../site.json";

export default function AboutHome() {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4 items-center">
             <div className="flex flex-col gap-4">
               <div className="relative h-[200px] w-full rounded-2xl overflow-hidden shadow-md">
                 <Image src="/about-meeting-1.webp" alt="Team Meeting" fill className="object-cover" />
               </div>
               <div className="relative h-[200px] w-full rounded-2xl overflow-hidden shadow-md">
                 <Image src="/about-meeting-2.webp" alt="Workforce Collaboration" fill className="object-cover" />
               </div>
             </div>
             <div className="flex flex-col gap-4">
               <div className="relative h-[270px] w-full rounded-2xl overflow-hidden shadow-md">
                 <Image src="/about-woman.webp" alt="HR Executive" fill priority className="object-cover object-top" />
               </div>
               <div className="bg-primary text-white p-6 rounded-2xl shadow-md flex items-center justify-center gap-3 h-[130px]">
                  <span className="text-4xl md:text-5xl font-bold">25</span>
                  <span className="text-sm font-semibold leading-tight">Years of<br />Experience</span>
               </div>
             </div>
          </div>
        </div>
        <div>
          <h5 className="text-subtitle">{siteData.about.sectionSubtitle}</h5>
          <h2 className="section-title">
            Empowering Careers <br />
            <span className="text-primary font-normal text-3xl md:text-4xl">Building Stronger Businesses</span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {siteData.about.description}
          </p>
          <div className="space-y-6 mb-8">
            {siteData.about.features.map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 rounded bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Image src={feature.icon} alt={feature.title} width={24} height={24} className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg mb-1">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href={siteData.about.ctaLink} className="btn-primary">
            {siteData.about.ctaText} <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}