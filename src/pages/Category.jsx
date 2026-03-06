import { products } from "../data/data";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

function Category() {
  const { categoryId } = useParams(); // get link value after ":/"
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  console.log(location);

  // const maxPrice = location.state.maxPrice;
  // const maxPrice = searchParams.get("maxPrice")
  //   ? Number(searchParams.get("maxPrice"))
  //   : Infinity;

  const maxPrice =
    location.state?.maxPrice ??
    (searchParams.get("maxPrice")
      ? Number(searchParams.get("maxPrice"))
      : Infinity);

  const currentCategoryArray = products.filter(
    (product) => product.categoryId === categoryId && product.price <= maxPrice,
  );

  function handleChange(e) {
    const value = e.target.value;
    setSearchParams(value ? { maxPrice: value } : {});
  }

  return (
    <div>
      <h1>Category: {categoryId}</h1>
      {location.state && (
        <h2>Special offer (under {location.state.maxPrice}!)</h2>
      )}
      <div>
        <label htmlFor="" id="maxPrice"></label>
        <input
          type="number"
          value={searchParams.get("maxPrice") || ""}
          id="maxPrice"
          placeholder="Enter max price"
          onChange={handleChange}
        />
      </div>
      <ul style={{ display: "flex" }}>
        {currentCategoryArray.map((product) => (
          <li key={product.id} style={{ margin: "15px" }}>
            <Link to={`/product/${product.id}`}>
              <p>
                {product.name} {product.price}$
              </p>
              <img
                src={product.img}
                alt={product.name}
                style={{ width: "150px" }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
