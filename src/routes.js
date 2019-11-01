
import { Route, Redirect, Switch } from 'react-router-dom'
import React from 'react';
import User from './components/user/user';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import App from './App';

const reactRouter = () => {
    return (
        <Switch>
            <Route path="/"  render={({ match: { url } }) => (
                <>
                <Header />
                    <Route path={`${url}/`} component={App} />
                <Footer/>
                </>
            )}
  />
            <Redirect  to="/" /> 
        </Switch>
    );
}

export default reactRouter;