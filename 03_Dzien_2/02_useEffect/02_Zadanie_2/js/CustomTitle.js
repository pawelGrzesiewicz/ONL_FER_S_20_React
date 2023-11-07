import React, {useState, useEffect} from "react";

const CustomTitle = () => {
    const [clicks, setClicks] = useState(1)


    useEffect(() => {
        document.title = `Kliknięto ${clicks} - razy`
    },[clicks]);


    const addClicks = () => {
        setClicks(prevState => prevState + 1);
    }

    return (
        <>
            <p
                onClick={addClicks}
                style={{
                    fontSize: `${clicks * 1.2}rem`
                }}
            >
                Liczba kliknięć: {clicks}
            </p>
        </>
    )


}


export default CustomTitle