import React, {useState} from "react";

const Box = () => {
    const [width, setWidth] =useState('500');
    const [height, setHeight] = useState('200');
    const [color, setColor] = useState('green');

    const handleBoxHange = (width, height, color) => {
        setWidth(width);
        setHeight(height);
        setColor(color);
    }


    return (
        <>
            <div
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    backgroundColor: color,
                }}></div>
            <button onClick={event => handleBoxHange('200', '300', 'orange')}>one</button>
            <button onClick={event => handleBoxHange('100', '700', 'blue')}>two</button>
            <button onClick={event => handleBoxHange('500', '200', 'green')}>tree</button>
        </>
    )

}

export default Box;