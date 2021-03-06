import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import {Provider} from 'react-redux';
import { applyMiddleware, createStore} from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import logo from './logo.svg';
import './App.css';
import MoviesList from './movies/MoviesList';
import MovieDetail from './movies/MovieDetail';
import Toggle from './toggle/Toggle';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { load, save} from 'redux-localstorage-simple';

const middleware = [logger, thunk]
const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save())),
  );

const App = () => (
  <Provider store={store}>
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Toggle />
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
  </Provider>
  );
export default App;
