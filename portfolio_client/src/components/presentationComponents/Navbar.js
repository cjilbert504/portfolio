import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="ui container" style={{ marginTop: "10px", width: "1000px" }} >
            <div className="ui pointing tiny menu" style={{ borderStyle: "none", boxShadow: "none"}}>
                <Link to="/" className="item"><h4>Home</h4></Link>
                <Link to="/blogs" className="item"><h4>Blog</h4></Link>
                <Link to="/projects" className="item"><h4>Projects</h4></Link>
                <Link to="/resume" className="item"><h4>Resume</h4></Link>
                <Link to="/contact" className="item"><h4>Contact</h4></Link>
                {/* <Link to="/testimonials" className="item"><h4>Testimonials</h4></Link> */}
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