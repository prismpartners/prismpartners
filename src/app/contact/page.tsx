import { Phone, Mail, MapPin } from "lucide-react";
import {
  PageHeader,
  PageHeaderShortDesc,
  PageHeaderTitle,
} from "@/components/layout/page-header";
import { contactInfo } from "@/lib/constants";
import ContactForm from "@/components/layout/contact-form";



export default function Contact() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHeader>
        <PageHeaderTitle>Get in Touch</PageHeaderTitle>
        <PageHeaderShortDesc>
          Ready to start your construction project? Contact us today for a free
          consultation and let&apos;s bring your vision to life.
        </PageHeaderShortDesc>
      </PageHeader>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Company Info */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Address
                      </h3>
                      {contactInfo.addresses.map(
                        ({ type, address, mapLink }) => (
                          <span key={address}>
                            <a
                              href={mapLink}
                              target="_blank"
                              className="hover:underline"
                            >
                              <span className="font-medium">{type}</span>:{" "}
                              {address}
                            </a>
                            <br />
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Phone
                      </h3>
                      {contactInfo.mobile.formatted.map((n) => (
                        <p key={n} className="text-gray-600">
                          {n}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600">info@prismpartners.com</p>
                      <p className="text-gray-600">
                        projects@prismpartners.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Business Hours
                  </h3>
                  <div className="space-y-1 text-gray-600">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Find Us
                </h3>
                <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733!2d-118.4085!3d34.0901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04!0x0!2zMzTCsDA1JzI0LjQiTiAxMTjCsDI0JzMwLjYiVw!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Prism Partners Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
