import { createBrowserRouter } from "react-router";
import HomeLayout from "../assets/Layouts/HomeLayout";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout/>,
    },
    
])





export default router;