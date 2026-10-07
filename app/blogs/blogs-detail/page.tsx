import BlogDetailBanner from "../BlogDetailBanner";
import BlogDetailContent from "../BlogDetailContent";

export const metadata = {
  title: "Blogs Detail | Workora HR Consultancy",
  description: "The Future of Employee Engagement - What's Next? Comprehensive HR Blog Detail.",
};

export default function ExactBlogDetailPage() {
  return (
    <div>
      <BlogDetailBanner 
        title="Blogs Detail" 
        breadcrumb="Blogs Detail" 
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <BlogDetailContent />
        </div>
      </section>
    </div>
  );
}
