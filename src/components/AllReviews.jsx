import { useContext } from "react";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AllReviews = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext)
    const navigate = useNavigate(); // useNavigate hook


    const handleWatch = (id) => {
        const userName = user.displayName;
        const wlItem = { id, userName }
        if (user) {
            fetch('https://chill-gamer-server-side-nine.vercel.app/watchList', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(wlItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: "Good job!",
                            text: "Added to Watch List",
                            icon: "success"
                        });
                    }
                })
        } else {
            navigate("/auth/sign-in"); // Correct way to navigate
        }
    };

    return (
        <section className="w-11/12 mx-auto py-5">
            <div className="space-y-3">
                {
                    data.map(i =>
                        <div key={i._id} className="card flex-col md:flex-row mx-auto card-side bg-base-100 shadow-sm">
                            <figure>
                                <img
                                    className="w-[400px]  object-cover"
                                    src={i.thumbnailURL}
                                    alt={i.title} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{i?.gameTitle}</h2>
                                <h2>Reviewer's Name: {i?.name}</h2>
                                <h2 className="">Game Type: {i?.genres}</h2>
                                <h2 className="">Publish Date: {i?.publishDate}</h2>
                                <div className="card-actions justify-end">
                                    <Link to={`/review/${i._id}`} className="btn btn-primary">Review Details</Link>
                                    <button onClick={() => handleWatch(i._id)} className="btn btn-primary">Add To Watch List</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>

        </section>
    );
};

export default AllReviews;