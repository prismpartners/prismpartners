"use client";

import { services } from "@/lib/data";
import { cn } from "@/lib/utils";
import { GetQouteFormData, sendGetQuoteMessage } from "@/services/mail-service";
import { CheckCircle, LoaderCircle } from "lucide-react";
import { useActionState, useEffect, useState } from "react";


export default function GetFreeQuoteForm() {
  const [state, submitAction, isPending] = useActionState(sendGetQuoteMessage, {
    data: null,
    success: false,
    errors: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (state.errors !== null || state.success === true) {
      setIsSubmitted(true)
    }
  }, [state.errors, state.success]);

  const getFieldError = (field: keyof GetQouteFormData) =>
    state.errors?.fieldErrors?.[field] ?? null;

  const generateError = (field: keyof GetQouteFormData) => getFieldError(field) ? (
    getFieldError(field)?.map((m) => (
      <ShowError key={m} message={m} />
    ))
  ) : (
    <></>
  )

  const fieldClass = "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
  const labelClass = "block text-sm font-medium text-gray-700 mb-2"

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You for Your Request!
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;ve received your quote request and will get back to you within 24 hours with a detailed proposal.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-destructive transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <form action={submitAction} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className={labelClass}>
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={cn(fieldClass)}
                defaultValue={state.data?.name || ""}
                placeholder="Enter your full name"
              />
              {generateError("name")}
            </div>

            {/* Phone and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={cn(fieldClass)}
                  defaultValue={state.data?.phone || ""}
                  placeholder="01234567890"
                />
                {generateError("phone")}
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={cn(fieldClass)}
                  defaultValue={state.data?.email || ""}
                  placeholder="your@email.com"
                />
                {generateError("email")}
              </div>
            </div>

            {/* Service Type */}
            <div>
              <label htmlFor="serviceType" className={labelClass}>
                Service Type *
              </label>
              <select
                key={state.data?.serviceType}
                id="serviceType"
                name="serviceType"
                required
                defaultValue={state.data?.serviceType || ""}
                className={cn(fieldClass)}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map(({ title }) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
                <option value="Others">Others</option>
              </select>
              {generateError("serviceType")}
            </div>

            {/* Project Location and Budget Range Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectLocation" className={labelClass}>
                  Project Location
                </label>
                <input
                  type="text"
                  id="projectLocation"
                  name="projectLocation"
                  className={cn(fieldClass)}
                  defaultValue={state.data?.projectLocation || ""}
                  placeholder="City, State"
                />
                {generateError("projectLocation")}
              </div>

              <div>
                <label htmlFor="budgetRange" className={labelClass}>
                  Budget Range
                </label>
                <select
                  key={state.data?.budgetRange}
                  id="budgetRange"
                  name="budgetRange"
                  className={cn(fieldClass)}
                  defaultValue={state.data?.budgetRange || ""}
                >
                  <option value="">Select budget range</option>
                  <option value="Under 10Lacs">&lt;10Lacs</option>
                  <option value="10-50Lacs">10-50Lacs</option>
                  <option value="50-100Lacs">50-100Lacs</option>
                  <option value="100Lacs plus">100Lacs+</option>
                </select>
                {generateError("budgetRange")}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="projectDetails" className={labelClass}>
                Project Details
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                rows={4}
                className={cn(fieldClass)}
                defaultValue={state.data?.projectDetails || ""}
                placeholder="Tell us about your project, timeline, specific requirements, etc."
              />
              {generateError("projectDetails")}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={cn("w-full flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-destructive transition-colors", isPending && "opacity-50 cursor-not-allowed")}
            >
              {isPending ? <LoaderCircle className="animate-spin" /> : null} {/* showFeedback ? (state.errors !== null ? <XCircle className="transistion-all animate-pulse" /> : (state.success === true ? <CheckCircle /> : null)) : null} */}
              Submit Request
            </button>
            {state.errors?.formErrors && state.errors.formErrors.length > 0 ? <p className="text-red-500 text-sm" aria-live="polite">Sorry! An error occured. Please try again.</p> : null}
          </form>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowError({ message }: { message: string }) {
  return <p className="text-red-500 text-sm" aria-live="polite">{message}</p>;
}
