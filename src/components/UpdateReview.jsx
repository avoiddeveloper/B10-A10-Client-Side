import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateReview = () => {
    const { id } = useParams();
    const [review, setReview] = useState([])

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const thumbnailURL = form.get('thumb');
        const gameTitle = form.get('title');
        const reviewDescription = form.get('review_description');
        const publishDate = form.get('publish_date');
        const rating = form.get('rating');
        const genres = form.get('genres');
        const email = form.get('email');
        const name = form.get('name');
        const user = { thumbnailURL, gameTitle, reviewDescription, publishDate, rating, genres, email, name };

        fetch(`http://localhost:5000/updateReview/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // setReview(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Review Updated",
                        icon: "success"
                    });
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Please Update Something",
                    });
                }
            })

    }


    useEffect(() => {
        fetch(`http://localhost:5000/review/${id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <section className="w-11/12 mx-auto flex flex-col justify-center py-5">
            <div className="md:w-[70%] mx-auto bg-purple-200 rounded-xl space-y-5 p-5">
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold "> </h1>
                    <p className="font-light">Update Your Game Review – Keep Your Opinions Fresh!</p>
                </div>

                <div>
                    <div className="card w-full shrink-0 shadow-2xl mx-auto">
                        <div className="card-body text-center">
                            <form onSubmit={handleFormSubmit} className="fieldset">
                                <div className="md:flex justify-between gap-3">
                                    <div className="w-full">
                                        <label className="fieldset-label">Thumbnail URL</label>
                                        <input type="text" name="thumb" className="input w-full" defaultValue={review?.thumbnailURL} placeholder="Thumbnail" required />
                                    </div>
                                    <div className="w-full">
                                        <label className="fieldset-label">Game Title</label>
                                        <input type="text" name="title" className="input w-full" defaultValue={review?.gameTitle} placeholder="Game Title" required />
                                    </div>
                                </div>

                                <div className="md:flex justify-between gap-3">
                                    <div className="w-full">
                                        <label className="fieldset-label">Review Description</label>
                                        <textarea type="text" name="review_description" className="input w-full" defaultValue={review?.reviewDescription} placeholder="Description" required />
                                    </div>
                                    <div className="w-full">
                                        <label className="fieldset-label">Publishing year</label>
                                        <input type="number" name="publish_date" className="input w-full" defaultValue={review.publishDate} placeholder="Publishing year" required />
                                    </div>
                                </div>


                                <div className="md:flex justify-between gap-3">
                                    <div className="w-full">
                                        <label className="fieldset-label">Rating(e.g.,1-10)</label>
                                        <input type="number" name="rating" className="input w-full" defaultValue={review.rating} placeholder="Rate it" required />
                                    </div>
                                    <div className="w-full">
                                        <label className="fieldset-label">Genres</label>
                                        <select defaultValue={review?.genres} className="input w-full" id="genres" name="genres" >
                                            <option>Options</option>
                                            <option value="action">Action</option>
                                            <option value="rpg">RPG</option>
                                            <option value="adventure">Adventure</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="md:flex justify-between gap-3">
                                    <div className="w-full">
                                        <label className="fieldset-label">Email</label>
                                        <input readOnly type="email" name="email" className="input w-full" defaultValue={review?.email} placeholder="Email" />
                                    </div>
                                    <div className="w-full">
                                        <label className="fieldset-label">Name</label>
                                        <input readOnly type="text" name="name" className="input w-full" defaultValue={review?.name} placeholder="Password" />
                                    </div>
                                </div>
                                <input type="submit" value="Add Review" className="btn bg-purple-300 mt-4" />
                            </form>
                            <Link to="/home" className="link">Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateReview;