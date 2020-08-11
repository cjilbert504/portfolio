import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './presentationComponents/Navbar';
import Home from './containers/Home';
import Contact from './containers/Contact';
import BlogListContainer from './containers/BlogListContainer';
import pic from './collin.jpeg';


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Navbar />
                    <img alt="profile" src={pic} className="ui circular image" style={{ width: "200px", height: "200px", marginTop: "-40px", marginLeft: "12px"}} />
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/blog" exact component={BlogListContainer} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;