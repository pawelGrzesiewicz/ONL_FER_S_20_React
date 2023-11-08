import React, {useState} from "react";
import ButtonToClick from "./ButtonToClick";

const ButtonCounter = () => {

    const [likes, setLimes] = useState(0);

    return (
        <>
            <h1>{likes}</h1>
            <ButtonToClick onLike={setLimes}/>
            <ButtonToClick onLike={setLimes}/>
            <ButtonToClick onLike={setLimes}/>
            <ButtonToClick onLike={setLimes}/>
            <ButtonToClick onLike={setLimes}/>
        </>
    )
}

export default ButtonCounter;