import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';


const Home = () => {
    return (
        <div>
            <Hero>
                <Banner title="Luxurious rooms" subTitle="Deluxe rooms starting at $299">
                    <Link to="/rooms/" className="btn-primary">our rooms</Link>
                </Banner>

            </Hero>
            <Services/>
            <FeaturedRooms/>
        </div>
    );
}

export default Home;