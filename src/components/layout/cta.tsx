import { contactInfo } from "@/lib/constants";
import { MessageCircle } from "lucide-react";
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

      {/* Floating WhatsApp button as CTA */}
      <div className="fixed bottom-6 right-6 z-50 block md:hidden">
        <a
          href={contactInfo.mobile.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
