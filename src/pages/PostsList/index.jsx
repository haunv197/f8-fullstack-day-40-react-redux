import { useFetchPosts } from "@/services/post";

export default function PostList() {
  const { isLoading, data } = useFetchPosts();
  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {isLoading
          ? "Loading ..."
          : data?.map((post) => (
              <li key={post.id}>
                {post.id}. {post.title}
              </li>
            ))}
      </ul>
    </div>
  );
}
