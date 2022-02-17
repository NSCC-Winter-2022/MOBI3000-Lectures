import {useState, useEffect} from "react";
import './Button.css'

function Button(props) {

    const [message, setMessage] = useState("");

    const buttonClick = () => {
        console.log('buttonClick fired!');
        setMessage("Clicked!");
        props.onClick(props.text);
    }

    useEffect(() => {
        let t;
        if (message !== "") {
            // clear message after 1 sec
            t = setTimeout(() => {
                console.log("setTimeout fired!");
                setMessage("");
            }, 1000);
        }
        return () => {
            console.log("clearTimeout fired!");
            clearTimeout(t);
        }
    }, [message])

    return (
        <div className="calcbutton">
            <h1>{message}</h1>
            <button onClick={buttonClick}>{props.text}</button>
        </div>
    )
}

export default Button;