import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './containers/Home';
import Contact from './containers/Contact';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" exact component={Contact} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;