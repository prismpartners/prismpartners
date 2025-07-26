import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        }}
      >
        <div className="absolute inset-0 bg-black/50 "></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Your One-Stop Construction Partner
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          From design to delivery – hassle-free construction for your dream
          space.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/quote">
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-destructive hover:cursor-pointer transition-colors">
              Get Free Consultation
            </button>
          </Link>
          <Link href="/projects">
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 hover:cursor-pointer transition-colors">
              See Our Work
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
