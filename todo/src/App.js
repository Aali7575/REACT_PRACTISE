import logo from './logo.svg';
import './App.css';
import Start from './components/hello'; 
import Todos from './components/todos';

function App() {
  return (
    <div className="App">
      <Start/>
      <Todos/>

    </div>
    
  );
}

export default App;
