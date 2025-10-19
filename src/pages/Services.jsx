import { CONFIG } from "../config";
import { Card } from "../components/Card";
import { SectionTitle } from "../components/SectionTitle";

export function Services() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <section className="py-16 sm:py-24">
        <SectionTitle kicker="Services" title="How I can help" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {CONFIG.services.map((s) => (
            <Card key={s.title}>
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="font-semibold text-gray-900 mb-2">{s.title}</div>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

