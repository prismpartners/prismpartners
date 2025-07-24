"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { projects } from "@/lib/data";

export default function LandingProjects() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

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

        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-300 ease-in-out py-8"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden mx-2">
                    <div
                      className="h-64 bg-cover bg-center"
                      style={{ backgroundImage: `url("${project.image}")` }}
                    ></div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-1">
                        📍 {project.location}
                      </p>
                      <p className="text-gray-600">⏱️ {project.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentProject ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
