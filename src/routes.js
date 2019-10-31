
import { Route, Redirect, Switch } from 'react-router-dom'
import React from 'react';
import Login from './components/login/login';
import Employee from './components/employee/employee';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import App from './App';

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/login',
        component: Login
    }
];

const reactRouter = () => {
    return (
        <Switch>
            {
                routes.map((route) => (
                    <Route key={route.path} path={route.path} component={route.component} exact />
                ))
            }
            <Route path="/home"  render={({ match: { url } }) => (
                <>
                <Header />
                    <Route path={`${url}/`} component={App} />
                    <Route path={`${url}/employee`} component={Employee} />
                <Footer/>
                </>
            )}
  />
            <Redirect  to="/" /> 
        </Switch>
    );
}

export default reactRouter;