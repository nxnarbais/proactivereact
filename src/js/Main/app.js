import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import MainReducer from './reducers'
import Navbar from './components/Navbar';
import App from './components/App';
import About from './components/About';
import Footer from './components/Footer';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

const history = createHistory();
const routerHistoryMiddleware = routerMiddleware(history);

const loggerMiddleware = createLogger();

let store = createStore(
    MainReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        routerHistoryMiddleware
    )
);

ReactDOM.render(
    <Provider store={store} >
        <ConnectedRouter history={history}>
            <div>
                <Route path="/" component={Navbar}/>
                <Route exact path="/" component={App}/>
                <Route path="/about" component={About}/>
                <Route path="/" component={Footer}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('react')
);
