import React, {useState, useEffect} from "react";


const Box = () => {
    const [color, setColor] = useState('cornflowerblue');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setColor('tomato');
        }, 2000);

        return () => {
            clearTimeout(timeout)
        }
    }, []);


    return (
        <div style={{
            width: '300px',
            height: '300px',
            backgroundColor: color,
        }}>

        </div>
    )
}

export default Box