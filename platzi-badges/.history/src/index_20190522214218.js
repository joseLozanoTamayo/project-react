/*import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(<App />, container);*/

import React from "react";
import ReactDOM from "react-dom";

const element = (
    <div>
        <h1>Hola, Soy Jose Lozano</h1>
        <p>Soy Ingeniero FrontEnd</p>
    </div>
);


const container = document.getElementById('app');
ReactDOM.render(element, container);