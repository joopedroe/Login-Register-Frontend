import { BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';
import login from './pages/login/login';
import register from './pages/register/register';
import { Route } from 'react-router-dom';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={login} />
                <Route path="/register" component={register} />
            </Switch>
        </BrowserRouter>
    );
}
