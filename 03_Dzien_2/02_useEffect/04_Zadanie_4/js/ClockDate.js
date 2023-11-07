import React from "react";

const ClockDate = ({date}) => {
    const dateString = date.toLocaleDateString();

    return (
        <h2>{dateString}</h2>
    )
}

export default ClockDate