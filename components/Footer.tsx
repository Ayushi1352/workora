import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ChevronRight, ArrowUp } from "lucide-react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import siteData from "../site.json";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t-4 border-primary bg-dark pt-12 pb-6 text-gray-300">
      <Image src={siteData.stats.background} alt="" fill className="-z-10 object-cover opacity-15" />
      <div className="absolute inset-0 -z-10 bg-dark/90" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
          {/* Column 1 - Brand (spans 1.5 col on desktop) */}
          <div className="lg:col-span-1.5 pr-2">
            <Link href="/" className="inline-block mb-5">
              <Image 
                src={siteData.company.footerLogo || siteData.company.logo} 
                alt={siteData.company.name} 
                width={190} 
                height={40} 
                className="w-auto h-9 object-contain" 
              />
            </Link>
            <p className="text-[13px] text-gray-400 mb-6 leading-relaxed">
              {siteData.company.description}
            </p>
            <div className="flex gap-2.5">
              <Link href={siteData.company.socials.linkedin} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary text-gray-300 hover:text-white transition-colors">
                <FaLinkedin size={14} />
              </Link>
              <Link href={siteData.company.socials.facebook} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary text-gray-300 hover:text-white transition-colors">
                <FaFacebook size={14} />
              </Link>
              <Link href={siteData.company.socials.instagram} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={14} />
              </Link>
              <Link href={siteData.company.socials.youtube} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary text-gray-300 hover:text-white transition-colors">
                <FaYoutube size={14} />
              </Link>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-white text-base font-semibold mb-5 heading-font">
              {siteData.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5">
              {siteData.navigation.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                    <ChevronRight size={13} className="text-primary" /> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div>
            <h4 className="text-white text-base font-semibold mb-5 heading-font">
              {siteData.commonLabels.services}
            </h4>
            <ul className="space-y-2.5">
              {siteData.services.items.map((service, i) => (
                <li key={i}>
                  <Link href={service.link} className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                    <ChevronRight size={13} className="text-primary" /> {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Useful Links */}
          <div>
            <h4 className="text-white text-base font-semibold mb-5 heading-font">
              {siteData.commonLabels.usefulLinks}
            </h4>
            <ul className="space-y-2.5">
              {siteData.siteMapPage.utilityLinks.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                    <ChevronRight size={13} className="text-primary" /> {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                  <ChevronRight size={13} className="text-primary" /> Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 - Get In Touch */}
          <div>
            <h4 className="text-white text-base font-semibold mb-5 heading-font">
              {siteData.footer.contactTitle}
            </h4>
            <ul className="space-y-3.5">
              <li className="flex gap-3 text-xs text-gray-400 items-start">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white mt-0.5">
                  <MapPin size={14} />
                </div>
                <span>{siteData.company.footerAddress}</span>
              </li>
              <li className="flex gap-3 text-xs text-gray-400 items-center">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Phone size={14} />
                </div>
                <span>{siteData.company.phone}</span>
              </li>
              <li className="flex gap-3 text-xs text-gray-400 items-center">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Mail size={14} />
                </div>
                <span>{siteData.company.email}</span>
              </li>
              <li className="flex gap-3 text-xs text-gray-400 items-start">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white mt-0.5">
                  <Clock size={14} />
                </div>
                <div className="flex flex-col">
                  <span>{siteData.company.workingHours}</span>
                  <span className="text-gray-500">{siteData.company.workingHoursClosed}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {siteData.company.name}. {siteData.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/20">|</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="text-white/20">|</span>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
          <a 
            href="#top" 
            className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
