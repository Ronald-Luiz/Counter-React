import { useState, useEffect } from "react";
import './main.css';

function main() {

    const [num, setNum] = useState(0);
    const [intervalId, setIntervalId] = useState(null);


    const mais = () => {

        if (intervalId === null) {
            const id = setInterval(() => {
                setNum((num) => num + 1);
            }, 1000);
            setIntervalId(id);
        }
    }

    const menos = () => {

        const id = setInterval(() => {
            setNum((num) => num - 1);
        }, 1000);
        setIntervalId(id);
    }



    const stop = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    }

    useEffect(() => {
        if (num >= 11) {
            setNum(0)

        } else if (num === -1) {
            setNum(10)
        }
    })


    return (
        <>
            <section>
                <div className="counter">
                    <h2>{num}</h2>
                    <div className="btn">
                        <button onClick={mais}>+</button>
                        <button onClick={stop}>stop</button>
                        <button onClick={menos}>-</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default main;