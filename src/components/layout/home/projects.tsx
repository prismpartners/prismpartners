"use client";

import { projects } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel";

export default function LandingProjects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-gray-600">
            Showcasing our latest construction achievements
          </p>
        </div>

        <Carousel
          opts={{ loop: true }}
          // setApi={(api) => {
          //   if (!api) return;
          //   apiRef.current = api;
          //   setCount(api.scrollSnapList().length);
          //   api.on("select", () => {
          //     setCurrent(api.selectedScrollSnap());
          //   });
          // }}
          className="relative"
        >
          <CarouselContent className="p-10">
            {projects.map((project) => (
              <CarouselItem key={project.id} className="w-full flex-shrink-0">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mx-2">
                  <div
                    className="h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url("${project.image}")` }}
                  ></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-1">📍 {project.location}</p>
                    <p className="text-gray-600">⏱️ {project.duration}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
          <CarouselDots />
        </Carousel>
      </div>
    </section>
  );
}
