import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
// import { useLoaderData } from 'react-router-dom';
import MyReviewsCard from './MyReviewsCard';
import MyWatchListCard from './MyWatchListCard';

const WatchList = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);


    useEffect(() => {
        fetch('https://chill-gamer-server-side-nine.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const filterItem = reviews.filter(item => item.id === user._id)

    return (
        <section className="w-11/12 mx-auto py-5">
            <div className="space-y-3">
                {
                    filterItem.map(item => <MyWatchListCard key={item._id} item={item}></MyWatchListCard>)
                }
            </div>
        </section>
    );
};

export default WatchList;
