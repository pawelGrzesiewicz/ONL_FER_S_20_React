import React, {useState} from "react";
import buttons from "../../../../01_Dzien_1/01_Podstawy_zdarzen/01_Zadanie_1/js/Buttons";

const Numbers = () => {
    const allNumbers = [54,76,24,63,4,54,82,36,13,80,10,69,4,23,40]
    const[numbers, setNumbers] = useState(allNumbers)


    const showEven = () => {
        const eventNumbers = allNumbers.filter(number => number % 2 === 0);
        setNumbers(eventNumbers)
    }

    const showOdd = () => {
        const oddNumbers = allNumbers.filter(number => number % 2 !== 0);
        setNumbers(oddNumbers)
    }

    const showAll = () => {
        setNumbers(allNumbers)
    }


    return (
        <>
            <button onClick={showEven}>Pokaż tylko parzyste</button>
            <button onClick={showAll}>Pokaż wszystkie</button>
            <button onClick={showOdd}>Pokaż nieparzyste</button>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </>
    )
}
export default Numbers