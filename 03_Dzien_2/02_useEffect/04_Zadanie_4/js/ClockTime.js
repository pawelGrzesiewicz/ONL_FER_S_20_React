import React from "react";

const ClockTime = ({date}) => {
    const timeString = date.toLocaleTimeString();

    return (
        <h2>{timeString}</h2>
    )
}

export default ClockTime