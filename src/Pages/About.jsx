import React from 'react';
import MenuItem from '../components/MenuItem';
import MoreAbout from '../components/PagesComponent/AboutPage/MoreAbout';
import Recommended from '../components/PagesComponent/AboutPage/Recommended';
import Legal from '../components/PagesComponent/AboutPage/Legal';
import Subscribe from '../components/PagesComponent/AboutPage/Subscribe';

const About = () => {
    return (
        <div>
            <MenuItem/>
            <MoreAbout/>
            <Recommended/>
            <Legal/>
            <Subscribe/>
        </div>
    );
};

export default About;