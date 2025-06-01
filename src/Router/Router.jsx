import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../Pages/Root/Root";
import Home from "../Pages/HomePage/Home/Home";
import Contact from "../Pages/ContactPage/Contact";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/contact",
            element:<Contact></Contact>
        },
    ]
  },
 
]);

export default Router;