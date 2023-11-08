import Link from "next/link";
export async function generateMetadata({ params, searchParams }) {
  let post = await fetchPosts(params.id);
  return {
    title: `${post.title} - Info about post`,
    description: post.body,
  };
}
async function fetchPosts(id) {
  let results = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  let jsonedData = await results.json();
  return jsonedData;
}
const Post = async ({ params }) => {
  let postInfo = await fetchPosts(params.id);
  return (
    <>
      <Link className="text-neutral-50 underline m-10" href={`/`}>
        Back
      </Link>
      <div className="flex items-center justify-around ml-5 w-1/2.5 my-2 w-3/ ">
        <div className="overflow-auto border-2 p-3 rounded-lg mx-6 bg-blue-300">
          <h3 className="text-red-500">{postInfo.title}</h3>
          <h4 className="text-slate-900">{postInfo.body}</h4>
        </div>
      </div>
    </>
  );
};

export default Post;
