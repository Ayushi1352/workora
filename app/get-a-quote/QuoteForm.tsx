"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, FileText, Mail, Phone, UserRound } from "lucide-react";
import siteData from "@/data";

const form = siteData.getAQuotePage.form;

const fields = [
  { type: "text", label: form.fields.nameLabel, placeholder: form.fields.namePlaceholder, Icon: UserRound },
  { type: "email", label: form.fields.emailLabel, placeholder: form.fields.emailPlaceholder, Icon: Mail },
  { type: "tel", label: form.fields.phoneLabel, placeholder: form.fields.phonePlaceholder, Icon: Phone },
];

const control =
  "w-full rounded-md border border-[#dfe4ec] bg-white text-[15px] text-[#0b1230] outline-none transition-colors placeholder:text-[#5b647e] focus:border-[#0f52d9] lg:r-5 lg:fs-15";
const labelClass = "block text-[15px] font-medium text-[#0b1230] lg:fs-16 lg:leading-[1.125]";

export default function QuoteForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/thank-you");
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white font-sans shadow-[0_4px_24px_rgba(15,30,70,0.1)] lg:r-12">
      <div className="flex items-start bg-linear-to-r from-[#0b3aa0] to-[#0a2f86] px-5 py-6 text-white lg:h-26.25 lg:px-0 lg:py-0 lg:pl-7.75 lg:pt-7">
        <FileText className="size-10 shrink-0 lg:size-11.5" strokeWidth={1.25} />
        <div className="ml-5 lg:-mt-1 lg:ml-7.5">
          <h2 className="font-exo text-2xl font-bold lg:fs-25 lg:leading-[1.2]">{form.title}</h2>
          <p className="mt-1 text-sm lg:mt-1.5 lg:fs-15.5 lg:leading-[1.3]">{form.subtitle}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-5 pb-8 pt-5 lg:px-8 lg:pb-9.75 lg:pt-5">
        {fields.map(({ type, label, placeholder, Icon }) => (
          <label key={label} className={labelClass}>
            {label} <span className="text-[#e11d48]">*</span>
            <span className="relative mt-1.5 block font-normal">
              <Icon className="pointer-events-none absolute left-4.5 top-1/2 size-5 -translate-y-1/2 text-[#5b647e]" strokeWidth={1.75} />
              <input type={type} required placeholder={placeholder} className={`${control} h-11 pl-12.75 pr-4`} />
            </span>
          </label>
        ))}
        <label className={labelClass}>
          {form.fields.messageLabel} <span className="text-[#e11d48]">*</span>
          <textarea
            required
            placeholder={form.fields.messagePlaceholder}
            className={`${control} mt-1.5 block h-30.5 resize-y px-4 py-3 font-normal`}
          />
        </label>
        <button
          type="submit"
          className="mt-1 flex h-13.5 w-full items-center justify-center gap-4 rounded-md bg-[#0f52d9] text-base font-semibold text-white transition-colors hover:bg-[#0c43b3] lg:r-5 lg:fs-17"
        >
          {form.submitText}
          <ArrowRight className="size-5.5" strokeWidth={2} />
        </button>
      </form>
    </div>
  );
}
