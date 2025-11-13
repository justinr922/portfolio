import { Link } from "react-router-dom";
import { CONFIG } from "../config";
import { Card } from "../components/Card";
import { Tag } from "../components/Tag";
import { SectionTitle } from "../components/SectionTitle";

/**
 * Projects page - portfolio of completed and in-progress projects
 * Displays project cards with descriptions, technologies, and links
 */
export function Projects() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <section className="py-16 sm:py-24">
        <SectionTitle
          kicker="Selected Work"
          title="Projects"
          right={<Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Start a project →</Link>}
        />
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {CONFIG.projects.map((p) => (
            <Card key={p.title}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="font-semibold text-lg text-gray-900">{p.title}</div>
                    {p.inProgress && (
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-700 font-medium">In Progress</span>
                    )}
                  </div>
                  {p.time && (
                    <div className="text-xs text-gray-500 mt-1">{p.time}</div>
                  )}
                  <p className="mt-2 text-sm text-gray-600">{p.blurb}</p>
                </div>
                {!p.inProgress && (
                  <div className="text-right shrink-0">
                    <a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href={p.url} target="_blank" rel="noreferrer">Live</a>
                    {!p.hideRepo && (
                      <div className="text-xs text-gray-500 mt-2">
                        <a className="hover:text-gray-900 transition-colors" href={`https://github.com/${p.repo}`} target="_blank" rel="noreferrer">Repo</a>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (<Tag key={t}>{t}</Tag>))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

