// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

// const element = <h1>Hello, Platzi Badges from react!</h1>;
const element = React.createElement('h1', {}, 'Hola! soy los children.');
const element_a = React.createElement('a', {href: 'https:platzi.com'}, 'ir a platzi.');
const container = document.getElementById('app');

// ReactDOM.render(__qué__queremos__renderizar, __dónde__queremos_renderizar);
ReactDOM.render(element, container).after(element_a, container);
