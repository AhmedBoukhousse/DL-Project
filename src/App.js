import React from 'react';
import './App.css';
import {createBrowserHistory} from "history";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Upload from './components/HeroSection/upload';

//import SigninPage from './pages/signin';
const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
  });

function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/upload' component={Upload} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
