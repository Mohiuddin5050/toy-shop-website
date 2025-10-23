import { createBrowserRouter } from "react-router";

import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import HomeLayout from "../Layouts/HomeLayout";
import ToyDetails from "../pages/ToyDetails";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,

            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register/>,
            },
            {
                path: '/toy/:toyId',
                element: <ToyDetails />
            },
        ]
    },


])





export default router;