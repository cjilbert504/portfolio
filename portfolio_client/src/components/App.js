import React from 'react';
import Navbar from './Navbar';
import ContentSegment from './ContentSegment';

const App = () => {
    return (
        <div>
            <Navbar />
            <ContentSegment />
            <ContentSegment />
        </div>
    );
};

export default App;