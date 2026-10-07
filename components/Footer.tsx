import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ChevronRight, ArrowUp } from "lucide-react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import siteData from "../site.json";

export default function Footer() {
  return (
    <footer className="bg-[#0b1a2d] text-gray-300 pt-16 pb-8 border-t-4 border-primary">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
          {/* Column 1 - Brand (spans 1.5 col on desktop) */}
          <div className="lg:col-span-1.5 pr-2">
            <Link href="/" className="inline-block mb-5">
              <Image 
                src={siteData.company.logo} 
                alt={siteData.company.name} 
                width={170} 
                height={45} 
                className="w-auto h-10 object-contain invert brightness-0" 
              />
            </Link>
            <p className="text-[13px] text-gray-400 mb-6 leading-relaxed">
              Connecting the right talent with the right opportunities. We help businesses build stronger teams and empower professionals to achieve their career goals.
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
            <h4 className="text-white text-base font-semibold mb-5 heading-font">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                  <ChevronRight size={13} className="text-primary" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                  <ChevronRight size={13} className="text-primary" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                  <ChevronRight size={13} className="text-primary" /> Our Services
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                  <ChevronRight size={13} className="text-primary" /> Our Team
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                  <ChevronRight size={13} className="text-primary" /> Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                  <ChevronRight size={13} className="text-primary" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div>
            <h4 className="text-white text-base font-semibold mb-5 heading-font">Our Services</h4>
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
            <h4 className="text-white text-base font-semibold mb-5 heading-font">Useful Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                  <ChevronRight size={13} className="text-primary" /> FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                  <ChevronRight size={13} className="text-primary" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                  <ChevronRight size={13} className="text-primary" /> Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                  <ChevronRight size={13} className="text-primary" /> Career
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                  <ChevronRight size={13} className="text-primary" /> Gallery
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                  <ChevronRight size={13} className="text-primary" /> Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 - Get In Touch */}
          <div>
            <h4 className="text-white text-base font-semibold mb-5 heading-font">Get In Touch</h4>
            <ul className="space-y-3.5">
              <li className="flex gap-3 text-xs text-gray-400 items-start">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white mt-0.5">
                  <MapPin size={14} />
                </div>
                <span>{siteData.company.footerAddress}</span>
              </li>
              <li className="flex gap-3 text-xs text-gray-400 items-center">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white">
                  <Phone size={14} />
                </div>
                <span>{siteData.company.phone}</span>
              </li>
              <li className="flex gap-3 text-xs text-gray-400 items-center">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white">
                  <Mail size={14} />
                </div>
                <span>{siteData.company.email}</span>
              </li>
              <li className="flex gap-3 text-xs text-gray-400 items-start">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white mt-0.5">
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
          <p>© 2026 {siteData.company.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/20">|</span>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms & Conditions</Link>
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
