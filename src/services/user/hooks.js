import { useUsers } from "@/features/user/hooks";
import { useEffect, useState } from "react";
import { getUsers } from "./services";
import { useDispatch } from "react-redux";
import { actions } from "@/features/user";

function useFetchUsers() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const data = useUsers();

  useEffect(() => {
    (async () => {
      try {
        const response = await getUsers();
        dispatch(actions.setItems(response));
      } catch (error) {
        console.error("Error - getUsers", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [dispatch]);
  return { isLoading, data };
}

export { useFetchUsers };
