import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import ProductFilter from "../Page/ProductFilter/ProductFilter";
import CardDetails from "../Page/CardDetails/CardDetails";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import CheckoutPage from "../Page/CheckoutPage/CheckoutPage";
import Profile from "../Components/Dashboard/Profile";
import Dashboard from "../Layout/Dashboard";
import OrderDetails from "../Page/Dashboard/OrderDetails";
import Wishlists from "../Components/Dashboard/Wishlists";

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
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'Checkout',
        element: <CheckoutPage></CheckoutPage>
      },
      {
        path: '*',
        element: <h1>404 | Page Not Found</h1>
      }

    ]
  },
  {
    path: 'auth',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/auth',
        element: <Profile></Profile>
      },
      {
        path: '/auth/orderDetails',
        element: <OrderDetails></OrderDetails>
      },
      {
        path: 'wishlists',
        element: <Wishlists></Wishlists>
      },
      {
        path: '*',
        element: <h1>404 | Page Not Found</h1>
      }

    ]
  }
]);