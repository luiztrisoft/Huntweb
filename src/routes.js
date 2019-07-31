import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/products';

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            
            <Route 
                exact 
                path="/" 
                component={Main}/>

            <Route 
                path="/products/:id" 
                component={Product}/>

        </Switch>
    </BrowserRouter>
);

export default Routes;

//O exact na rota Main indica que o caminho deve ser exatamente assim "/". Caso contrário ao  
//acessar /products/:id nós caíremos na página main pois ela começa com "/" também.