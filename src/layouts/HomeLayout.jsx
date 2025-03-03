import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import HighestRated from "../components/HighestRated";
import OurService from "../components/OurService";

const HomeLayout = () => {
    return (
        <section>
            <Hero></Hero>
            <HighestRated></HighestRated>
            <OurService></OurService>
            <ContactUs></ContactUs>
        </section>
    );
};

export default HomeLayout;