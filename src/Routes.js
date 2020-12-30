import React from 'react';
import {Switch , Route} from 'react-router-dom';
import Clients from './components/clients';
import AddClient from './components/clients/AddClient'
import EditClient from './components/clients/EditClient';


 const Routes = () => (
    <Switch>
        <Route exact path='/' component={Clients}/>
        <Route exact path='/clients' component={Clients}/>
        <Route exact path='/add' component={AddClient}/>
        <Route exact path='/clients/:id/edit' component={EditClient}/>


    </Switch>
 )

export default Routes ;