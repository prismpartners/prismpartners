"use client";

import { Award, Quote } from 'lucide-react';
import { ReactNode } from 'react';
import { achievements, coreValues, teamMembers } from '@/lib/data';


export default function About() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl text-primary font-bold mb-6 leading-tight">
              Building Dreams, Creating Futures
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              We are Prism Partners – your trusted one-stop solution for all construction needs.
              From architectural design to construction and interior design, we transform visions into reality
              with unmatched quality, innovation, and trust.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009, Prism Partners began with a simple yet powerful vision: to revolutionize
                  the construction industry by providing seamless, end-to-end solutions that eliminate the
                  stress and complexity typically associated with building projects.
                </p>
                <p>
                  Our founder, Michael Rodriguez, experienced firsthand the frustration of coordinating
                  multiple contractors, architects, and designers for his own home renovation. This sparked
                  the idea to create a company that would handle every aspect of construction under one roof.
                </p>
                <p>
                  Today, we&apos;ve grown from a small team of passionate builders to a comprehensive construction
                  company with over 50 skilled professionals. Our integrated approach has helped hundreds of
                  clients bring their dreams to life, from luxury residential homes to cutting-edge commercial spaces.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our Story"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Quote className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">A Message from Our CEO</h2>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Michael Rodriguez, CEO"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;At Prism Partners, we don&apos;t just build structures – we build relationships, trust, and dreams.
                  Every project we undertake is a testament to our commitment to excellence and our belief that
                  great construction should be accessible, transparent, and stress-free. Our integrated approach
                  means you have one point of contact, one timeline, and one team dedicated to your success.
                  When you choose Prism Partners, you&apos;re not just hiring a contractor – you&apos;re partnering with
                  a team that genuinely cares about bringing your vision to life.&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">Michael Rodriguez</div>
                  <div className="text-primary font-medium">CEO & Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leaders bring decades of expertise and a shared passion for excellence to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {<value.icon className="h-8 w-8 text-primary" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Prism Partners?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re not just another construction company – we&apos;re your partners in creating something extraordinary.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <AboutPageUSPCard>
              <AboutPageUSPCartTitle>End-to-End Solutions</AboutPageUSPCartTitle>
              <AboutPageUSPCardShortDesc>
                From initial design concepts to final interior touches, we handle every aspect of your project.
                No need to coordinate multiple contractors – we&apos;ve got you covered.
              </AboutPageUSPCardShortDesc>
            </AboutPageUSPCard>

            <AboutPageUSPCard>
              <AboutPageUSPCartTitle>Proven Expertise</AboutPageUSPCartTitle>
              <AboutPageUSPCardShortDesc>
                With over 15 years in the industry and 500+ completed projects, our track record speaks for itself.
                We bring deep expertise to every challenge.
              </AboutPageUSPCardShortDesc>
            </AboutPageUSPCard>

            <AboutPageUSPCard>
              <AboutPageUSPCartTitle>Client Satisfaction</AboutPageUSPCartTitle>
              <AboutPageUSPCardShortDesc>
                Our 98% client satisfaction rate reflects our commitment to exceeding expectations.
                Your success is our success, and we&apos;re dedicated to making your experience exceptional.
              </AboutPageUSPCardShortDesc>
            </AboutPageUSPCard>
          </div>
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Certifications & Partnerships</h2>
            <p className="text-lg text-gray-600">
              We maintain the highest industry standards through our certifications and trusted partnerships.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold text-gray-900">Licensed Contractor</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold text-gray-900">LEED Certified</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold text-gray-900">BBB A+ Rating</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold text-gray-900">Insured & Bonded</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutPageUSPCard({ children }: { children: ReactNode }) {
  return <div className="bg-white shadow-lg hover:bg-gradient-to-br hover:from-gray-800 hover:to-primary text-black hover:text-white p-8 rounded-xl transition-all duration-100">
    {children}
  </div>
}

function AboutPageUSPCartTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-2xl font-bold mb-4">{children}</h3>

}

function AboutPageUSPCardShortDesc({ children }: { children: ReactNode }) {
  return <p className="leading-relaxed">
    {children}
  </p>
}
