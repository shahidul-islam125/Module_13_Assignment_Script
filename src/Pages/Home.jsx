import React from 'react';
import MenuItem from '../components/MenuItem';
import Header from '../components/PagesComponent/HomePage/Header';
import Feature from '../components/PagesComponent/HomePage/Feature';
import Testimonial from '../components/PagesComponent/HomePage/testimonial';
import AboutUs from '../components/PagesComponent/HomePage/AboutUs';

const Home = () => {
    return (
        <div>
            <MenuItem/>
            <Header/>
            <Feature/>
            <Testimonial/>
            <AboutUs/>
        </div>
    );
};

export default Home;