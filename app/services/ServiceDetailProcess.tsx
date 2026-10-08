import siteData from "../../site.json";

export default function ServiceDetailProcess() {
  const { process } = siteData.serviceDetails;

  return (
    <div className="border-t border-gray-100 pt-6">
      <div className="mb-6">
        <h5 className="text-primary font-semibold text-xs tracking-wider uppercase mb-2 flex items-center gap-2">
          <span className="h-0.5 w-6 bg-primary"></span>
          {process.sectionSubtitle}
        </h5>
        <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3 leading-tight heading-font">
          {process.title}
        </h2>
        <p className="text-gray-600 text-sm max-w-xl leading-relaxed">
          {process.description}
        </p>
      </div>

      <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((item, index) => (
          <div key={index} className="relative flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md">
                {item.number}
              </div>
              {index < process.steps.length - 1 && (
                <div className="hidden grow border-t-2 border-dashed border-gray-200 lg:block"></div>
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
