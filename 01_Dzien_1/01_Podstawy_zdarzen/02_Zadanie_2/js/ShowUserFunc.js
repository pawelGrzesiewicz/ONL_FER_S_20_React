import React from "react";

function ShowUserFunc(props) {
    const {name, surname} = props;

    const handleButtonClick = () => {
        console.log(`Imię: ${name}, Nazwisko: ${surname}`);
    }

    return (
        <button onClick={handleButtonClick}>Dane Użytkownika</button>
    )
}

export default ShowUserFunc