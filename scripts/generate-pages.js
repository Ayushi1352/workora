const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '../app');
const pages = [
  { folder: 'about-us', title: 'About Us' },
  { folder: 'services', title: 'Services' },
  { folder: 'our-team', title: 'Our Team' },
  { folder: 'blogs', title: 'Blogs' },
  { folder: 'contact-us', title: 'Contact Us' }
];

pages.forEach(p => {
  const dirPath = path.join(appDir, p.folder);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const pageContent = `import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Page() {
  return (
    <div>
      {/* Breadcrumb Banner */}
      <section className="bg-dark text-white py-20 bg-[url('/stats-bg.webp')] bg-cover bg-center bg-blend-overlay bg-opacity-80">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold heading-font mb-4">{p.title}</h1>
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">{p.title}</span>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-dark heading-font mb-6">{p.title} Content</h2>
          <p className="text-gray-600 max-w-2xl">
            This is the {p.title.toLowerCase()} page. The structure is set up exactly as requested, with the page component and files scoped to this folder.
          </p>
        </div>
      </section>
    </div>
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), pageContent.replace(/\{p\.title\}/g, p.title).replace(/\{p\.title\.toLowerCase\(\)\}/g, p.title.toLowerCase()));
  console.log('Created ' + p.folder);
});
