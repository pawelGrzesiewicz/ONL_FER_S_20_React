import React from "react"

function EventsTest () {

    const handleButtonEnter = () => {
         console.log("Najechano na przycisk!");
    }

    const handleButtonClick = () => {
        console.log("Kliknięto na przycisk!");
    }

    const handleButtonLeave = () => {
        console.log("Zjechanie z przycisku!");
    }

    return (
        <div
            onMouseEnter={handleButtonEnter}
            onClick={handleButtonClick}
            onMouseLeave={handleButtonLeave}
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "red",
            }}
        ></div>
    )
}

export default EventsTest