import Image from "next/image";
import siteData from "@/data";

export default function GalleryGrid() {
  const { galleryPage } = siteData;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <h2 className="text-subtitle justify-center">{galleryPage.sectionSubtitle}</h2>
          <h2 className="section-title mb-4">{galleryPage.title}</h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600">
            {galleryPage.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryPage.images.map((image) => (
            <figure key={image.src} className="group overflow-hidden rounded-md border border-gray-100 bg-white shadow-sm">
              <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="border-t border-gray-100 px-4 py-3 text-sm font-semibold text-dark heading-font">
                {image.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}