import React, {useEffect, useState} from "react";
import ClockTime from "./ClockTime";
import ClockDate from "./ClockDate";

const Clock = () => {
    const[currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval( () => {
            setCurrentDate(new Date())
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    },[currentDate])

    return (
        <div>
            <ClockDate date={currentDate}/>
            <ClockTime date={currentDate}/>
        </div>
    )
}
export default Clock