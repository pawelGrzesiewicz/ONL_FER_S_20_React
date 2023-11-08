import React, {useState} from "react";


const Bulb = () => {

    const [state, setState] = useState('ON');

    const handleClick = () => {
        setState(prevState => prevState === 'ON' ? 'OFF' : 'ON');
    }


    return (
        <>
            <div
                style={{
                width: '100px',
                height: '100px',
                backgroundColor: state === 'ON' ? 'white' : 'yellow'
            }}></div>
            <button onClick={event => handleClick()}>{state}</button>
        </>
    )
}

export default Bulb