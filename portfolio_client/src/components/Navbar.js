import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="ui container">
            <div className="ui fixed pointing large menu">
                <Link to="/" className="header item">Collin Jilbert</Link>
                <Link to="/" className="item">Home</Link>
                <Link to="/blog" className="item">Blog</Link>
                <Link to="/projects" className="item">Projects</Link>
                <Link to="/resume" className="item">Resume</Link>
                <Link to="/contact" className="item">Contact</Link>
                <div className="right menu">
                    <a href="https://github.com/cjilbert504" className="right floated item">
                        <i className="github icon"></i>
                    </a>
                    <a href="https://twitter.com/collin_jilbert" className="right floated item">
                        <i className="twitter icon"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/collin-jilbert/" className="right floated item">
                        <i className="linkedin icon"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;