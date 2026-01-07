import { useEffect, useState } from "react";
import { getPosts } from "./services";
import { usePosts } from "@/features/post/hooks";
import { useDispatch } from "react-redux";
import { actions } from "@/features/post";
function useFetchPosts() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const data = usePosts();

  useEffect(() => {
    (async () => {
      try {
        const response = await getPosts();
        dispatch(actions.setItems(response));
      } catch (error) {
        console.error("Error - getPosts", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [dispatch]);

  return { isLoading, data };
}

export { useFetchPosts };
