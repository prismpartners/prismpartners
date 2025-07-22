import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Build Your Dream Project?
        </h2>
        <p className="text-xl text-white mb-8">
          Let&apos;s discuss your vision and make it a reality
        </p>
        <Link href="/quote">
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors hover:cursor-pointer">
            Get Your Free Quote Now
          </button>
        </Link>
      </div>
    </section>
  );
}
