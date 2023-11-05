import React from 'react';
import MenuItem from '../components/MenuItem';
import ToDo from '../components/PagesComponent/ProjectPage/ToDo';
import Calculator from '../components/PagesComponent/ProjectPage/Calculator';
import QuizeApp from '../components/PagesComponent/ProjectPage/QuizeApp';
import Portfolio from '../components/PagesComponent/ProjectPage/Portfolio';
const Project = () => {
    return (
        <div>
            <MenuItem/>
            <ToDo/>
            <Calculator/>
            <QuizeApp/>
            <Portfolio/>
        </div>
    );
};

export default Project;