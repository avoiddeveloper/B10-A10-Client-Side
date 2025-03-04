import { Link, useLoaderData } from "react-router-dom";

const ReviewDetails = () => {
    const review = useLoaderData();
    return (
        <section className="w-11/12 mx-auto py-5">
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure className="md:w-[700px]">
                    <img
                        src={review?.thumbnailURL}
                        alt={review?.title}
                        className="w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{review?.gameTitle}</h2>
                    <p>{review?.reviewDescription}</p>
                    <p>Reviewer's Name{review?.name}</p>
                    <p>Reviewer's Email{review?.email}</p>
                    <p>Rating: {review?.rating}</p>
                    <p>Game Type: {review?.genres}</p>
                    <div className="card-actions justify-end">
                        <Link to="/reviews" className="btn btn-primary">Back</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewDetails;