import React from "react";
import { createRoot } from "react-dom/client";
import CurrentDate from "./CurrentDate";

const container = document.getElementById("app");
const root = createRoot(container);


const App = () => {
    return (
        <>
            <CurrentDate/>
        </>
    )
}

root.render(<App />);
