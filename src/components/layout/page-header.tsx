import { ReactNode } from "react";

function PageHeader({ children }: { children: ReactNode }) {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {children}
      </div>
    </section>
  );
}

function PageHeaderTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
      {children}
    </h1>
  );
}

function PageHeaderShortDesc({ children }: { children: ReactNode }) {
  return (
    <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
      {children}
    </p>
  );
}

export { PageHeader, PageHeaderTitle, PageHeaderShortDesc };
