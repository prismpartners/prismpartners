import { Eye, MapPin } from "lucide-react"
import { projects } from "@/lib/data"

export default function ProjectsGrid() {
  return <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
        <p className="text-xl text-gray-600">Showcasing our expertise across various construction sectors</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    {/* Project Image */}
    <div className="relative h-64 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 group-hover:bg-black/40 bg-opacity-0 transition-all duration-300 flex items-center justify-center">
        <button className="opacity-0 group-hover:opacity-100 bg-[#E30613] text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <Eye className="w-5 h-5" />
          <span>View Details</span>
        </button>
      </div>

      {/* Category Badge */}
      <div className="absolute top-4 left-4">
        <span className="bg-[#E30613] text-white px-3 py-1 rounded-full text-sm font-medium">
          {project.category}
        </span>
      </div>
    </div>

    {/* Project Info */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#E30613] transition-colors">
        {project.title}
      </h3>
      <div className="flex items-center text-gray-600 mb-2">
        <MapPin className="w-4 h-4 mr-2 text-[#E30613]" />
        <span className="text-sm">{project.location}</span>
      </div>
      {project.duration && (
        <div className="flex items-center text-gray-600 mb-3">
          <svg className="w-4 h-4 mr-2 text-[#E30613]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm">{project.duration}</span>
        </div>
      )}
      <p className="text-gray-600 text-sm leading-relaxed">
        {project.description}
      </p>
    </div>
  </div>
}
