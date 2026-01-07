import { useFetchProducts } from "@/services/product";

function Home() {
  const { isLoading, data } = useFetchProducts();

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {isLoading
          ? "Loading"
          : data.map((product) => (
              <li key={product.id}>
                {product.id}. {product.title} - {product.price}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default Home;
