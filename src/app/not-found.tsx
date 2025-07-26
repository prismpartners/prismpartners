"use client";

import Link from "next/link";
import { Home, FileText } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center my-6">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-16 h-16 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>

          <div className="relative">
            <div className="w-48 h-24 mx-auto bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
                <div
                  className="w-3 h-3 bg-primary rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-primary rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="bg-yellow-400 text-black text-xs px-2 py-1 rounded font-semibold">
                UNDER CONSTRUCTION
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-2">
            Oops! This page is under construction or doesn&apos;t exist.
          </p>
          <p className="text-gray-500">
            Don&apos;t worry, even the best construction projects have detours.
            Let&apos;s get you back on track!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold text-lg rounded-lg hover:bg-destructive shadow-lg hover:shadow-xl transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Back Home
          </Link>

          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold text-lg rounded-lg border-2 border-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-colors"
          >
            <FileText className="w-5 h-5 mr-2" />
            Request a Quote
          </Link>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-600 mb-4">
            Looking for something specific? Try these popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/services"
              className="text-primary hover:text-destructive font-medium transition-colors"
            >
              Our Services
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/contact"
              className="text-primary hover:text-destructive font-medium transition-colors"
            >
              Contact Us
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/projects"
              className="text-primary hover:text-destructive font-medium transition-colors"
            >
              Recent Projects
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/about"
              className="text-primary hover:text-destructive font-medium transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
