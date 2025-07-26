import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import {
  navLinks,
  socialLinks as scLinks,
  servicesLinks as svLinks,
  contactInfo,
  developerInfo,
} from "@/lib/constants";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = navLinks.map((link) => (
    <li key={link.href}>
      <Link
        href={link.href}
        className="text-gray-300 hover:text-primary transition-colors"
      >
        {link.title}
      </Link>
    </li>
  ));

  const socialLinks = scLinks.map(({ url, icon: Icon, platform }) => (
    <Link target="_blank" key={platform} href={url}>
      {Icon == null ? (
        <span className="hover:text-primary text-xs">{platform}</span>
      ) : (
        <Icon className="w-6 h-6 text-gray-300 hover:text-primary cursor-pointer transition-colors" />
      )}
    </Link>
  ));

  const servicesLinks = svLinks.map((link) => (
    <li key={link.title}>
      <Link
        href={link.href}
        className="text-gray-300 hover:text-primary transition-colors"
      >
        {link.title}
      </Link>
    </li>
  ));

  return (
    <footer id="contact" className="bg-[#1F1F1F] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <Image
                src="/logo-lg.png"
                alt="Prism Partners"
                width={273}
                height={142}
                className="h-18 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Your trusted construction partner. Building dreams, creating
              futures.
            </p>
            <div className="flex space-x-4 items-center">{socialLinks} </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">{navigationLinks}</ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              <Link href="/services" className="hover:text-primary">
                Services
              </Link>
            </h3>
            <ul className="space-y-2">{servicesLinks}</ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a
                className="flex items-center hover:underline"
                href={contactInfo.mobile.whatsappLink}
                target="_blank"
              >
                <Phone className="w-5 h-5 text-primary mr-3" />
                <span className="text-gray-300">
                  {contactInfo.mobile.formatted}
                </span>
              </a>
              <a
                className="flex items-center hover:underline"
                href={`mailto:${contactInfo.email}`}
              >
                <Mail className="w-5 h-5 text-primary mr-3" />
                <span className="text-gray-300">{contactInfo.email}</span>
              </a>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 shrink-0 mt-1" />
                <span className="text-gray-300">
                  {contactInfo.addresses.map(({ type, address, mapLink }) => (
                    <span key={address}>
                      <a
                        href={mapLink}
                        target="_blank"
                        className="hover:underline"
                      >
                        {type}: {address}
                      </a>
                      <br />
                      <br />
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p>
            © {currentYear}{" "}
            <Link href="/" className="underline font-semibold">
              Prism Partners
            </Link>
            . All rights reserved.
          </p>
          <p className="text-gray-300 text-sm mt-2">
            Developed by{" "}
            <a href={developerInfo.contact} className="underline">
              {developerInfo.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
