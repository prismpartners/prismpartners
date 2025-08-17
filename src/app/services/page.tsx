import {
  PageHeader,
  PageHeaderShortDesc,
  PageHeaderTitle,
} from "@/components/layout/page-header";
import { cn } from "@/lib/utils";
import { services } from "@/lib/data";

/* eslint-disable @next/next/no-img-element */
export default function Services() {
  return (
    <>
      <PageHeader>
        <PageHeaderTitle> Our Services</PageHeaderTitle>
        <PageHeaderShortDesc>
          Comprehensive construction solutions tailored to bring your vision to
          life with precision, quality, and excellence.
        </PageHeaderShortDesc>
      </PageHeader>

      {/* Architectural Design Section */}
      {services.map((service, idx) => (
        <section
          key={idx}
          className={cn("py-20", idx % 2 == 1 && "bg-gray-50")}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div
                className={cn(
                  "order-1",
                  idx % 2 == 1 ? "lg:order-2" : "lg:order-1"
                )}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 lg:hidden">
                  {service.title}
                </h2>
                <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={cn(
                  "order-2 flex flex-col justify-between h-full",
                  idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                )}
              >
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 hidden lg:block">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.breifDescription}
                  </p>
                  <ul className="list-disc marker:text-primary marker:text-2xl pl-5 space-y-4 text-gray-700 mb-8">
                    {service.comprehensives.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <button className="bg-[#E30613] text-white px-8 py-3 rounded-lg w-fit font-semibold text-lg hover:bg-[#C5050F] transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
