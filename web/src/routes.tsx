import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './screens/Landing';
import OrphanagesMap from './screens/OrphanagesMap';
import Orphanage from './screens/Orphanage';
import CreateOrphanage from './screens/CreateOrphanage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>  {/* Switch faz chamar uma única rota seja exibida em tela */}
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />

                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;