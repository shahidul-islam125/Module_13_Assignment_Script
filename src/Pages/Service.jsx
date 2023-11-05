import React from 'react';
import MenuItem from '../components/MenuItem';
import PsdToHtml from '../components/PagesComponent/ServicePage/PsdToHtml';
import FullStack from '../components/PagesComponent/ServicePage/FullStack';
import BugFixing from '../components/PagesComponent/ServicePage/BugFixing';
import Performance from '../components/PagesComponent/ServicePage/Performance';
const Service = () => {
    return (
        <div>
            <MenuItem/>
            <PsdToHtml/>
            <FullStack/>
            <BugFixing/>
            <Performance/>
        </div>
    );
};

export default Service;