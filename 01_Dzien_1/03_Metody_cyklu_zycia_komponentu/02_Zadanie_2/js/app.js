import React from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";

const container = document.getElementById("app");
const root = createRoot(container);

const App =() => {
    return (
        <>
            <HelloWorld />
        </>
    )
}
root.render(<App />);
