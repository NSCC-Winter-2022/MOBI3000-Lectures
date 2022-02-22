import './App.css';
import Button from './Button'
import {useState} from "react";

function App() {

    const [result, setResult] = useState("0");
    const [oldResult, setOldResult] = useState("");
    const [operator, setOperator] = useState("");

    function buttonClick(text) {
        switch(text) {
        case "AC":
            setResult("");
            break;
        case ".":
            if (!result.includes(".")) {
                setResult(prev => prev + text);
            }
            break;
        case "+/-":
            setResult((-parseFloat(result)).toString());
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            //console.log(`result: ${result}, oldresult: ${oldResult}, operator: ${operator}`);
            setOldResult(result);
            setResult("");
            setOperator(text);
            break;
        case "=":
            console.log(`${oldResult} ${operator} ${result}`)
            setResult(eval(`${oldResult} ${operator} ${result}`))
            setOldResult(result)
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
