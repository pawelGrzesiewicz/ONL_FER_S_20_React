import React from "react";

const NumberInfo  = ({number}) => {


    const isEven = number % 2 === 0;
    const isPrime = isPrimeNumber(number)
    const isSquare = isPerfectSquare(number)

    return (
        <div>
            <h2>{number}</h2>
            <p>{isEven ? "Parzysta" : "Nieparzysta"}</p>
            {isPrime && <p>Liczba pierwsza</p>}
            {isSquare && <p>Potęga liczby 2</p>}
        </div>
    )
    function isPrimeNumber(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 === 0 || num % 3 === 0) return false;

        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }

        return true;
    }

    function isPerfectSquare(num) {
        const sqrt = Math.sqrt(num);
        return Number.isInteger(sqrt);
    }

}

export default NumberInfo