import siteData from "../../site.json";

export default function QuoteProcess() {
  const { process } = siteData.getAQuotePage;

  return (
    <div className="pt-16 border-t border-gray-100 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Title */}
        <div className="lg:col-span-3">
          <h5 className="text-primary font-semibold text-xs tracking-wider uppercase mb-2 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-primary"></span>
            {process.sectionSubtitle}
          </h5>
          <h2 className="text-2xl md:text-3xl font-bold text-dark leading-tight heading-font">
            {process.title}
          </h2>
        </div>

        {/* Right 4 Steps */}
        <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
          {process.steps.map((item, index) => (
            <div key={index} className="relative flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm">
                  {item.number}
                </div>
                {index < process.steps.length - 1 && (
                  <div className="hidden md:block flex-grow border-t-2 border-dashed border-gray-200"></div>
                )}
              </div>
              <h4 className="font-bold text-dark text-sm mb-1 heading-font">
                {item.title}
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
