import React, {useState} from "react";

const CountThings = () => {
    const [balance, setBalance] = useState(10000);
    const [age, setAge] = useState(37)


    const addMoney = () => {
        setBalance(prevState => prevState + 1000)
    }

    const addAge = () => {
        setAge(prevState => prevState + 1);
    }


    return (
        <div>
            <p>Stan konta: {balance}</p>
            <p>Wiek: {age}</p>
            <button onClick={addMoney}>Dodaj kasę</button>
            <button onClick={addAge}>Dodaj wiek</button>
        </div>
    )
}

export default CountThings