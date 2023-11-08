import React, {useState} from "react";

const CrazyDiv = () => {

    const [position, setPosition] = useState({left: 0, top: 0});


    const handleChangePosition = (min, max) => {
        const newLeft = Math.random() * (max - min) + min;
        const newTop = Math.random() * (max - min) + min;
        setPosition({left: newLeft, top: newTop})
    }

    return (
        <div
            style={{
                position: "absolute",
                left: position.left + 'px',
                top: position.top + 'px',
                width: '100px',
                height: '100px',
                backgroundColor: 'red',
            }}
            onMouseEnter={() => handleChangePosition(0, 1000)}

        ></div>
    )

}

export default CrazyDiv