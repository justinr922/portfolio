import { Link } from "react-router-dom";
import { CONFIG } from "../config";
import { Card } from "../components/Card";
import { SectionTitle } from "../components/SectionTitle";

/**
 * Home page - landing page with hero section, profile image, and tech stack
 * Displays main value proposition and engagement model
 */
export function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <section id="top" className="py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-gray-900">
              {CONFIG.role}
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">{CONFIG.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="px-6 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
                Get in touch
              </Link>
              <a
                href={CONFIG.socials.find((s) => s.label === "GitHub")?.href || "#"}
                className="px-6 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium hover:bg-gray-50 transition-colors"
              >
                GitHub
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              Based in {CONFIG.location}. Available for consulting & fractional engagements.
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {/* Profile Image with Frame */}
            <div className="p-4 rounded-lg border border-gray-200 bg-gray-50 shadow-lg hover:shadow-2xl transition-shadow hover:border-gray-300">
              <div className="rounded-lg overflow-hidden bg-gray-100 aspect-square md:aspect-auto md:h-96">
                <img
                  src="/profile.jpg"
                  alt={CONFIG.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Info Card */}
            <Card>
              <ul className="space-y-4 text-sm text-gray-700">
                <li>
                  <strong className="text-gray-900">Focus:</strong> Analytics, Web Dev, BI, Data Ops
                </li>
                <li>
                  <strong className="text-gray-900">Strengths:</strong> Data Modelling, Integrations, Workflow Improvement
                </li>
                <li>
                  <strong className="text-gray-900">What I do:</strong> find repeatable patterns, automate, reduce toil
                </li>
                <li>
                  <strong className="text-gray-900">Approach:</strong> small proofs → measurable wins → productionization
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech & Approach */}
      <section id="stack" className="py-16 sm:py-24">
        <SectionTitle kicker="Working style" title="Tech & approach" />
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <Card>
            <div className="font-semibold text-gray-900 mb-4">Typical stack</div>
            <ul className="space-y-3 text-sm text-gray-700 list-disc list-inside">
              <li>Frontend: React, D3/Recharts, Tailwind</li>
              <li>Backend: Node.js/Express, django, REST/GraphQL</li>
              <li>Data: Postgres, DuckDB, SQL Server</li>
              <li>Integrations: SSIS, Airflow</li>
              <li>Business Intelligence: Power BI, Excel, Tableau</li>
              <li>Infra: Render, Azure, GitHub Pages, Heroku</li>
            </ul>
          </Card>
          <Card>
            <div className="font-semibold text-gray-900 mb-4">Engagement model</div>
            <ul className="space-y-3 text-sm text-gray-700 list-disc list-inside">
              <li>Discovery workshops → scope, risks, ROI</li>
              <li>Lean prototype to validate value quickly</li>
              <li>Iteration cycles based on stakeholder feedback</li>
              <li>Productionize + docs + observability</li>
              <li>Handoff or ongoing fractional support</li>
            </ul>
          </Card>
        </div>
      </section>
    </main>
  );
}

