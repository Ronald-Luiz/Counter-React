import { useState, useEffect } from "react";
import './main.css';

function main() {

    const [num, setNum] = useState(0);
    const [intervalId, setIntervalId] = useState(null);


    const mais = () => {
        clearInterval(intervalId);
        setIntervalId(null);

        if (intervalId === null) {
            const id = setInterval(() => {
                setNum((num) => num + 1);
            }, 1000);
            setIntervalId(id);
        }
    }

    const menos = () => {
        clearInterval(intervalId);
        setIntervalId(null);

        const id = setInterval(() => {
            setNum((num) => num - 1);
        }, 1000);
        setIntervalId(id);
    }



    const stop = () => {
        setNum(0);
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
                        <button onClick={stop}>clear</button>
                        <button onClick={menos}>-</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default main;