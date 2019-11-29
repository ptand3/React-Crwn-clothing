import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"; // Broswer router wraps the App component to provide them all the routing functionalties.
import './index.css';
import App from './App';


ReactDOM.render(
    <BrowserRouter> 
        <App />
    </BrowserRouter>
    , document.getElementById('root'));
