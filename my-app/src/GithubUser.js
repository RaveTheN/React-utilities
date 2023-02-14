import { useGithubUser } from "./useGithubUser";

export function Githubuser({ username }) {
  const { data, loading, error, onFetchUser } = useGithubUser(username);

  function handleGetUserData() {
    onFetchUser(username);
  }
  return (
    <div>
      <button onClick={handleGetUserData}>Load user data</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}

/*setLoading(true)
    setError(null)
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {

        if (response.status !== 200) {
            setError(newError("User not found"))
        }
        return response.json();
      })
      .then((json) => {
        console.log(json);

        setLoading(false);
        setData(json);
      })

      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      }) */
