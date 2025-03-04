import { Link, useLoaderData } from "react-router-dom";

const AllReviews = () => {
    const data = useLoaderData();
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
                                </div>
                            </div>
                        </div>)
                }
            </div>

        </section>
    );
};

export default AllReviews;