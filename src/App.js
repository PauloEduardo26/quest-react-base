import Paragraph from './components/paragraph/paragraph';
import './App.css';
import Button from './components/button/button';

function App() {
  return (
    <div>
      <h1>Quest React Base</h1>

      <h2>Parte 01</h2>
      <Paragraph text="Este é o texto renderizado pelo componente " color="green"/>

      <h2>Parte 02</h2>
      <Button label="Baixar CV"/>
    </div>
  );
}

export default App;
