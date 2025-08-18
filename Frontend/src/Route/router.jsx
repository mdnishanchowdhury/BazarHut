import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import ProductFilter from "../Page/ProductFilter/ProductFilter";
import CardDetails from "../Page/CardDetails/CardDetails";

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
        element: <CardDetails></CardDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: 'productFilter',
        element: <ProductFilter></ProductFilter>
      },
    ]
  },
]);