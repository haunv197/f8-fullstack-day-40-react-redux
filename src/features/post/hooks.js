import { useSelector } from "react-redux";
function usePosts() {
  const data = useSelector((state) => state.post.items);
  return data;
}

export { usePosts };
