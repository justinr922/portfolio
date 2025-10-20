import { useEffect, useState } from "react";

/**
 * Custom hook to fetch recent GitHub commits
 * Fetches repositories for a user, then fetches recent commits from each repo
 *
 * @param {string} username - GitHub username
 * @param {number} maxItems - Maximum number of commits to return (default: 8)
 * @returns {Object} Object with items (commits), loading state, and error
 */
export const useGitHubActivity = (username, maxItems = 8) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) {
      setLoading(false);
      return;
    }

    let isMounted = true;

    async function run() {
      try {
        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`
        );

        if (!reposRes.ok) throw new Error(`GitHub API responded ${reposRes.status}`);
        const repos = await reposRes.json();

        if (!isMounted) return;

        const allCommits = [];
        for (const repo of repos) {
          if (!isMounted) return;
          if (allCommits.length >= maxItems) break;

          try {
            const commitsRes = await fetch(
              `https://api.github.com/repos/${repo.full_name}/commits?per_page=5`
            );

            if (!isMounted) return;

            if (commitsRes.ok) {
              const commits = await commitsRes.json();

              if (!isMounted) return;

              for (const commit of commits) {
                if (allCommits.length >= maxItems) break;

                allCommits.push({
                  repo: repo.full_name,
                  sha: commit.sha,
                  message: commit.commit?.message || "No message",
                  date: commit.commit?.author?.date,
                  url: commit.html_url,
                });
              }
            }
          } catch (err) {
            // Silently ignore individual repo errors
          }
        }

        if (isMounted) {
          setItems(allCommits.slice(0, maxItems));
          setError(null);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || String(err));
          setLoading(false);
        }
      }
    }

    run();

    return () => {
      isMounted = false;
    };
  }, [username, maxItems]);

  return { items, loading, error };
};

