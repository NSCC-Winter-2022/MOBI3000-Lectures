import {useState} from "react";
import './App.css';

function App() {

    const [count, setCount] = useState(0);

    const buttonClick = () => {
        setCount(prev => prev + 1);
    }

  return (
      <div className='App'>
        <h1 id='count'>{count}</h1>
        <button onClick={buttonClick}>Add</button>
      </div>
  );
}

export default App;
