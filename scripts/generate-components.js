const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

const files = {
  'Hero.tsx': `import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import siteData from "../site.json";

export default function Hero() {
  return (
    <section className="relative bg-[#f8fafc] overflow-hidden">
      <div className="container-custom py-16 md:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-primary font-medium mb-4 text-sm uppercase tracking-wider">
            <span className="w-8 h-px bg-primary"></span>
            {siteData.hero.subtitle}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-[1.1] heading-font">
            Strategic<br />
            <span className="text-primary">HR Solutions</span><br />
            for Your<br />
            Growing Business
          </h1>
          <p className="text-gray-600 mb-8 max-w-lg text-lg leading-relaxed">
            {siteData.hero.description}
          </p>
          <Link href={siteData.hero.ctaLink} className="btn-primary">
            {siteData.hero.ctaText} <ArrowRight size={18} />
          </Link>
        </div>
        <div className="relative z-10 flex gap-4 md:gap-6 lg:justify-end">
          <div className="flex flex-col gap-4 mt-12 w-1/2 md:w-auto">
            <Image src={siteData.hero.image1} alt="HR Meeting" width={280} height={320} className="rounded-xl shadow-lg object-cover w-full h-[220px] md:w-[240px] md:h-[280px]" />
            <Image src={siteData.hero.image3} alt="Office Working" width={280} height={220} className="rounded-xl shadow-lg object-cover w-full h-[160px] md:w-[240px] md:h-[200px]" />
          </div>
          <div className="flex flex-col gap-4 w-1/2 md:w-auto relative">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <Image src={siteData.hero.image2} alt="Business Women" width={320} height={420} className="rounded-xl shadow-lg object-cover w-full h-[280px] md:w-[280px] md:h-[360px]" />
            <div className="bg-primary text-white p-6 rounded-xl shadow-lg flex items-center justify-between w-full md:w-[280px]">
              <span className="text-4xl font-bold">{siteData.hero.stat.number}</span>
              <span className="text-sm font-medium w-1/2 leading-tight">{siteData.hero.stat.text}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f1f5f9] -skew-x-12 origin-top-right -z-0"></div>
    </section>
  );
}`,
  'AboutHome.tsx': `import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import siteData from "../../site.json";

export default function AboutHome() {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
             <Image src="/hero-img-1.webp" alt="About Image 1" width={300} height={400} className="rounded-lg object-cover w-full h-full min-h-[300px]" />
             <div className="flex flex-col gap-4 mt-8">
               <Image src="/hero-img-3.webp" alt="About Image 2" width={300} height={200} className="rounded-lg object-cover w-full h-[180px]" />
               <div className="bg-primary text-white p-6 rounded-lg flex flex-col items-center justify-center h-[180px]">
                  <span className="text-4xl font-bold mb-2">25</span>
                  <span className="text-center text-sm font-medium">Years of<br/>Experience</span>
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
}`,
  'Stats.tsx': `import Image from "next/image";
import siteData from "../../site.json";

export default function Stats() {
  return (
    <section className="relative py-20 bg-dark overflow-hidden">
      <Image src={siteData.stats.background} alt="Background" fill className="object-cover opacity-20" />
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h5 className="text-primary font-semibold text-sm tracking-wider uppercase mb-2 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-primary"></span>
            OUR BEST
            <span className="w-6 h-px bg-primary"></span>
          </h5>
          <h2 className="text-white text-3xl md:text-4xl font-bold heading-font">
            Creating Opportunities<br />
            <span className="text-blue-300 font-normal">Building Brighter Futures</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/20">
          {siteData.stats.items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <Image src={item.icon} alt={item.label} width={32} height={32} className="w-8 h-8 object-contain filter invert" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">{item.number}</h3>
              <p className="text-blue-200 text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  'ServicesHome.tsx': `import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import siteData from "../../site.json";

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
              <Link href={service.link} className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:text-dark transition-colors">
                Read More <div className="bg-primary/10 p-1.5 rounded-full"><ArrowRight size={14} className="text-primary" /></div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}`,
  'TeamHome.tsx': `import Image from "next/image";
import siteData from "../../site.json";

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
}`,
  'Testimonials.tsx': `import Image from "next/image";
import siteData from "../../site.json";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      <Image src={siteData.testimonials.background} alt="Testimonials Background" fill className="object-cover opacity-30 mix-blend-overlay" />
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h5 className="text-primary font-semibold text-sm tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
             <span className="w-8 h-px bg-primary"></span>
             {siteData.testimonials.sectionSubtitle}
             <span className="w-8 h-px bg-primary"></span>
          </h5>
          <h2 className="text-white text-3xl md:text-4xl font-bold heading-font max-w-2xl mx-auto">
            Success Stories from<br/>
            Our <span className="text-blue-400">Clients and Candidates</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.testimonials.items.map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-8 shadow-xl relative">
              <div className="text-primary/20 absolute top-4 left-6 text-6xl font-serif">"</div>
              <p className="text-gray-600 text-sm relative z-10 mb-6 italic min-h-[80px]">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4">
                <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-full object-cover w-12 h-12" />
                <div>
                  <h4 className="font-bold text-dark text-sm heading-font">{item.name}</h4>
                  <p className="text-gray-500 text-xs">{item.role}</p>
                  <div className="flex text-[#FFB800] mt-1 gap-1">
                    {[...Array(item.rating)].map((_, idx) => (
                      <Star key={idx} size={12} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
           <div className="w-2 h-2 rounded-full bg-primary"></div>
           <div className="w-2 h-2 rounded-full bg-white/30"></div>
           <div className="w-2 h-2 rounded-full bg-white/30"></div>
        </div>
      </div>
    </section>
  );
}`,
  'BlogHome.tsx': `import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import siteData from "../../site.json";

export default function BlogHome() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom text-center mb-16">
        <h5 className="text-primary font-semibold text-sm tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
           <span className="w-8 h-px bg-primary"></span>
           {siteData.blogs.sectionSubtitle}
           <span className="w-8 h-px bg-primary"></span>
        </h5>
        <h2 className="section-title max-w-2xl mx-auto">
          Latest Insights & <span className="text-primary">HR Trends</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          {siteData.blogs.description}
        </p>
      </div>
      <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
        {siteData.blogs.items.map((blog, i) => (
          <div key={i} className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
            <div className="relative h-56 overflow-hidden">
               <Image src={blog.image} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded">
                  {blog.date}
               </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-dark mb-3 group-hover:text-primary transition-colors heading-font line-clamp-2">
                <Link href={blog.link}>{blog.title}</Link>
              </h3>
              <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                {blog.description}
              </p>
              <Link href={blog.link} className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:text-dark transition-colors">
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}`
};

for (const [filename, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(componentsDir, filename), content);
  console.log('Created ' + filename);
}
