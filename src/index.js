import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const tempReducer = (() => {
    return {
        title: "Hello from the Redux Store!"
    }
})

const store = createStore(tempReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
