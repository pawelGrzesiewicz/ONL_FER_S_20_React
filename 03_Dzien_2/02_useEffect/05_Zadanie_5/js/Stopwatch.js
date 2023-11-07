import React, {useEffect, useState} from "react";

const Stopwatch = () => {

    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);
    const [isRunning, setIsRunning] = useState(false);


    useEffect( () => {

        let interval;

        if(isRunning) {
            interval = setInterval(() => {
                setTime(prevState => prevState + 1)
            }, 1000)
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval)
        }
    }, )


    const startStop = () => {
        setIsRunning(!isRunning);

        console.log("start stop", isRunning);
    }

    const reset = () => {
        setIsRunning(false);
        setTime(0);
        setLaps([])
    }

    const lap = () => {
        setLaps(prevState => [...prevState, time])
    }


    return (
        <>
            <h1>Time: {time}</h1>
            <button onClick={startStop}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={lap}>Lap</button>
            <button onClick={reset}>Reset</button>
            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>Lap {index +1 }: {lap}s</li>
                ))}
            </ul>
        </>
    )
}


export default Stopwatch