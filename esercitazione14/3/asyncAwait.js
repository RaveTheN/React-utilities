//https://jsonplaceholder.typicode.com/posts

(async () => {
  const result = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();

  console.log(result);
})();
