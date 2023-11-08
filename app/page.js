import Link from "next/link";

async function fetchPosts() {
  let results = await fetch(
    "https://jsonplaceholder.typicode.com/posts?limit=20"
  );
  let jsonedData = await results.json();
  return jsonedData;
}
export default async function Home() {
  let postsData = await fetchPosts();
  return (
    <div>
      <h1 className="m-4">Main page</h1>
      <div className="flex flex-row flex-wrap">
        {postsData.map((post) => (
          <div className="flex items-center justify-around ml-5 w-1/2.5 my-2 w-3/ ">
            <h1>{post.id}</h1>
            <div className="overflow-auto border-2 p-3 rounded-lg mx-6 bg-blue-300">
              <h3 className="text-red-500">{post.title}</h3>
              <h4 className="text-slate-900">{post.body}</h4>
              <Link
                className="text-slate-900 underline"
                href={`/post/${post.id}`}
              >
                More...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
