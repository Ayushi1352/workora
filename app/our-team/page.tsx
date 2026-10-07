import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Page() {
  return (
    <div>
      {/* Breadcrumb Banner */}
      <section className="bg-dark text-white py-20 bg-[url('/stats-bg.webp')] bg-cover bg-center bg-blend-overlay bg-opacity-80">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold heading-font mb-4">Our Team</h1>
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Our Team</span>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-dark heading-font mb-6">Our Team Content</h2>
          <p className="text-gray-600 max-w-2xl">
            This is the our team page. The structure is set up exactly as requested, with the page component and files scoped to this folder.
          </p>
        </div>
      </section>
    </div>
  );
}
