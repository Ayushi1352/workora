import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import siteData from "../site.json";

export default function ServicesHome() {
  return (
    <section className="section-padding bg-[#F9F9F9]">
      <div className="container-custom text-center mb-16">
        <h5 className="text-primary font-semibold text-sm tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
           <span className="w-8 h-px bg-primary"></span>
           {siteData.services.sectionSubtitle}
           <span className="w-8 h-px bg-primary"></span>
        </h5>
        <h2 className="section-title max-w-2xl mx-auto">
          Comprehensive HR Solutions <br />
          <span className="text-primary">for a Stronger Tomorrow</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          {siteData.services.description}
        </p>
      </div>
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteData.services.items.map((service, i) => (
          <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow group border border-gray-100 flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-bold text-lg text-dark mb-3 group-hover:text-primary transition-colors heading-font">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{service.description}</p>
              <Link href={service.link} className="inline-flex items-center gap-2 bg-primary text-white text-xs font-semibold px-4 py-2 rounded hover:bg-blue-700 transition-colors self-start">
                Read More <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}