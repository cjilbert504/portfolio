import React from 'react';
import ContentSegment from '../ContentSegment';

const Home = () => {
    return (
        <ContentSegment>
            <h1 style={{ textAlign: "center" }}>About Me</h1>
            <p style={{ textAlign: "center" }}>{aboutBodyText}</p>
        </ContentSegment> 
    )
};

export default Home;

const aboutBodyText = "Web Developer. Drummer. Father. Lover of all things Ruby. "