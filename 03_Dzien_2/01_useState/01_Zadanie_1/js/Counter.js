import React, {useState} from "react";

const Counter = () => {
    const [counter, setCunter] = useState(10);

    const addCounter = () => {
        setCunter(prevState => prevState + 1)
    }

    const minusCounter = () => {
        setCunter(prevState => prevState - 1)
    }

    const resetCounter = () => {
        setCunter(10)
    }


    return (
        <>
            <h1>Liczba w stanie: {counter}</h1>
            <button onClick={addCounter}>+</button>
            <button onClick={minusCounter}>-</button>
            <button onClick={resetCounter}>Reset</button>
        </>
    )
}

export default Counter