// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';


const name = 'Jose Lozano Tamayo';
const suma = () => 3 + 3;

// const jsx = <h1>Hola soy, {name} y esto es una suma : {suma()}</h1>; 



// const element = <h1>Hello, Platzi Badges from react!</h1>;

/*
const element = React.createElement('h1', {}, 'Hola! soy los children.');
const element_a = React.createElement('a', {href: 'https://platzi.com'}, 'ir a platzi.');
*/



const jsx = ( 
<div>
    <h1>Hola, soy Jose Lozano</h1>
    <p>Soy Ingeniero Front</p>
</div>
);

const element = React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Hola, soy Jose Lozano'),
    React.createElement('p', {}, 'Soy Ingeniero de la web')

);


const container = document.getElementById('app');

// ReactDOM.render(__qué__queremos__renderizar, __dónde__queremos_renderizar);
ReactDOM.render(element, container);


    // expresion es algo que en js se va a llamar y a interpretar.