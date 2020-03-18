import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './Reducers';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './Components/App';

//Her laver vi vores store der indeholder vores programs State og vores Reducers.
//Derudover bruger vi funktionen applyMiddleware der benytter Thunk, 
//Thunk modtager en action, tester om actionen indeholder en functionbody. 
//Hvis den indeholder en funktion kører den funktionen og sender resultatet videre til Dispatch som en action. 
const store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(
<Provider store = {store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, 

document.getElementById('root'));



