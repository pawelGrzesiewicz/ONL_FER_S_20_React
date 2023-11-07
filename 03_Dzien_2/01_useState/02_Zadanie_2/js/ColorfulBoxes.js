import React, {useState} from "react";

const ColorfulBoxes = () => {
    const [boxes, setBoxes] = useState([]);



    const addBox = () => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

        setBoxes([...boxes, randomColor])

        console.log(randomColor);
        console.log(boxes);
    }

    return (
        <div>
            <ul>
                {boxes.map((box, index) => {
                    return (
                        <li key={index}>
                            <div
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    backgroundColor: box
                                }}
                            >

                            </div>
                        </li>
                    )
                })}
            </ul>
            <button onClick={addBox}>Dodaj Boxa</button>
        </div>
    )

}

export default ColorfulBoxes