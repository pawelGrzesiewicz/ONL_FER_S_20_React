import React, {useState} from "react";


const UpperLower = () => {
    const [text, setText] =useState('Jakis tekst')


    const toUpper = () => {
        setText(text.toUpperCase())
    }

    const toLower = () => {
        setText(text.toLowerCase())
    }

    return (
        <>
            <h2>{text}</h2>
            <button onClick={toUpper}>Upper</button>
            <button onClick={toLower}>Lower</button>
        </>
    )
}

export default UpperLower