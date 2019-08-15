import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Contenedor from './Componentes/Contenedor';
import  Reportes from './Componentes/Reportes';
import Loggin from "./Componentes/Loggin";
function App() {
  return (
      <div className="App">
          <BrowserRouter>

              <Switch>
                  <Route path='/' component={Contenedor} exact />
                  <Route path='/Reportes' component={Reportes} />
                  <Route path='/Login' component={Loggin} />

              </Switch>
          </BrowserRouter>
      </div>

  );
}

export default App;
