import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Admin from "../pages/Admin/Admin";
import Allproduct from "../pages/allProduct/Allproduct";
// import Category from "../pages/allProduct/Allproduct";
import CheckOut from "../pages/CheckOut/CheckOut";
import Error from "../pages/error/Error";
import Home from "../pages/Home/Home";
// import BannerData from "../pages/Home/BannerData";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Productdetails from "../ProductsDetails/Productdetails";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";



const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/admin',
                element: <Admin></Admin>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout',
                element: <ProtectedRoute><CheckOut></CheckOut></ProtectedRoute>
            },
            {
                path: '/allproduct/:id',
                element: <Allproduct></Allproduct>
            },
            {
                path: '/productdetails/:id',
                element: <Productdetails></Productdetails>
                // loader: ({params}) => fetch(`https://resale-backend.vercel.app/products/${params._id}`)
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])

export default router;