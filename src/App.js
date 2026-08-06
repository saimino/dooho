import React, { useEffect } from 'react';
import { HashRouter as Router, Redirect, Route, Switch, BrowserRouter, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cv from './pages/Cv';
import page404 from './pages/404';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// Check if the URL has the original path as a query parameter
const originalPath = window.location.search.substr(1);

if (originalPath) {
  history.replace('/' + originalPath);
}

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter basename={process.env.PUBLIC_URL} history={history}>
                <ScrollToTop />
                <Switch>
                    <Route
                        exact path= "/"
                        component={ Home }
                    />
                    <Route
                        exact path= "/about"
                        component={ About }
                    />
                    <Route
                        exact path= "/cv"
                        component={ Cv }
                    />
                    <Route
                        // exact path="/*"
                        component={ page404 }
                    />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;
