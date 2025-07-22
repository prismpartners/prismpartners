import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { navLinks, socialLinks as scLinks, contactInfo } from "@/lib/constants";
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

  return (
    <footer id="contact" className="bg-[#1F1F1F] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/logo-lg.png"
              alt="Prism Partners"
              width={273}
              height={142}
              className="h-18 w-auto"
            />
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
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#architectural-design"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Architectural Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#construction"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services#interior-design"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Interior Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Project Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a
                className="flex items-center"
                href={`https://api.whatsapp.com/send/?phone=${contactInfo.mobile.number}&text&type=phone_number&app_absent=0`}
                target="_blank"
              >
                <Phone className="w-5 h-5 text-primary mr-3" />
                <span className="text-gray-300">
                  {contactInfo.mobile.formatted}
                </span>
              </a>
              <a className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <span className="text-gray-300">{contactInfo.email}</span>
              </a>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 shrink-0 mt-1" />
                <span className="text-gray-300">
                  {contactInfo.addresses.map(({ type, address }) => (
                    <span key={address}>
                      {type}: {address}
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
          <p className="text-gray-300">
            © {currentYear} Prism Partners. All rights reserved. | Privacy
            Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
