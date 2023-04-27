import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from './components/input';





function App() {
  return (
    <div>
      <h1>Hola Mundo!</h1>
      <p>Este es mi primer componente de React.</p>
      <Input type="password" placeholder ="ingrese su contra"></Input>


    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

