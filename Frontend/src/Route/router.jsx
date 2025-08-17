import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import ProductDeails from "../Page/ProductDetails/ProductDeails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/detail/:id',
        element: <ProductDeails></ProductDeails>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      }
    ]
  },
]);