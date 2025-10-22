import { createBrowserRouter } from "react-router";
import HomeLayout from "../assets/Layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout/>
    }
])





export default router;