import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import siteData from "../../site.json";

export default function ServicesList() {
  const { services } = siteData;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom text-center mb-16">
        <h5 className="text-primary font-semibold text-xs tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
          <span className="w-6 h-[2px] bg-primary"></span>
          OUR SERVICES
          <span className="w-6 h-[2px] bg-primary"></span>
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 leading-tight heading-font">
          Comprehensive HR Solutions <br />
          <span className="text-primary">for a Stronger Tomorrow</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
          We provide end-to-end HR services designed to help businesses attract, develop and retain the right talent while empowering professionals to achieve their career goals.
        </p>
      </div>

      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.items.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-bold text-base text-dark mb-2.5 group-hover:text-primary transition-colors heading-font">
                {service.title}
              </h3>
              <p className="text-gray-500 text-xs mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="inline-flex items-center gap-2 bg-primary text-white text-xs font-semibold px-4 py-2 rounded hover:bg-blue-700 transition-colors self-start"
              >
                Read More <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
