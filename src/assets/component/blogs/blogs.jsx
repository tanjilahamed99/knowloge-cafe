import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/blog";

import PropTypes from 'prop-types';

const Blogs = ({ bookHandler, handleReadingTime }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div className="w-[70%]">
            {
                blogs.map((blog) => <Blog
                    key={blog.id}
                    blog={blog}
                    bookHandler={bookHandler}
                    handleReadingTime={handleReadingTime}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    bookHandler: PropTypes.func,
    handleReadingTime:PropTypes.func
}


export default Blogs;