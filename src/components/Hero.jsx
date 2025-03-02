import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import nfs from '../assets/nfs-most-wanted.jpg'
import valorant from '../assets/valorant.jpg'
import asphalt from '../assets/asphat-8.jpg'


const Hero = () => {
    return (
        <div className="hero w-11/12 mx-auto py-5">
            <Carousel>
                <div>
                    <img src={nfs} alt="Slide 1" />
                    <p className="legend">Need For Speed Most Wanted</p>
                </div>
                <div>
                    <img src={valorant} alt="Slide 2" />
                    <p className="legend">Valorant</p>
                </div>
                <div>
                    <img src={asphalt} alt="Slide 3" />
                    <p className="legend">Asphalt 8</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Hero;
