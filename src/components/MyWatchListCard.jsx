import React from 'react';
import { Link } from 'react-router-dom';

const MyWatchListCard = (prop = {}) => {
    const { item } = prop || {};

    return (
        <div className="md:grid grid-cols-12 gap-4">
            <div className="col-span-2">
                <img
                    src={item?.thumbnailURL}
                    alt={item?.gameTitle}
                    className="rounded-xl" />
            </div>

            <div className="col-span-10 md:flex items-center gap-5">
                <div className="pb-2">
                    <h2 className="card-title">{item?.gameTitle}</h2>
                    <p className="">{item?.reviewDescription}</p>
                </div>
                <div className="card-actions justify-center md:justify-end">
                    <Link to={`/home`} className="btn bg-green-600 text-white">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default MyWatchListCard;