import { useSelector } from "react-redux";

export function useProducts() {
  const data = useSelector((state) => state.product.items);

  return data;
}
