import { Link } from "react-router-dom";

const HighestRatedCard = (prop = {}) => {
    const { game } = prop || {};
    const { _id, photoUrl, title, activeUsers, madeInCountry, madeInYear } = game;
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src={photoUrl}
                    alt={title}
                    className="w-full md:h-[250px] lg:h-[350px] object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Year of Manufacturing: {madeInYear}</p>
                <p>Active USer: {activeUsers}</p>
                <p>Made In: {madeInCountry}</p>
                <div className="card-actions justify-end">
                    <Link to={`/popularGames/${_id}`} className="btn btn-primary">
                        Explore Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HighestRatedCard;