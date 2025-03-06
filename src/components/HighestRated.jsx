import { useEffect, useState } from "react";
import HighestRatedCard from "./HighestRatedCard";

const HighestRated = () => {

    const [games, setGames] = useState([])

    useEffect(() => {
        fetch('https://chill-gamer-server-side-nine.vercel.app/popularGames')
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])



    return (
        <section className="w-11/12 mx-auto py-5">

            {/* Header */}
            <div className="md:w-[70%] mx-auto space-y-2 text-center pb-8">
                <h2 className="font-bold uppercase text-3xl">Highest Rated Game</h2>
                <p className="font-light text-base">Discover the highest-rated games loved by players and critics alike. Explore top-tier titles known for exceptional gameplay, stunning visuals, and immersive storytelling.
                    Find the best-reviewed games that set industry standards and deliver unforgettable gaming experiences.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {games.map(game => <HighestRatedCard key={game._id} game={game}></HighestRatedCard>)}
            </div>


        </section>
    );
};

export default HighestRated;