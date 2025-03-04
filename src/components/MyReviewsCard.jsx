import { Link } from "react-router-dom";

const MyReviewsCard = (prop = {}) => {
    const { review } = prop || {}
    return (
        <div className="md:grid grid-cols-12 gap-4">
            <div className="col-span-2">
                <img
                    src={review?.thumbnailURL}
                    alt={review?.gameTitle}
                    className="rounded-xl"/>
            </div>

            <div className="col-span-10 md:flex items-center">
                <div className="pb-2">
                    <h2 className="card-title">{review?.gameTitle}</h2>
                    <p className="">{review?.reviewDescription}</p>
                </div>
                <div className="card-actions justify-center md:justify-end">
                    <button className="btn bg-green-600 text-white">Update</button>
                    <button className="btn bg-red-600 text-white">Delete</button>
                </div>
            </div>
        </div>

    );
};

export default MyReviewsCard;
