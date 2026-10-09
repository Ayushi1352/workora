"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Mail, MessageSquareMore, Phone, UserRound } from "lucide-react";
import HighlightedText from "@/components/HighlightedText";
import siteData from "@/data";

const form = siteData.contactUsPage.formSection;

const fields = [
  { type: "text", placeholder: form.fields.firstNamePlaceholder, Icon: UserRound },
  { type: "text", placeholder: form.fields.lastNamePlaceholder, Icon: UserRound },
  { type: "tel", placeholder: form.fields.phonePlaceholder, Icon: Phone },
  { type: "email", placeholder: form.fields.emailPlaceholder, Icon: Mail },
];

const control =
  "w-full rounded-lg border border-[#e3e8f0] bg-white text-base text-[#0b1230] outline-none transition-colors placeholder:text-[#5b647e] focus:border-[#0f52d9] lg:r-8 lg:fs-17";

export default function ContactForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/thank-you");
  };

  return (
    <div className="rounded-3xl bg-[#f5f8fd] px-5 pb-8 pt-7 font-sans sm:px-8 lg:h-188 lg:r-22 lg:px-0 lg:pb-0 lg:pl-10.25 lg:pr-10 lg:pt-8">
      <div className="flex items-center gap-4 text-sm font-medium uppercase tracking-[0.1em] text-[#3b7be8] lg:fs-16 lg:leading-none">
        <span className="h-0.5 w-7 shrink-0 bg-[#3b7be8]" />
        {form.sectionSubtitle}
      </div>
      <h2 className="mt-3 whitespace-pre-line font-sans text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-[#0b1230] lg:mt-4.5 lg:fs-50 lg:leading-[1.1]">
        <HighlightedText text={form.title} highlight={form.titleHighlight} className="text-[#0f52d9]" />
      </h2>
      <p className="mt-3 text-base leading-relaxed text-[#5b647e] lg:mt-2.75 lg:whitespace-pre-line lg:fs-19.5 lg:leading-[1.487]">
        {form.description}
      </p>

      <form onSubmit={handleSubmit} className="mt-6 lg:mt-8.25">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-x-6.25 lg:gap-y-5.75">
          {fields.map(({ type, placeholder, Icon }) => (
            <label key={placeholder} className="relative block">
              <Icon className="pointer-events-none absolute left-5 top-1/2 size-5.5 -translate-y-1/2 text-[#5b647e] lg:left-5.5 lg:size-6" strokeWidth={1.75} />
              <input type={type} required placeholder={placeholder} aria-label={placeholder} className={`${control} h-14 pl-14 pr-4 lg:h-16.25 lg:pl-16.5`} />
            </label>
          ))}
        </div>
        <label className="relative mt-4 block lg:mt-6.75">
          <MessageSquareMore className="pointer-events-none absolute left-5 top-4.5 size-5.5 text-[#5b647e] lg:left-5.5 lg:top-5 lg:size-6.5" strokeWidth={1.75} />
          <textarea
            required
            placeholder={form.fields.messagePlaceholder}
            aria-label={form.fields.messagePlaceholder}
            className={`${control} block h-36 resize-y py-4 pl-14 pr-4 lg:h-36.75 lg:pl-17.75 lg:pt-5`}
          />
        </label>
        <button
          type="submit"
          className="mt-6 inline-flex h-14 w-full items-center justify-center gap-6 rounded-lg bg-[#0f52d9] text-lg font-semibold text-white transition-colors hover:bg-[#0c43b3] sm:w-auto sm:px-16 lg:mt-7.25 lg:h-16 lg:w-83 lg:gap-8 lg:r-8 lg:px-0 lg:fs-19"
        >
          {form.submitText}
          <ArrowRight className="size-6 lg:size-7" strokeWidth={2} />
        </button>
      </form>
    </div>
  );
}
