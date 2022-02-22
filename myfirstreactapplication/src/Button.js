import {useState, useEffect} from "react";
import './Button.css'

function Button(props) {

    // const [message, setMessage] = useState("");

    const buttonClick = () => {
        //console.log('buttonClick fired!');
        //setMessage("Clicked!");
        props.onClick(props.text);
    }

    useEffect(() => {
        let t;
        if (props.message !== "") {
            // clear message after 1 sec
            t = setTimeout(() => {
                console.log("setTimeout fired!");
                //setMessage("");
            }, 1000);
        }
        return () => {
            console.log("clearTimeout fired!");
            clearTimeout(t);
        }
    }, [props.message])

    return (
        <div className="calcbutton">
            <h1>{props.message}</h1>
            <button onClick={props.onClick}
                    value={props.text}>{props.text}</button>
        </div>
    )
}

export default Button;