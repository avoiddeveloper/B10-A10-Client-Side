import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: "Page Not Found 404!",
        children: [
            {
                path: "reviews",
                element: "This is All Reviews",
            },
            {
                path: "myReviews",
                element: "This Is My Reviews",
            },
            {
                path: "gameWatchList",
                element: "This is Game WatchList",
            },
            {
                path: "authLayout",
                element: <AuthLayout></AuthLayout>,
                children: [
                    {
                        path: "signIn",
                        element: <SignIn></SignIn>,
                    },
                    {
                        path: "signUp",
                        element: <SignUp></SignUp>,
                    },
                ]
            }
        ]
    },
])

export default router;