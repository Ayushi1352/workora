import { Mail, Phone, MapPin } from "lucide-react";
import siteData from "../../site.json";

export default function ContactInfo() {
  const { infoCards } = siteData.contactUsPage;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Card */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center flex-shrink-0">
            <Mail size={20} />
          </div>
          <div>
            <span className="text-gray-400 text-[11px] font-semibold uppercase block">
              Email
            </span>
            <a
              href={`mailto:${infoCards.email}`}
              className="text-dark font-bold text-xs md:text-sm hover:text-primary transition-colors"
            >
              {infoCards.email}
            </a>
          </div>
        </div>

        {/* Phone Card */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center flex-shrink-0">
            <Phone size={20} />
          </div>
          <div>
            <span className="text-gray-400 text-[11px] font-semibold uppercase block">
              Contact
            </span>
            <a
              href={`tel:${infoCards.phone.replace(/[^0-9+]/g, '')}`}
              className="text-dark font-bold text-xs md:text-sm hover:text-primary transition-colors"
            >
              {infoCards.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Location Card */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center flex-shrink-0">
          <MapPin size={20} />
        </div>
        <div>
          <span className="text-gray-400 text-[11px] font-semibold uppercase block">
            Location
          </span>
          <p className="text-dark font-bold text-xs md:text-sm">
            {infoCards.location}
          </p>
        </div>
      </div>
    </div>
  );
}
