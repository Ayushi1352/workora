import siteData from "../../site.json";

export default function ContactMap() {
  const mapUrl = siteData.contactUsPage.mapEmbedUrl;

  return (
    <div className="w-full h-[260px] sm:h-[280px] rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative">
      <iframe
        title="Google Map Location"
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
