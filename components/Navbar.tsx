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
  const pathname = usePathname();

  return (
    <>
      {/* Top Bar - Dual Color */}
      <div className="w-full text-white text-xs lg:text-[13px] hidden md:block">
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Blue Section */}
          <div className="md:w-1/2 bg-[#3258a3] py-2 px-4 lg:px-12 flex items-center justify-start gap-5 font-sans">
            <div className="flex items-center gap-2">
              <Phone size={13} className="text-white" />
              <span className="font-semibold tracking-wider text-[11px] lg:text-xs">
                {siteData.company.helpLineLabel} {siteData.company.helpLine}
              </span>
            </div>
            <span className="text-white/40 font-light">|</span>
            <div className="flex items-center gap-2">
              <Clock size={13} className="text-white" />
              <span className="font-medium text-[11px] lg:text-xs text-white/95">
                {siteData.company.openHoursLabel} {siteData.company.openHours}
              </span>
            </div>
          </div>

          {/* Right Dark Navy Section */}
          <div className="md:w-1/2 bg-dark py-2 px-4 lg:px-12 flex items-center justify-between gap-4 font-sans">
            <div className="flex items-center gap-2 truncate">
              <MapPin size={13} className="text-white flex-shrink-0" />
              <span className="truncate text-gray-200 text-[11px] lg:text-xs">
                {siteData.company.headerAddress}
              </span>
            </div>
            <div className="flex items-center gap-3.5 flex-shrink-0">
              <span className="text-white/30 mr-0.5">|</span>
              <Link href={siteData.company.socials.facebook} className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebook size={13} />
              </Link>
              <Link href={siteData.company.socials.linkedin} className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={13} />
              </Link>
              <Link href={siteData.company.socials.instagram} className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram size={13} />
              </Link>
              <Link href={siteData.company.socials.youtube} className="text-gray-300 hover:text-white transition-colors" aria-label="YouTube">
                <FaYoutube size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-xs">
        <div className="w-full px-4 lg:px-12 flex justify-between items-center py-3.5">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src={siteData.company.logo} 
              alt={siteData.company.name} 
              width={200} 
              height={42} 
              className="h-9 md:h-11 w-auto object-contain" 
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {siteData.navigation.map((item, index) => {
              const isHome = item.href === "/" && pathname === "/";
              const isCurrent = item.href !== "/" && pathname.startsWith(item.href);
              const isActive = isHome || isCurrent;

              if (item.label === "Services") {
                return (
                  <div key={index} className="relative group py-2">
                    <Link
                      href="/services"
                      className={`font-semibold text-sm xl:text-[15px] transition-colors flex items-center gap-1.5 ${
                        isActive ? "text-[#3258a3]" : "text-[#1e293b] hover:text-[#3258a3]"
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    {/* Active Bottom Indicator */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#3258a3] rounded-full" />
                    )}

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-60 bg-white shadow-xl rounded-xl border border-gray-100 py-2 hidden group-hover:block z-50 transition-all">
                      <Link 
                        href="/services" 
                        className="block px-4 py-2.5 text-xs font-bold text-gray-800 hover:bg-blue-50 hover:text-[#3258a3]"
                      >
                        {siteData.navbar.allServicesLabel}
                      </Link>
                      {siteData.services.items.map((srv, idx) => (
                        <Link
                          key={idx}
                          href={srv.link}
                          className="block px-4 py-2 text-xs text-gray-600 hover:bg-blue-50 hover:text-[#3258a3] transition-colors"
                        >
                          {srv.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <div key={index} className="relative py-2">
                  <Link 
                    href={item.href}
                    className={`font-semibold text-sm xl:text-[15px] transition-colors ${
                      isActive ? "text-[#3258a3]" : "text-[#1e293b] hover:text-[#3258a3]"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {/* Active Bottom Indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#3258a3] rounded-full" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden lg:block">
            <Link 
              href={siteData.navbar?.ctaLink || "/get-a-quote"} 
              className="bg-[#3258a3] text-white hover:bg-[#254483] transition-colors py-2.5 px-5 lg:px-6 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-xs"
            >
              {siteData.navbar.ctaText} <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-2xl border-t py-4 px-6 flex flex-col gap-3 transition-all">
          {siteData.navigation.map((item, index) => {
            const isHome = item.href === "/" && pathname === "/";
            const isCurrent = item.href !== "/" && pathname.startsWith(item.href);
            const isActive = isHome || isCurrent;

            return (
              <Link 
                key={index} 
                href={item.href}
                className={`font-semibold py-2.5 border-b border-gray-100 text-sm ${
                  isActive ? "text-[#3258a3]" : "text-gray-800 hover:text-[#3258a3]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link 
            href={siteData.navbar?.ctaLink || "/get-a-quote"} 
            className="bg-[#3258a3] text-white text-center py-3 rounded-lg font-semibold text-sm mt-2 flex items-center justify-center gap-2 shadow-xs" 
            onClick={() => setIsOpen(false)}
          >
            {siteData.navbar.ctaText} <ArrowRight size={15} />
          </Link>
        </div>
      )}
      </header>
    </>
  );
}
