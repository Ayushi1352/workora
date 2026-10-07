import siteData from "../../site.json";

export default function ServiceDetailProcess() {
  const { process } = siteData.serviceDetails;

  return (
    <div className="pt-8 border-t border-gray-100">
      <div className="mb-8">
        <h5 className="text-primary font-semibold text-xs tracking-wider uppercase mb-2 flex items-center gap-2">
          <span className="w-6 h-[2px] bg-primary"></span>
          {process.sectionSubtitle}
        </h5>
        <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3 leading-tight heading-font">
          {process.title}
        </h2>
        <p className="text-gray-600 text-sm max-w-xl leading-relaxed">
          {process.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {process.steps.map((item, index) => (
          <div key={index} className="relative flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-md">
                {item.number}
              </div>
              {index < process.steps.length - 1 && (
                <div className="hidden lg:block flex-grow border-t-2 border-dashed border-gray-200"></div>
              )}
            </div>
            <h4 className="font-bold text-dark text-sm mb-2 heading-font">
              {item.title}
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
