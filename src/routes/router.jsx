import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import AuthLayouts from "../layouts/AuthLayouts";
import LogIn from "../pages/login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayouts></AuthLayouts>,
    children :[
      {
        path:'/auth/login',
        element : <LogIn></LogIn>
      },
      {
        path : '/auth/register',
        element : <Register></Register>
      }
    ]
  },
  {
    path: "/news/:id",
    element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
    loader: () => fetch("/news.json"),
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
