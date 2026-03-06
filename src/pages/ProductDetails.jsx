import { products } from "../data/data";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();
  console.log(productId);
  const product = products.find((product) => product.id == productId);

  return (
    <div>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <div>
            <img
              src={product.img}
              alt={product.name}
              style={{ width: "300px" }}
            />
            <div>
              <p>{product.price}$</p>
            </div>
          </div>
        </>
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
}

export default ProductDetails;
