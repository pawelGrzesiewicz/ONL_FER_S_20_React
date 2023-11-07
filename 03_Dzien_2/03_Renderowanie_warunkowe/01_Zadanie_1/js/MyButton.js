import React, {useState} from "react";

function MyButton () {
    const [isOn, setIsOn] = useState(false);

    const turnOn = () => {
       setIsOn(prevState => !prevState);
       console.log(isOn)
    }

    return (
        <>
            <button onClick={turnOn}>
                {isOn ? 'Nie' : 'Tak'}
            </button>
        </>
    )
}

export default MyButton