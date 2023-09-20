import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
// import NotFound from './NotFound/NotFound';
import HomeComponent from './Home/Home';

const Routes = () => {
    return (
        <>

            <Switch>
                <Route path="/" component={HomeComponent} />
                {/* <Route path="/notfound" component={NotFound} /> */}
                <Redirect from="**" to="notfound" />
            </Switch>

        </>
    );
};

export default Routes;
