"use client";

import Link from "next/link";
import { ReactNode } from "react";

export default function LandingServices() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive construction solutions for all your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <LandingServicesCard>
            <LandingServicesCardImage url="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800" />
            <LandingServicesCardBody>
              <LandingServicesCardTitle>
                Architectural Design
              </LandingServicesCardTitle>
              <LandingServicesCardDesc>
                Creative and functional designs that bring your vision to life
                with precision and style.
              </LandingServicesCardDesc>
              <LandingServicesCardButton href="/services#architectural-design">
                Learn More →
              </LandingServicesCardButton>
            </LandingServicesCardBody>
          </LandingServicesCard>

          <LandingServicesCard>
            <LandingServicesCardImage url="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" />
            <LandingServicesCardBody>
              <LandingServicesCardTitle>Construction</LandingServicesCardTitle>
              <LandingServicesCardDesc>
                Expert construction services using quality materials and skilled
                craftsmanship.
              </LandingServicesCardDesc>
              <LandingServicesCardButton href="/services#construction">
                Learn More →
              </LandingServicesCardButton>
            </LandingServicesCardBody>
          </LandingServicesCard>

          <LandingServicesCard>
            <LandingServicesCardImage url="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" />
            <LandingServicesCardBody>
              <LandingServicesCardTitle>
                Interior Design
              </LandingServicesCardTitle>
              <LandingServicesCardDesc>
                Transform spaces with beautiful, functional interior design
                solutions.
              </LandingServicesCardDesc>
              <LandingServicesCardButton href="/services#interior-design">
                Learn More →
              </LandingServicesCardButton>
            </LandingServicesCardBody>
          </LandingServicesCard>
        </div>
      </div>
    </section>
  );
}

function LandingServicesCard({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {children}
    </div>
  );
}

function LandingServicesCardImage({ url }: { url: string }) {
  return (
    <div
      className="h-48 bg-cover bg-center"
      style={{
        backgroundImage: `url("${url}")`,
      }}
    ></div>
  );
}

function LandingServicesCardBody({ children }: { children: ReactNode }) {
  return <div className="p-6">{children}</div>;
}

function LandingServicesCardTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{children}</h3>
  );
}

function LandingServicesCardDesc({ children }: { children: ReactNode }) {
  return <p className="text-gray-600 mb-4">{children}</p>;
}

function LandingServicesCardButton({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link href={href}>
      <button className="text-primary font-semibold hover:text-destructive hover:cursor-pointer transition-colors">
        {children}
      </button>
    </Link>
  );
}
