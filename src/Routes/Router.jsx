import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Homepage from "../Pages/Homepage";
import ShowAllPlants from "../Pages/ShowAllPlants";
import Login from "../Pages/Login";
import Register from "../Pages/SignUp";
import AuthLayout from "../Layouts/AuthLayout";
import Profile from "../Pages/Profile";
import PlantDetailsPage from "../Pages/PlantDetailsPage";
import PrivateRoute from "../Provider/PrivateRoute";
import PasswordReset from "../Pages/PasswordReset";
import NotFound from "../Components/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <Homepage></Homepage>,
            },
            {
                path: "/plants",
                element: <ShowAllPlants></ShowAllPlants>,
            },
            {
                path: "/profile",
                element: <Profile></Profile>,
            },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/sign-up",
                element: <Register></Register>,
            },
            {
                path: "/auth/reset-password",
                element: <PasswordReset></PasswordReset>,
            },
        ]
    },
    {
        path: "/plant-details/:plantId", 
        element: <PrivateRoute>
            <PlantDetailsPage></PlantDetailsPage>
        </PrivateRoute>,
    },
    {
        path: "/*",
        element: <NotFound></NotFound>,
    },
])

export default router;