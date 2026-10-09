import siteData from "./site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type WorkoraSchema = typeof siteData.Workora;
export type WorkoraSections = WorkoraSchema["sections"];
export type WorkoraTemplateComponents = WorkoraSchema["templateComponents"];

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type WorkoraTopbarData = WorkoraSections["Topbar"]["variants"]["WorkoraTopbar1"];
export type WorkoraHeaderData = WorkoraSections["Header"]["variants"]["WorkoraHeader1"];
export type WorkoraBannerData = WorkoraSections["Banner"]["variants"]["WorkoraBanner1"];
export type WorkoraAboutData = WorkoraSections["About"]["variants"]["WorkoraAbout1"];
export type WorkoraStatsData =
  WorkoraSections["CompanyStatistics"]["variants"]["WorkoraStats1"];
export type WorkoraServicesData =
  WorkoraSections["Services"]["variants"]["WorkoraServices1"];
export type WorkoraTeamData = WorkoraSections["Team"]["variants"]["WorkoraTeam1"];
export type WorkoraTestimonialData =
  WorkoraSections["Testimonial"]["variants"]["WorkoraTestimonial1"];
export type WorkoraBlogData = WorkoraSections["Blog"]["variants"]["WorkoraBlog1"];
export type WorkoraFooterData = WorkoraSections["Footer"]["variants"]["WorkoraFooter1"];
export type WorkoraPageBannerData =
  WorkoraSections["PageBanner"]["variants"]["WorkoraPageBanner1"];
export type WorkoraAboutOverviewData =
  WorkoraSections["AboutOverview"]["variants"]["WorkoraAboutOverview1"];
export type WorkoraWhyChooseUsData =
  WorkoraSections["WhyChooseUs"]["variants"]["WorkoraWhyChooseUs1"];
export type WorkoraServicesPageData =
  WorkoraSections["ServicesPage"]["variants"]["WorkoraServicesPage1"];
export type WorkoraServiceDetailData =
  WorkoraSections["ServiceDetail"]["variants"]["WorkoraServiceDetail1"];
export type WorkoraTeamPageData =
  WorkoraSections["TeamPage"]["variants"]["WorkoraTeamPage1"];
export type WorkoraBlogsPageData =
  WorkoraSections["BlogsPage"]["variants"]["WorkoraBlogsPage1"];
export type WorkoraBlogDetailData =
  WorkoraSections["BlogDetail"]["variants"]["WorkoraBlogDetail1"];
export type WorkoraContactData =
  WorkoraSections["ContactDetails"]["variants"]["WorkoraContact1"];
export type WorkoraFAQData = WorkoraSections["FAQ"]["variants"]["WorkoraFAQ1"];
export type WorkoraGalleryData =
  WorkoraSections["Gallery"]["variants"]["WorkoraGallery1"];
export type WorkoraCareerData =
  WorkoraSections["Career"]["variants"]["WorkoraCareer1"];
export type WorkoraQuoteData =
  WorkoraSections["GetAQuote"]["variants"]["WorkoraQuote1"];
export type WorkoraPrivacyPolicyData =
  WorkoraSections["PrivacyPolicy"]["variants"]["WorkoraPrivacyPolicy1"];
export type WorkoraTermsConditionsData =
  WorkoraSections["TermsConditions"]["variants"]["WorkoraTermsConditions1"];
export type WorkoraSitemapData =
  WorkoraSections["Sitemap"]["variants"]["WorkoraSitemap1"];
export type WorkoraThankYouData =
  WorkoraSections["ThankYou"]["variants"]["WorkoraThankYou1"];

// ── Item-level types inferred from site.json ──
export type WorkoraTeamMember = WorkoraTeamData["members"][number];
export type WorkoraServiceItem = WorkoraServicesData["items"][number];
export type WorkoraBlogPost = WorkoraBlogsPageData["items"][number];
export type WorkoraNavLink = WorkoraHeaderData["links"][number];

// ── Legacy Site Map for Standalone Workora Site ──
const sec = siteData.Workora.sections;

const site = {
  topbar: sec.Topbar.variants.WorkoraTopbar1,
  navbar: sec.Header.variants.WorkoraHeader1,
  hero: sec.Banner.variants.WorkoraBanner1,
  aboutUsSection: sec.About.variants.WorkoraAbout1,
  aboutOverview: sec.AboutOverview.variants.WorkoraAboutOverview1,
  whyChooseUsSection: sec.WhyChooseUs.variants.WorkoraWhyChooseUs1,
  statsSection: sec.CompanyStatistics.variants.WorkoraStats1,
  servicesSection: sec.Services.variants.WorkoraServices1,
  teamSection: sec.Team.variants.WorkoraTeam1,
  testimonialSection: sec.Testimonial.variants.WorkoraTestimonial1,
  blogSection: sec.Blog.variants.WorkoraBlog1,
  footer: sec.Footer.variants.WorkoraFooter1,
  pageBanner: sec.PageBanner.variants.WorkoraPageBanner1,
  servicesPage: sec.ServicesPage.variants.WorkoraServicesPage1,
  serviceDetail: sec.ServiceDetail.variants.WorkoraServiceDetail1,
  teamPage: sec.TeamPage.variants.WorkoraTeamPage1,
  blogsPage: sec.BlogsPage.variants.WorkoraBlogsPage1,
  blogDetail: sec.BlogDetail.variants.WorkoraBlogDetail1,
  contactPage: sec.ContactDetails.variants.WorkoraContact1,
  faqPage: sec.FAQ.variants.WorkoraFAQ1,
  galleryPage: sec.Gallery.variants.WorkoraGallery1,
  careerPage: sec.Career.variants.WorkoraCareer1,
  quotePage: sec.GetAQuote.variants.WorkoraQuote1,
  privacyPolicyPage: sec.PrivacyPolicy.variants.WorkoraPrivacyPolicy1,
  termsConditionsPage: sec.TermsConditions.variants.WorkoraTermsConditions1,
  sitemapPage: sec.Sitemap.variants.WorkoraSitemap1,
  thankYouPage: sec.ThankYou.variants.WorkoraThankYou1,
  Workora: siteData.Workora,
};

export type SiteData = typeof site;
export { site };
export { siteData };
export default siteData;
