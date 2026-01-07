import { useSelector } from "react-redux";

function useUsers() {
  const data = useSelector((state) => state.user.items);
  return data;
}

export { useUsers };
