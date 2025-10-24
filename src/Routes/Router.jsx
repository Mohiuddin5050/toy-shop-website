import { createBrowserRouter } from "react-router";

import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import HomeLayout from "../Layouts/HomeLayout";
import ToyDetails from "../pages/ToyDetails";
import Register from "../pages/Register";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../pages/ErrorPage";
import MyProfile from "../pages/MyProfile";
import MyOrders from "../pages/MyOrders";
import ForgetPassword from "../pages/ForgetPassword";

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
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path: 'toy/:toyId',
                element: (
                    <PrivetRoute>
                        <ToyDetails />
                    </PrivetRoute>
                )
            },
            {
                path: 'my-profile',
                element: (
                    <PrivetRoute>
                        <MyProfile />
                    </PrivetRoute>
                )
            },
            {
                path: 'my-orders',
                element: (
                    <PrivetRoute>
                        <MyOrders />
                    </PrivetRoute>
                )
            },
            {
                path: 'forget-password',
                element: <ForgetPassword/>
            },

        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    },
])





export default router;