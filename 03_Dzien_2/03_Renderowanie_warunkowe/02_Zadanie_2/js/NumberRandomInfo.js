import React, {useState, useEffect} from "react";

const NumberRandomInfo = () => {
    const [numberRandom, setNumberRandom] = useState(false);


    useEffect(()=> {

        const interval = setInterval( () => {
            const random = Math.ceil(Math.random() * 5);

            setNumberRandom(random)
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <h2>Wylosowania liczba: {numberRandom}</h2>
            <p>{numberRandom >=3 ? 'Większa lub równa 3' : "Mniejsza od 3"}</p>
        </div>
    )
}

export default NumberRandomInfo