import { CONFIG } from "../config";
import { Card } from "../components/Card";
import { SectionTitle } from "../components/SectionTitle";
import { useGitHubActivity } from "../hooks/useGitHubActivity";

/**
 * Activity page - displays recent GitHub commits
 * Shows public activity from the user's repositories
 */
export function Activity() {
  const { items: commits, loading: ghLoading, error: ghError } = useGitHubActivity(
    CONFIG.github.username,
    CONFIG.github.maxItems
  );

  return (
    <main className="max-w-6xl mx-auto px-6">
      <section className="py-16 sm:py-24">
        <SectionTitle kicker="Public ongoing activity" title="Recent Public GitHub commits" />
        <Card className="mt-10">
          {ghLoading && <div className="text-sm text-gray-500">Loading public activity…</div>}
          {ghError && (
            <div className="text-sm text-red-600">Couldn't load GitHub activity ({ghError}).</div>
          )}
          {!ghLoading && !ghError && commits.length === 0 && (
            <div className="text-sm text-gray-500">No recent commit activity found.</div>
          )}
          <ul className="divide-y divide-gray-200">
            {commits.map((c, idx) => (
              <li key={idx} className="py-4 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="text-sm font-medium">
                    <a href={c.url} target="_blank" rel="noreferrer" className="text-gray-900 hover:text-gray-600 transition-colors">
                      {c.message?.slice(0, 120) || c.sha}
                    </a>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{c.repo}</div>
                </div>
                <div className="text-xs text-gray-400 whitespace-nowrap">
                  {new Date(c.date).toLocaleString()}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-xs text-gray-500">
            Shows public PushEvent commits via GitHub API. For private work, ask for a deeper portfolio review.
          </div>
        </Card>
      </section>
    </main>
  );
}

