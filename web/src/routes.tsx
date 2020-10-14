import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './screens/Landing';
import OrphanagesMap from './screens/OrphanagesMap';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Landing} />
            <Route path="/app" component={OrphanagesMap} />
        </BrowserRouter>
    )
}

export default Routes;