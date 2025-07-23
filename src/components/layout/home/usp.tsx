import { CheckCircle2, CircleDollarSign, Clock } from "lucide-react";
import { ReactNode } from "react";

export default function USP() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Prism Partners?
          </h2>
          <p className="text-xl text-gray-600">
            We deliver excellence in every project
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <USPCard>
            <USPIcon>
              <CheckCircle2 className="w-8 h-8 text-white" />
            </USPIcon>
            <USPTitle>End-to-End Service</USPTitle>
            <USPDesc>
              Complete project management from initial design to final handover
            </USPDesc>
          </USPCard>

          <USPCard>
            <USPIcon>
              <Clock className="w-8 h-8 text-white" />
            </USPIcon>
            <USPTitle>On-Time Delivery</USPTitle>
            <USPDesc>
              We respect your timeline and deliver projects as promised
            </USPDesc>
          </USPCard>

          <USPCard>
            <USPIcon>
              <CircleDollarSign className="w-8 h-8 text-white" />
            </USPIcon>
            <USPTitle>Transparent Pricing</USPTitle>
            <USPDesc>
              No hidden costs, clear estimates, and honest communication
            </USPDesc>
          </USPCard>
        </div>
      </div>
    </section>
  );
}

function USPCard({ children }: { children: ReactNode }) {
  return (
    <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      {children}
    </div>
  );
}

function USPIcon({ children }: { children: ReactNode }) {
  return (
    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
      {children}
    </div>
  );
}

function USPTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{children}</h3>
  );
}

function USPDesc({ children }: { children: ReactNode }) {
  return <p className="text-gray-600">{children}</p>;
}
