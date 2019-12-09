import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"; // Broswer router wraps the App component to provide them all the routing functionalties.
import './index.css';
import App from './App';
import  { Provider } from "react-redux"; //Components that wraps the app to provide them the access of all the Redux 
import store from "./redux/store";


ReactDOM.render(
    <Provider store ={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,document.getElementById('root'));
