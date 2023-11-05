import React from 'react';
import MenuItem from '../components/MenuItem';
import BlogHeader from '../components/PagesComponent/BlogPage/BlogHeader';
import BlogDetails from '../components/PagesComponent/BlogPage/BlogDetails';
import BlogReview from '../components/PagesComponent/BlogPage/BlogReview';
import BlogAuthor from '../components/PagesComponent/BlogPage/BlogAuthor';
const Blog = () => {
    return (
        <div>
            <MenuItem/>
            <BlogHeader/>
            <BlogDetails/>
            <BlogReview/>
            <BlogAuthor/>
        </div>
    );
};

export default Blog;