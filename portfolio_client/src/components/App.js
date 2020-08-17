import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './presentationComponents/Navbar';
import Home from './containers/Home';
import Contact from './containers/Contact';
import BlogListContainer from './containers/BlogListContainer';
import pic from './collin.jpeg';
import BlogsNew from './containers/BlogsNew';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Navbar />
                    <img alt="profile" src={pic} className="ui circular image" style={{ width: "150px", height: "150px", marginTop: "-40px", marginLeft: "12px"}} />
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/blogs" exact component={BlogListContainer} />
                    <Route path="/blogs-new" exact component={BlogsNew}  />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;