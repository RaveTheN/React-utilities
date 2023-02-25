import { useGithubUsers } from "./useGithubUsers";

export function GithubUsers() {
  const { users, error, isLoading } = useGithubUsers();

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>An error has occurred</h3>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.login}>{user.login}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

//without external custom hook
// import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((response) => response.json());

// export function GithubUsers() {

//   return (
//     <div>
//       {!data && !error && <h3>Loading...</h3>}
//       {error && <h3>An error has occurred</h3>}
//       {data && !error && (
//         <ul>
//           {data.map((user) => (
//             <li key={user.login}>{user.login}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
