"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import siteData from "@/data";

const company = siteData.company;

const socials = [
  { href: company.socials.facebook, label: "Facebook", Icon: FaFacebookF },
  { href: company.socials.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: company.socials.instagram, label: "Instagram", Icon: FaInstagram },
  { href: company.socials.youtube, label: "YouTube", Icon: FaYoutube },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header id="top" className="fluid sticky top-0 z-50 w-full font-figtree bg-white shadow-sm">
      {/* Top bar: the two colours meet 90 design-px right of centre, as in the design */}
      <div
        className="hidden text-white lg:block"
        style={{
          background:
            "linear-gradient(90deg,#375ca0 calc(50% + 90 * var(--u)),#142d57 calc(50% + 90 * var(--u)))",
        }}
      >
        <div className="wrap flex h-14.5 items-center fs-19 font-medium">
          <div className="flex w-233.25 shrink-0 items-center pl-8.5">
            <FaPhoneAlt className="size-6 shrink-0" />
            <span className="ml-4.5 whitespace-nowrap">
              {company.helpLineLabel} {company.helpLine}
            </span>
            <span className="mx-8.5 h-7 w-px bg-white/45" />
            <FaEnvelope className="size-6.5 shrink-0" />
            <span className="ml-4.5 whitespace-nowrap">
              {company.openHoursLabel} {company.openHours}
            </span>
          </div>
          <div className="flex min-w-0 flex-1 items-center pl-15 pr-8.5">
            <FaMapMarkerAlt className="size-6 shrink-0" />
            <span className="ml-3.5 truncate">{company.headerAddress}</span>
            <span className="ml-auto h-7 w-px shrink-0 bg-white/35" />
            <div className="ml-8.5 flex shrink-0 items-center gap-6">
              {socials.map(({ href, label, Icon }) => (
                <Link key={label} href={href} aria-label={label} className="transition-opacity hover:opacity-75">
                  <Icon className="size-5.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Compact top bar for phones and tablets */}
      <div className="flex items-center justify-between gap-3 bg-[#375ca0] px-4 py-2 text-[13px] font-medium text-white lg:hidden">
        <a href={`tel:${company.helpLine.replace(/[^+\d]/g, "")}`} className="flex min-w-0 items-center gap-2">
          <FaPhoneAlt className="size-3.5 shrink-0" />
          <span className="truncate">
            {company.helpLineLabel} {company.helpLine}
          </span>
        </a>
        <div className="flex shrink-0 items-center gap-3.5">
          {socials.map(({ href, label, Icon }) => (
            <Link key={label} href={href} aria-label={label}>
              <Icon className="size-3.5" />
            </Link>
          ))}
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white shadow-[0_1px_0_rgba(15,23,42,0.06)]">
        <div className="wrap flex h-18 items-center justify-between px-4 lg:h-31.25 lg:justify-start lg:pl-7.75 lg:pr-9.25">
          <Link href="/" className="shrink-0">
            <Image
              src={company.logo}
              alt={company.name}
              width={356}
              height={82}
              preload
              unoptimized
              className="h-11 w-auto lg:h-20.5"
            />
          </Link>

          <nav className="hidden h-full items-center gap-14 fs-21 font-bold text-[#0b193f] lg:ml-27.5 lg:flex">
            {siteData.navigation.map((item) => {
              const active = isActive(item.href);
              const hasMenu = item.href === "/services";
              return (
                <div key={item.href} className="group relative flex h-full items-center">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2.5 whitespace-nowrap transition-colors hover:text-[#2f55a4] ${active ? "text-[#2f55a4]" : ""}`}
                  >
                    {item.label}
                    {hasMenu && <ChevronDown className="size-5 transition-transform group-hover:rotate-180" strokeWidth={2.75} />}
                  </Link>
                  {active && <span className="absolute -inset-x-1.75 bottom-5.5 h-0.75 rounded-full bg-[#2f55a4]" />}

                  {hasMenu && (
                    <div className="invisible absolute left-0 top-full z-50 w-72 rounded-b-lg border border-gray-100 bg-white py-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                      {siteData.services.items.map((service) => (
                        <Link
                          key={service.link}
                          href={service.link}
                          className="block px-5 py-2.5 fs-17 font-medium text-[#0b193f] transition-colors hover:bg-[#eef2f8] hover:text-[#2f55a4]"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <Link
            href={siteData.hero.ctaLink}
            className="ml-auto hidden h-18 items-center gap-3 r-6 bg-brand px-9 fs-21 font-bold text-white transition-colors hover:bg-[#2c4c8a] lg:flex"
          >
            {siteData.hero.ctaText}
            <ArrowRight className="size-5.5" strokeWidth={2.25} />
          </Link>

          <button
            type="button"
            className="p-2 text-[#0b193f] lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute inset-x-0 top-full flex flex-col border-t border-gray-100 bg-white px-4 pb-5 pt-2 shadow-xl lg:hidden">
          {siteData.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`border-b border-gray-100 py-3.5 text-base font-semibold ${isActive(item.href) ? "text-[#2f55a4]" : "text-[#0b193f]"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={siteData.hero.ctaLink}
            onClick={() => setIsOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-md bg-brand py-3.5 text-base font-semibold text-white"
          >
            {siteData.hero.ctaText} <ArrowRight size={18} />
          </Link>
        </div>
      )}
    </header>
  );
}
