import React from 'react';
import ContentSegment from '../ContentSegment';

const Home = () => {
    return <ContentSegment text={placeholderText} />
};

export default Home;

const placeholderText = "This information that will be here should be general info about myself, where should it come from? Perhaps as local component state, but perhaps from the database?, I am not sure yet!"