"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, Clock, MapPin, Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import siteData from "../site.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full relative z-50">
      {/* Top Bar - Dual Color */}
      <div className="w-full text-white text-xs lg:text-[13px] hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full">
          {/* Left Blue Section */}
          <div className="md:col-span-6 lg:col-span-6 bg-primary py-2.5 px-4 lg:px-12 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={13} className="text-white" />
              <span className="font-medium tracking-wide">HELP LINE: {siteData.company.helpLine}</span>
            </div>
            <span className="text-white/40">|</span>
            <div className="flex items-center gap-2">
              <Clock size={13} className="text-white" />
              <span>Open Hours: {siteData.company.openHours}</span>
            </div>
          </div>

          {/* Right Dark Navy Section */}
          <div className="md:col-span-6 lg:col-span-6 bg-[#0e213b] py-2.5 px-4 lg:px-12 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 truncate">
              <MapPin size={13} className="text-white flex-shrink-0" />
              <span className="truncate text-gray-200">{siteData.company.headerAddress}</span>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-white/30 mr-1">|</span>
              <Link href={siteData.company.socials.facebook} className="text-gray-300 hover:text-white transition-colors"><FaFacebook size={13} /></Link>
              <Link href={siteData.company.socials.linkedin} className="text-gray-300 hover:text-white transition-colors"><FaLinkedin size={13} /></Link>
              <Link href={siteData.company.socials.instagram} className="text-gray-300 hover:text-white transition-colors"><FaInstagram size={13} /></Link>
              <Link href={siteData.company.socials.youtube} className="text-gray-300 hover:text-white transition-colors"><FaYoutube size={13} /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0">
        <div className="container-custom flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image 
              src={siteData.company.logo} 
              alt={siteData.company.name} 
              width={180} 
              height={45} 
              className="h-10 w-auto object-contain" 
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteData.navigation.map((item, index) => {
              const isHome = item.href === "/" && pathname === "/";
              const isCurrent = item.href !== "/" && pathname.startsWith(item.href);
              const isActive = isHome || isCurrent;

              if (item.label === "Services") {
                return (
                  <div 
                    key={index} 
                    className="relative group"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href="/services"
                      className={`font-semibold text-[15px] transition-colors flex items-center gap-1.5 py-2 ${
                        isActive ? "text-primary border-b-2 border-primary" : "text-[#1e293b] hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg border border-gray-100 py-2 hidden group-hover:block z-50">
                      <Link 
                        href="/services" 
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary font-medium"
                      >
                        All Services
                      </Link>
                      {siteData.services.items.map((srv, idx) => (
                        <Link
                          key={idx}
                          href={srv.link}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-primary transition-colors"
                        >
                          {srv.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link 
                  key={index} 
                  href={item.href}
                  className={`font-semibold text-[15px] transition-colors py-2 ${
                    isActive ? "text-primary border-b-2 border-primary" : "text-[#1e293b] hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link 
              href="/contact-us" 
              className="bg-primary text-white hover:bg-blue-700 transition-colors py-2.5 px-6 rounded-md text-sm font-semibold flex items-center gap-2 shadow-sm"
            >
              Get a Quote <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-gray-800 p-2" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t py-4 px-6 flex flex-col gap-3">
          {siteData.navigation.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className="text-gray-800 font-semibold py-2.5 border-b border-gray-100 text-sm hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/contact-us" 
            className="bg-primary text-white text-center py-3 rounded font-semibold text-sm mt-2 flex items-center justify-center gap-2" 
            onClick={() => setIsOpen(false)}
          >
            Get a Quote <ArrowRight size={15} />
          </Link>
        </div>
      )}
    </header>
  );
}
