import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../layouts/Root";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import HomeLayout from "../layouts/HomeLayout";
import GameDetails from "../components/GameDetails";
import Auth from "../layouts/Auth";
import AddReviews from "../components/AddReviews";
import ReviewDetails from "../components/ReviewDetails";
import AllReviews from "../components/AllReviews";
import MyReviews from "../components/MyReviews";
import UpdateReview from "../components/UpdateReview";
import Error from "../components/Error";
import PrivateRoute from "./PrivateRoute";
import WatchList from "../components/WatchList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
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
                path: "all-reviews",
                element: <AllReviews></AllReviews>,
                loader: () => fetch('https://chill-gamer-server-side-nine.vercel.app/review')
            },
            {
                path: "review/:id",
                element: <ReviewDetails></ReviewDetails>,
                loader: ({ params }) => fetch(`https://chill-gamer-server-side-nine.vercel.app/review/${params.id}`)
            },
            {
                path: "add-reviews",
                element: (
                    <PrivateRoute>
                        <AddReviews></AddReviews>
                    </PrivateRoute>
                ),
            },
            {
                path: "my-reviews",
                element: (
                    <PrivateRoute>
                        <MyReviews></MyReviews>
                    </PrivateRoute>
                ),
                loader: () => fetch('https://chill-gamer-server-side-nine.vercel.app/review')
            },
            {
                path: "/updateReview/:id",
                element: <UpdateReview></UpdateReview>,
            },
            {
                path: "gameWatchList",
                element: (
                    <PrivateRoute>
                        <WatchList></WatchList>
                    </PrivateRoute>
                ),
            },
            {
                path: "popularGames/:id",
                element: <GameDetails></GameDetails>,
                loader: ({ params }) => fetch(`https://chill-gamer-server-side-nine.vercel.app/popularGames/${params.id}`)
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