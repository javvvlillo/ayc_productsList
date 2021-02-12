import React from 'react'
import { HomePage } from '../components/HomePage';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ProductPage } from '../components/ProductPage';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ HomePage } />
                <Route exact path="/:productId" component={ ProductPage } />

                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
