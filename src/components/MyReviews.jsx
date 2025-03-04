import { useLoaderData } from "react-router-dom";
import MyReviewsCard from "./MyReviewsCard";

const MyReviews = () => {
    const review = useLoaderData();
    const myReview = review.filter(item => item.email === "user@gmail.com")
    return (
        <section className="w-11/12 mx-auto py-5">
            <div className="space-y-3">
                {
                    myReview.map(item => <MyReviewsCard key={item._id} review={item}></MyReviewsCard>)
                }
            </div>
        </section>
    );
};

export default MyReviews;