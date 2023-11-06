import React from "react";
import { createRoot } from "react-dom/client";
import RandomNumbers from "./RandomNumbers";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <>
            <RandomNumbers/>
        </>
    )
}

root.render(<App />);
