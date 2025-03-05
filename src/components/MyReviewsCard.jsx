import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviewsCard = (prop = {}) => {
    const { review } = prop || {}

    const handleDelete = (id) => {
        // console.log(id)
        fetch(`http://localhost:5000/deleteReview/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Review Deleted",
                        text: "Please Refresh The Page ",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div className="md:grid grid-cols-12 gap-4">
            <div className="col-span-2">
                <img
                    src={review?.thumbnailURL}
                    alt={review?.gameTitle}
                    className="rounded-xl" />
            </div>

            <div className="col-span-10 md:flex items-center">
                <div className="pb-2">
                    <h2 className="card-title">{review?.gameTitle}</h2>
                    <p className="">{review?.reviewDescription}</p>
                </div>
                <div className="card-actions justify-center md:justify-end">
                    <Link to={`/updateReview/${review._id}`} className="btn bg-green-600 text-white">Update</Link>
                    <button onClick={() => handleDelete(review._id)} className="btn bg-red-600 text-white">Delete</button>
                </div>
            </div>
        </div>

    );
};

export default MyReviewsCard;
