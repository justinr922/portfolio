// ======= Configuration =======
export const CONFIG = {
  name: "Justin Ryan",
  role: "Analytics & Web Development Consultant",
  tagline: "I help teams reduce overhead and eliminate redundant work.",
  location: "NYC & Remote",
  email: "jcryansolutions@gmail.com",
  github: {
    username: "justinr922", 
    maxItems: 8,
  },
  socials: [
    { label: "GitHub", href: "https://github.com/justinr922" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/justinr922" },
    { label: "Email", href: "mailto:jcryansolutions@gmail.com" },
  ],
  projects: [
    {
      title: "Strava Activity Analytics",
      blurb:
        "React + Node app for visualizing pace, HR, elevation, and other metrics.",
      tags: ["React", "Node", "Tailwind", "Strava API"],
      url: "https://strava-dashboard-v1.onrender.com/",
      repo: "justinr922/strava-dashboard",
      inProgress: false,
      hideRepo: false,
    },
    {
      title: "Power BI Service Manager (Concept)",
      blurb:
        "Web tool for consultants/ISVs to manage tenants, workspaces, semantic models, and reports.",
      tags: ["Power BI", "Azure AD", "REST APIs", "SaaS"],
      url: "null",
      repo: "null",
      inProgress: true,
      hideRepo: true,
    },
    {
      title: "CMS Analytics (In Partnership with FSI and Consertus)",
      blurb:
        "Improve your ROI with data-backed insights, benchmark assets, and monitor team performance.",
      tags: ["Facilities Management", "Business Intelligence", "Power BI"],
      url: "https://www.fsiservices.com/cms-analytics",
      repo: "null",
      inProgress: false,
      hideRepo: true,
    },
    {
      title: "Etch a Sketch",
      blurb:
        "An old learning project to learn the basics of DOM interaction and Github Pages",
      tags: ["Web Dev", "DOM Manipulation", "Javascript", "Learning"],
      url: "https://justinr922.github.io/etch-a-sketch/",
      repo: "https://github.com/justinr922/etch-a-sketch",
      inProgress: false,
      hideRepo: false,
    },
    {
      title: "Intelligent Cashflow Forecasting",
      blurb:
        "A custom project for a client to forecast capital project cashflow based on historical data and machine learning.",
      tags: ["Python", "Primavera Unifier", "Machine Learning", "Data Engineering"],
      url: null,
      repo: null,
      inProgress: false,
      hideRepo: true,
    },
    {
      title: "Smartsheet Reporting Integrations",
      blurb:
        "A custom project for a client integrate smartsheet data into their reporting portfolio",
      tags: ["Integrations", "SSRS", "Data Engineering"],
      url: null,
      repo: null,
      inProgress: false,
      hideRepo: true,
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

