import './Cube.css'
import {useEffect, useState} from "react";

export default function Cube() {
    const [image, setImage] = useState(0);
    const images = [
        'images/dice1.png',
        'images/dice2.png',
        'images/dice3.png',
        'images/dice4.png',
        'images/dice5.png',
        'images/dice6.png',
    ]

    useEffect(() => {
        console.log(image)
    }, [image]);
    function dice() {
        let random = Math.floor(Math.random() * 6);
        setImage(random)
    }

    return (
        <div className="container">
            <img className="cube-image" src={images[image]} alt=""/>
            <div>
                <button className="cube-button" onClick={() => dice()}>Dice</button>
            </div>
        </div>
    )
}