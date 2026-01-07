import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actions, useProducts } from "@/features/product";
import { getProducts } from "./services";

export function useFetchProducts() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const data = useProducts();

  useEffect(() => {
    (async () => {
      const response = await getProducts();
      dispatch(actions.setItems(response.data.items));
      setIsLoading(false);
    })();
  }, [dispatch]);

  return { isLoading, data };
}
