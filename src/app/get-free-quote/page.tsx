import GetFreeQuoteForm from "@/components/layout/get-quote-form";
import { USPDesc, USPIcon, USPTitle } from "@/components/layout/home/usp";
import { PageHeader, PageHeaderShortDesc, PageHeaderTitle } from "@/components/layout/page-header";
import { CheckCircle, CircleDollarSign, Clock } from "lucide-react";

export default function Quote() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHeader>
        <PageHeaderTitle>
          Get Your Free Quote
        </PageHeaderTitle>
        <PageHeaderShortDesc>
          Ready to start your construction project? Get a detailed quote tailored to your specific needs and budget.
        </PageHeaderShortDesc>
      </PageHeader>

      {/* Quote Form */}
      <GetFreeQuoteForm />

      {/* Why Choose Us for Your Quote */}
      <section className="py-16 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Get a Quote from Prism Partners?</h2>
            <p className="text-lg text-gray-600">We provide transparent, detailed quotes with no hidden costs</p> </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <USPIcon>
                <CheckCircle className="w-8 h-8 text-white" />
              </USPIcon>
              <USPTitle>Detailed Breakdown</USPTitle>
              <USPDesc>Complete cost breakdown with materials, labor, and timeline estimates</USPDesc>
            </div>

            <div className="text-center p-6">
              <USPIcon>
                <Clock className="w-8 h-8 text-white" />
              </USPIcon>
              <USPTitle>Quick Response</USPTitle>
              <USPDesc>
                Receive your detailed quote within 24 hours of submission
              </USPDesc>
            </div>

            <div className="text-center p-6">
              <USPIcon>
                <CircleDollarSign className="w-8 h-8 text-white" />
              </USPIcon>
              <USPTitle>No Hidden Costs</USPTitle>
              <USPDesc>
                Transparent pricing with all costs clearly outlined upfront
              </USPDesc>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}
