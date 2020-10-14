import React from 'react';
// App é um componente que no react é uma função que retorna HTML ou JSX
// Todo componente em react será uma função que retorna conteúdo HTML/JSX
// Em react ao invés de usar "class" normalmente para JS, é usado "className"
// "interface" define um formato, um tipo do objeto

interface TitleProps {
  text: string;
}

function Title(props: TitleProps) {
  return (
  <h1>{props.text} </h1>
  )
} 

function App() {
  return (
    <div className="App">
      <Title text="Titulo 1" />
      <Title text="Titulo 2" />
      <Title text="Titulo 3" />
      <Title text="Titulo 4" />
    </div>
  );
}

export default App;
