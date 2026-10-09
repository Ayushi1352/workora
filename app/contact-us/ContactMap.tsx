import siteData from "@/data";

export default function ContactMap() {
  return (
    <div className="h-72 w-full overflow-hidden rounded-3xl sm:h-96 lg:h-112.5 lg:r-22">
      <iframe
        title="Google Map Location"
        src={siteData.contactUsPage.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="size-full border-0"
      />
    </div>
  );
}
