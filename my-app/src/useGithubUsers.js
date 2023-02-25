//Stay While Rivalidate - it manages data fetching, keeps dat in the cache fresh and deduplication
import useSWR from "swr";

export function useGithubUsers() {
  const { data, error, mutate } = useSWR(`https://api.github.com/users`);

  const handleRefreshUsers = () => {
    mutate();
  };

  return {
    users: data,
    error,
    isLoading: !data && !error,
    onRefresh: handleRefreshUsers,
  };
}
