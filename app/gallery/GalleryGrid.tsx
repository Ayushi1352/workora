import siteData from "@/data";
import GalleryLightbox from "./GalleryLightbox";

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

        <GalleryLightbox images={galleryPage.images} />
      </div>
    </section>
  );
}