import React from 'react';
import Routes from './routes';

import "./styles.css"

import Header from "./components/Header";
import Main from "./pages/main";

const App = () => (
    <div className="App">
      <Header/>
      <Routes />
    </div>  
);

export default App;

//O App foi minificado para se tornar um stateless component
//Trocamos o <Main/> pela rota <Routes/> que contem toda a configuração de rotas incluindo a Main