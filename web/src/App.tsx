import React from 'react';
// App é um componente que no react é uma função que retorna HTML ou JSX
// Todo componente em react será uma função que retorna conteúdo HTML/JSX
// Em react ao invés de usar "class" normalmente para JS, é usado "className"
// "interface" define um formato, um tipo do objeto
import './styles/global.css';

import Routes from './routes';

function App() {
  return (

    <Routes />
    
  );
}

export default App;
