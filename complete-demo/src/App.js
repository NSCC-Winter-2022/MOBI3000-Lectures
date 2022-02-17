import {useState, useEffect} from "react";
import './App.css';

function App(props) {

    const [count, setCount] = useState(0);
    const [time, setTime] = useState(new Date());

    const buttonClick = () => {
        setCount(prev => prev + props.countBy);
    }

    // runs after every render
    useEffect(() => {
        const h1 = document.getElementsByTagName('h1');
        for (const h of h1) {
            h.style.backgroundColor = 'green'
        }
        for (var i = 0; i < h1.length; i++) {
            h1[i].style.backgroundColor = 'green';
        }
    })

    // runs when count changes
    useEffect(() => {
        const h1 = document.getElementsByTagName('h1');
        for (const h of h1) {
            h.style.fontSize = `${count}px`
        }
    }, [count]);

    // runs just when the component is started
    useEffect(() => {
        const t = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return () => clearInterval(t);
    }, [])

  return (
      <div className='App'>
        <strong>{time.toLocaleTimeString()}</strong>
        <h1 id='count'>{count}</h1>
        <button onClick={buttonClick} style={{fontSize: props.fontSize}}>Add</button>
      </div>
  );
}

export default App;
