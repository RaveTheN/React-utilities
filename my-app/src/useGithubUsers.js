//Stay While Rivalidate - it manages data fetching, keeps dat in the cache fresh and deduplication
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUsers() {
  const { data, error } = useSWR(`https://api.github.com/users`, fetcher);

  return {
    users: data,
    error,
    isLoading: !data && !error,
  };
}
