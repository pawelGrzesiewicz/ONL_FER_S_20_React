import React from "react";

const Buttons = () => {

    const handleClick = () => {
        console.log('Przycisk kliknięty')
    }

    const handleClickAgain = () => {
        const A = prompt("Podaj liczbę A");
        const B = prompt("Podaj liczbę B");

        console.log("Wynik potęgowania A i B to: ", (Math.pow(Number(A), Number(B))));
    }

    const handleClickAgainAgain = () => {
        console.log(window.innerWidth, window.innerHeight);
    }

    return (
        <>
            <button onClick={handleClick} >Klik</button>
            <button onClick={handleClickAgain}>Klik</button>
            <button onClick={handleClickAgainAgain}>Klik</button>
        </>
    )
}

export default Buttons