import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';


const Main = loadable(() => import('../../pages/Main'));
const Test1 = loadable(() => import('../../pages/Test1'));
const Result = loadable(() => import('../../pages/Result'));



function App() {
  return (
    <>
      <Switch>
        <Redirect exact path="/" to="/main" />
        <Route exact path="/main" component={Main} />
        <Route exact path="/test" component={Test1} />
        <Route exact path="/result/:resultmbti" component={Result} />
      </Switch>

    </>
  )
}

export default App;
