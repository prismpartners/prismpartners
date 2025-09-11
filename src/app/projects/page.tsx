import { PageHeaderShortDesc, PageHeaderTitle } from '@/components/layout/page-header';
import ProjectsGrid from '@/components/layout/projects-grid';

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920")'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <PageHeaderTitle>
            Our Projects
          </PageHeaderTitle>
          <PageHeaderShortDesc>
            Take a look at our recent work in design, construction, and interiors.
          </PageHeaderShortDesc>
        </div>
      </section>

      {/* Project Grid */}
      <ProjectsGrid />
    </div>
  );
}
