import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useGithubUsers } from "./useGithubUsers";

export function GithubUsers() {
  const { users, error, isLoading, onRefresh } = useGithubUsers();

  return (
    <div>
      <button onClick={onRefresh}>Refresh</button>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>An error has occurred</h3>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.login}>
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
      )}

      <Outlet />
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
