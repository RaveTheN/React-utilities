import useSWR from "swr";

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`
  );

  const fetchGithubuser = () => {
    mutate();
  };

  return {
    data,
    error,
    loading: !data && !error,
    onFetchUser: fetchGithubuser,
  };
}

// import { useEffect, useState } from "react";

// export function useGithubUser(username) {
//   const [data, setData] = useState();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   async function fetchGithubuser(username) {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(`https://api.github.com/users/${username}`);
//       const json = await response.json();

//       if (response.status !== 200) {
//         setError(new Error());
//       }

//       setData(json);
//     } catch (error) {
//       setError(error);
//       setData(null);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return { data, error, loading, onFetchUser: fetchGithubuser };
// }
