import { categories } from "../data/data";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/category/Electronics" state={{ maxPrice: 500 }}>
        Cheapest tech (under 500)!
      </Link>
      <h1>Categories</h1>
      <ul style={{ display: "flex" }}>
        {categories.map((category) => (
          <li key={category.id} style={{ margin: "15px" }}>
            <Link to={`/category/${category.name}`}>
              <p>{category.name} </p>
              <img
                src={category.img}
                alt={category.name}
                style={{ width: "150px" }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
