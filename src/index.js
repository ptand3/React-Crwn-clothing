import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"; // Broswer router wraps the App component to provide them all the routing functionalties.
import { Provider } from "react-redux"; //Components that wraps the app to provide them the access of all the Redux 
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor} from "./redux/store";
import './index.css';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
