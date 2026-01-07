import { useFetchProvinces } from "@/services/provinces";

function Provinces() {
  const { isLoading, data: provinces } = useFetchProvinces();
  return (
    <div>
      <h1>Province Page</h1>
      <ul>
        {isLoading
          ? "Loading"
          : provinces?.map((province) => (
              <li key={province.province_id}>
                {province.province_id}. {province.name}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default Provinces;
