import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="ui container">
            <div className="ui fixed pointing large menu">
                <Link to="/" className="header item">Collin Jilbert</Link>
                <Link to="/" className="item">Home</Link>
                <Link to="/blogs" className="item">Blog</Link>
                <Link to="/projects" className="item">Projects</Link>
                <Link to="/resumes" className="item">Resume</Link>
                <Link to="/contact" className="item">Contact</Link>
            </div>
        </div>
    );
};

export default Navbar;