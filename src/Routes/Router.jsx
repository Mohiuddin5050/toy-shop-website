import { createBrowserRouter } from "react-router";

import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout/>,
        children:[
            {
                index: true,
                element:<HomePage/>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>,
    },
])





export default router;