import React from 'react';

const Navbar = (props) => {
    return (
        <div className="ui container">
            <div className="ui fixed pointing large menu">
                <a href="#" className="header item">Collin Jilbert</a>
                <a href="#" className="item">Home</a>
                <a href="#" className="item">Blog</a>
                <a href="#" className="item">Projects</a>
                <a href="#" className="item">Resume</a>
                <a href="#" className="item">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;