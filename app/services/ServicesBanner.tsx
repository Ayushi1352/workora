import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function ServicesBanner() {
  return (
    <section className="relative w-full h-[260px] md:h-[320px] bg-[#0c1c30] flex items-center justify-center overflow-hidden">
      {/* Background Graphic Banner */}
      <Image
        src="/page-banner.webp"
        alt="Services Banner"
        fill
        priority
        className="object-cover opacity-60 mix-blend-screen"
      />
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071322]/90 via-[#0b1c31]/75 to-[#071322]/90 z-10"></div>

      <div className="container-custom relative z-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 heading-font tracking-tight">
          Services
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-300 font-medium">
          <Link href="/" className="hover:text-primary transition-colors text-gray-300">
            Home
          </Link>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-white">Services</span>
        </div>
      </div>
    </section>
  );
}
