import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const GameDetails = () => {
    const game = useLoaderData();
    const { photoUrl, title, description, activeUsers, madeInCountry, madeInYear, rating } = game;
    return (
        <section className='w-11/12 mx-auto py-5'>
            <div className="card card-side bg-base-100">
                <figure>
                    <img
                        src={photoUrl}
                        alt={title}
                        className='rounded-r-2xl' />
                </figure>
                <div className="flex flex-col justify-center px-5 space-y-3">
                    <div className='flex items-center justify-between'>
                        <h2 className="font-bold text-3xl">{title}</h2>
                        <h3 className="font-bold text-3xl">{rating}</h3>
                    </div>
                    <p className='font-light text-base'>{description}</p>
                    <div className='*:font-semibold'>
                        <p>Active User: {activeUsers}</p>
                        <p>Made In: {madeInCountry}</p>
                        <p>Year of Manufacturing: {madeInYear}</p>
                    </div>
                    <div>
                        <Link to="home" className="btn">Back To Home</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameDetails;