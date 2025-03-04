import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../layouts/Root";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import HomeLayout from "../layouts/HomeLayout";
import GameDetails from "../components/GameDetails";
import Auth from "../layouts/Auth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: "Page Not Found 404!",
        children: [
            {
                path: "",
                element: <Navigate to={'/home'}></Navigate>
            },
            {
                path: "/home",
                element: <HomeLayout></HomeLayout>
            },
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
                path: "popularGames/:id",
                element: <GameDetails></GameDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/popularGames/${params.id}`)
            },
            {
                path: "auth",
                element: <Auth></Auth>,
                children: [
                    {
                        path: "sign-in",
                        element: <SignIn></SignIn>
                    },
                    {
                        path: "sign-up",
                        element: <SignUp></SignUp>
                    }
                ]
            }

        ]
    },
])

export default router;