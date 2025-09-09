"use client";

import { XCircle, CheckCircle, LoaderCircle } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import { MessageData, sendMessage } from "@/services/mail-service";
import { services } from "@/lib/data";

const initialData = { name: "", email: "", phone: "", serviceType: "", message: "" }

export default function ContactForm() {
  const [state, submitAction, isPending] = useActionState(sendMessage, {
    data: initialData,
    success: false,
    errors: null,
  });
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (state.errors !== null || state.success === true) {
      setShowFeedback(true);
      const timer = setTimeout(() => {
        setShowFeedback(false);
      }, 2000);
      return () => clearTimeout(timer); // cleanup
    }
  }, [state.errors, state.success]);

  const labelClass = "block text-sm font-medium text-gray-700 mb-2";
  const fieldClass =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors";

  const getFieldError = (field: keyof MessageData) =>
    state.errors?.fieldErrors?.[field] ?? null;

  const generateError = (field: keyof MessageData) => getFieldError(field) ? (
    getFieldError(field)?.map((m) => (
      <ShowError key={m} message={m} />
    ))
  ) : (
    <></>
  )
  return <div className="bg-white p-8 rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">
      Send us a Message
    </h2>
    <form action={submitAction} className="space-y-6">
      <div>
        <label htmlFor="name" className={labelClass}>
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={fieldClass}
          defaultValue={state.data?.name || ""}
          placeholder="John Doe"
        />
        {generateError("name")}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={fieldClass}
          defaultValue={state.data?.email || ""}
          placeholder="john@example.com"
        />
        {generateError("email")}
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className={fieldClass}
          defaultValue={state.data?.phone || ""}
          placeholder="01234567890"
        />
        {generateError("phone")}
      </div>

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
          className={fieldClass}
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

      <div>
        <label htmlFor="message" className={labelClass}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          defaultValue={state.data?.message || ""}
          rows={5}
          className={fieldClass}
          placeholder="Tell us about your project..."
        />
        {generateError("message")}
      </div>

      <button
        type="submit"
        className="w-full flex gap-2 items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-destructive transition-colors"
        disabled={isPending}
      >
        {isPending ? <LoaderCircle className="animate-spin" /> : showFeedback ? (state.errors !== null ? <XCircle className="transistion-all animate-pulse" /> : (state.success === true ? <CheckCircle /> : null)) : null}
        Send Message
      </button>
      {state.errors?.formErrors && state.errors.formErrors.length > 0 ? <p className="text-red-500 text-sm" aria-live="polite">Sorry! An error occured. Please try again.</p> : null}
    </form>
  </div>
}

function ShowError({ message }: { message: string }) {
  return <p className="text-red-500 text-sm" aria-live="polite">{message}</p>;
}
