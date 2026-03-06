import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Layout from "./components/Layout";
import Category from "./pages/Category";
import Thanks from "./pages/Thanks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, // path: ""
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "thanks", element: <Thanks /> },
      { path: "category/:categoryId", element: <Category /> },
      { path: "product/:productId", element: <ProductDetails /> },
      // { path: "*", element: <NotFound /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         {" "}
//         <Header />
//         <Home />
//         <Footer />
//       </>
//     ),
//   },
//   { path: "about", element: <About /> },
//   { path: "cart", element: <Cart /> },
//   { path: "categories", element: <Categories /> },
//   { path: "*", element: <NotFound /> },
//   { path: "product", element: <ProductDetails /> },
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
