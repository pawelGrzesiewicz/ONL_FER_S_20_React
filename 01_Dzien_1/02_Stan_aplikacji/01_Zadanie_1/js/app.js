import React from "react";
import { createRoot } from "react-dom/client";
import TextTyper from "./TextTyper";


const container = document.getElementById("app");
const root = createRoot(container);


const App = () => {
    return (
        <>
            <TextTyper text={'Coders Lab'}/>
        </>
    )
}


root.render(<App />);