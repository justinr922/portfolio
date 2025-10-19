import React, { useEffect, useMemo, useState } from "react";

// ======= Quick Start =======
// 1) Replace the CONFIG values below
// 2) Deploy as a static site (Vite/React) or drop into a Next.js page
// 3) On Render, create a Static Site from your GitHub repo and set the build cmd
//    e.g. "npm ci && npm run build" and publish dir "dist" (for Vite)

const CONFIG = {
  name: "Justin Ryan",
  role: "Analytics & Web Development",
  tagline: "I help teams reduce overhead and eliminate redundant work",
  location: "NYC & Remote",
  email: "hello@example.com",
  github: {
    username: "your-github-username", // <- change me
    maxItems: 8,
  },
  socials: [
    { label: "GitHub", href: "https://github.com/your-github-username" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
    { label: "Email", href: "mailto:hello@example.com" },
  ],
  projects: [
    {
      title: "Strava Activity Analytics",
      blurb:
        "React + Node app for visualizing pace, HR, elevation; token refresh; Tailwind UI.",
      tags: ["React", "Node", "Tailwind", "Strava API"],
      url: "https://your-strava-app.example.com",
      repo: "your-github-username/strava-analytics",
    },
    {
      title: "Power BI Service Manager (Concept)",
      blurb:
        "Web tool for consultants/ISVs to manage tenants, workspaces, semantic models, and reports.",
      tags: ["Power BI", "Azure AD", "REST APIs", "SaaS"],
      url: "https://pbi-manager.example.com",
      repo: "your-github-username/pbi-manager",
    },
    {
      title: "Starfish AI – Secure Read‑Only SQL Assistant",
      blurb:
        "Transforms natural language to SQL with guardrails; focuses on transparency and safety.",
      tags: ["LLMs", "SQL", "Governance", "Security"],
      url: "https://starfish-ai.example.com",
      repo: "your-github-username/starfish-ai",
    },
  ],
  services: [
    {
      icon: "📊",
      title: "Business Intelligence",
      desc: "Power BI, data modeling, metric design, semantic models, governance.",
    },
    {
      icon: "🧱",
      title: "Data Engineering",
      desc: "ETL/ELT with dbt & Airflow, pipeline cost tuning, warehouse ops.",
    },
    {
      icon: "🕸️",
      title: "Web Development",
      desc: "React/Node apps, Tailwind UIs, API design, authentication flows.",
    },
    {
      icon: "📈",
      title: "Analytics Instrumentation",
      desc: "Google Analytics 4 & Consent Mode, event schemas, dashboards.",
    },
    {
      icon: "🧩",
      title: "Consulting",
      desc: "Fractional product/BI leadership, discovery, roadmaps, RFP support.",
    },
  ],
};

// ======= Helpers =======
const cx = (...classes) => classes.filter(Boolean).join(" ");

function SectionTitle({ kicker, title, right }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        {kicker && (
          <div className="text-sm font-semibold tracking-widest uppercase opacity-70">
            {kicker}
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold mt-1">{title}</h2>
      </div>
      {right}
    </div>
  );
}

function Card({ children, className }) {
  return (
    <div className={cx("rounded-2xl shadow-sm border border-white/10 bg-white/5 p-5", className)}>
      {children}
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5">
      {children}
    </span>
  );
}

// ======= GitHub Activity (client-only) =======
const useGitHubActivity = (username, maxItems = 8) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;
    const controller = new AbortController();

    async function run() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.github.com/users/${username}/events/public`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
        const data = await res.json();
        const pushes = data
          .filter((e) => e.type === "PushEvent")
          .flatMap((e) =>
            e.payload?.commits?.map((c) => ({
              repo: e.repo?.name,
              sha: c.sha,
              message: c.message,
              date: e.created_at,
              url: `https://github.com/${e.repo?.name}/commit/${c.sha}`,
            })) || []
          )
          .slice(0, maxItems);
        setItems(pushes);
      } catch (err) {
        setError(err.message || String(err));
      } finally {
        setLoading(false);
      }
    }
    run();
    return () => controller.abort();
  }, [username, maxItems]);

  return { items, loading, error };
};

// ======= Main App =======
export default function PortfolioApp() {
  const { items: commits, loading: ghLoading, error: ghError } = useGitHubActivity(
    CONFIG.github.username,
    CONFIG.github.maxItems
  );

  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100">
      <header className="max-w-6xl mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <a href="#top" className="font-bold text-lg tracking-wide">
            {CONFIG.name}
          </a>
          <div className="hidden sm:flex gap-6 text-sm opacity-90">
            <a href="#services" className="hover:opacity-100">Services</a>
            <a href="#projects" className="hover:opacity-100">Projects</a>
            <a href="#activity" className="hover:opacity-100">Activity</a>
            <a href="#contact" className="hover:opacity-100">Contact</a>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section id="top" className="py-10 sm:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                {CONFIG.role}
              </h1>
              <p className="mt-4 text-lg opacity-90">{CONFIG.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="px-4 py-2 rounded-2xl bg-white text-slate-900 font-medium shadow">
                  Get in touch
                </a>
                <a
                  href={CONFIG.socials.find((s) => s.label === "GitHub")?.href || "#"}
                  className="px-4 py-2 rounded-2xl border border-white/10 hover:bg-white/5"
                >
                  GitHub
                </a>
              </div>
              <div className="mt-4 text-sm opacity-80">
                Based in {CONFIG.location}. Available for consulting & fractional engagements.
              </div>
            </div>
            <Card className="md:ml-auto">
              <ul className="space-y-3 text-sm">
                <li>
                  <strong>Focus:</strong> Analytics, Web Dev, BI, Data Ops
                </li>
                <li>
                  <strong>Stack:</strong> React, Node.js/Express, Tailwind, dbt, Airflow, Power BI
                </li>
                <li>
                  <strong>What I do:</strong> find repeatable patterns, automate, reduce toil
                </li>
                <li>
                  <strong>Approach:</strong> small proofs → measurable wins → productionization
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-10 sm:py-16">
          <SectionTitle kicker="Services" title="How I can help" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {CONFIG.services.map((s) => (
              <Card key={s.title}>
                <div className="text-2xl">{s.icon}</div>
                <div className="mt-2 font-semibold">{s.title}</div>
                <p className="mt-1 text-sm opacity-90">{s.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-10 sm:py-16">
          <SectionTitle
            kicker="Selected Work"
            title="Projects"
            right={<a href="#contact" className="text-sm underline underline-offset-4">Start a project →</a>}
          />
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {CONFIG.projects.map((p) => (
              <Card key={p.title}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-lg">{p.title}</div>
                    <p className="mt-1 text-sm opacity-90">{p.blurb}</p>
                  </div>
                  <div className="text-right ml-4 shrink-0">
                    <a className="text-sm underline" href={p.url} target="_blank" rel="noreferrer">Live</a>
                    <div className="text-xs opacity-80 mt-1">
                      <a className="underline" href={`https://github.com/${p.repo}`} target="_blank" rel="noreferrer">Repo</a>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (<Tag key={t}>{t}</Tag>))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* GitHub Activity */}
        <section id="activity" className="py-10 sm:py-16">
          <SectionTitle kicker="Signal of ongoing work" title="Recent GitHub commits" />
          <Card className="mt-6">
            {ghLoading && <div className="text-sm opacity-80">Loading public activity…</div>}
            {ghError && (
              <div className="text-sm text-red-300">Couldn't load GitHub activity ({ghError}).</div>
            )}
            {!ghLoading && !ghError && commits.length === 0 && (
              <div className="text-sm opacity-80">No recent commit activity found.</div>
            )}
            <ul className="divide-y divide-white/10">
              {commits.map((c, idx) => (
                <li key={idx} className="py-3 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium">
                      <a href={c.url} target="_blank" rel="noreferrer" className="underline">
                        {c.message?.slice(0, 120) || c.sha}
                      </a>
                    </div>
                    <div className="text-xs opacity-80 mt-1">{c.repo}</div>
                  </div>
                  <div className="text-xs opacity-70 whitespace-nowrap">
                    {new Date(c.date).toLocaleString()}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-3 text-xs opacity-70">
              Shows public PushEvent commits via GitHub API. For private work, ask for a deeper portfolio review.
            </div>
          </Card>
        </section>

        {/* Tech & Approach */}
        <section id="stack" className="py-10 sm:py-16">
          <SectionTitle kicker="Working style" title="Tech & approach" />
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <Card>
              <div className="font-semibold">Typical stack</div>
              <ul className="mt-2 space-y-2 text-sm opacity-90 list-disc list-inside">
                <li>Frontend: React, Vite, Tailwind, D3/Recharts</li>
                <li>Backend: Node.js/Express, REST/GraphQL, Azure AD auth</li>
                <li>Data: Postgres, DuckDB, Snowflake/BigQuery, dbt, Airflow</li>
                <li>BI: Power BI, Semantic Models, governance/lineage</li>
                <li>Infra: Render, Azure, GitHub Actions CI</li>
              </ul>
            </Card>
            <Card>
              <div className="font-semibold">Engagement model</div>
              <ul className="mt-2 space-y-2 text-sm opacity-90 list-disc list-inside">
                <li>Discovery workshop → scope, risks, ROI</li>
                <li>Lean prototype to validate value quickly</li>
                <li>Productionize + docs + observability</li>
                <li>Handoff or ongoing fractional support</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-10 sm:py-16">
          <SectionTitle kicker="Next step" title="Let’s talk" />
          <Card className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-lg font-semibold">Have a challenge in mind?</div>
                <p className="text-sm opacity-90 mt-1">
                  Send a short brief and I’ll reply with next steps. I’m open to fixed‑scope projects
                  and fractional retainers.
                </p>
                <div className="mt-4 text-sm">
                  <div><strong>Email:</strong> <a className="underline" href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a></div>
                  <div className="mt-1"><strong>Location:</strong> {CONFIG.location}</div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  {CONFIG.socials.map((s) => (
                    <a key={s.label} href={s.href} className="underline" target="_blank" rel="noreferrer">{s.label}</a>
                  ))}
                </div>
              </div>
              <div>
                <form
                  method="POST"
                  action="https://formspree.io/f/your-form-id" // Replace or wire up your own endpoint
                  className="space-y-3"
                >
                  <input name="name" placeholder="Your name" className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/10" />
                  <input name="email" type="email" placeholder="Your email" className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/10" />
                  <textarea name="message" placeholder="Tell me about your project…" rows={5} className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/10" />
                  <button className="px-4 py-2 rounded-xl bg-white text-slate-900 font-medium">Send</button>
                </form>
                <div className="text-xs opacity-70 mt-2">
                  By submitting, you agree not to send secrets. For NDAs, request a private intro call.
                </div>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-10 opacity-80 text-sm">
        © {year} {CONFIG.name}. Built with React + Tailwind. Deployed on Render.
      </footer>

      {/* Minimal Tailwind Injection for preview */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
        :root { color-scheme: dark; }
        * { box-sizing: border-box; }
        body { font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, "Noto Sans", sans-serif; }
      `}</style>
    </div>
  );
}
