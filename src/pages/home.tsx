import React from 'react';
import Countdown from "../widgets/countdown/Countdown";
import TourList from '../widgets/tourList/TourList';

const Home = () => {
    return (
        <div className="container">
            <Countdown />
            <br/>
            <TourList/>
        </div>
    );
};

export default Home;

