import { useFetch } from "./useFetch";

export const ComponenteQualsiasi = () => {
  const [data, error, reload] = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    { method: "POST", data: {} }
  );

  return (
    <div>
      <button onClick={reload}>Aggiorna</button>
      {data &&
        !error &&
        data.map((post) => {
          return (
            <div>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })}
    </div>
  );
};
