import './App.css';
import Button from './Button'
import {useState} from "react";

function App() {

    const [result, setResult] = useState("0");

    function buttonClick(text) {
        switch(text) {
        case "AC":
            setResult("");
            break;
        default:
            setResult(prev => prev + text);
        }
    }

  return (
    <div className="App">
      <h1>{result}</h1>
      <Button text="AC" onClick={buttonClick} />
      <Button text="+/-" onClick={buttonClick} />
      <Button text="%" onClick={buttonClick} />
      <Button text="*" onClick={buttonClick} />
      <Button text="7" onClick={buttonClick} />
      <Button text="8" onClick={buttonClick} />
      <Button text="9" onClick={buttonClick} />
      <Button text="/" onClick={buttonClick} />
      <Button text="4" onClick={buttonClick} />
      <Button text="5" onClick={buttonClick} />
      <Button text="6" onClick={buttonClick} />
      <Button text="-" onClick={buttonClick} />
      <Button text="1" onClick={buttonClick} />
      <Button text="2" onClick={buttonClick} />
      <Button text="3" onClick={buttonClick} />
      <Button text="+" onClick={buttonClick} />
      <Button text="." onClick={buttonClick} />
      <Button text="0" onClick={buttonClick} />
      <Button text="=" onClick={buttonClick} />
    </div>
  );
}

export default App;
