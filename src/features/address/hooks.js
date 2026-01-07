import { useSelector } from "react-redux";

export function useProvinces() {
  const data = useSelector((state) => state.address.provinces);

  return data;
}
