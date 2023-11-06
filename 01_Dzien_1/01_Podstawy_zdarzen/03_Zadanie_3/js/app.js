import React from "react";
import { createRoot } from "react-dom/client";
import HoverEvent from "./HoverEvent";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <>
           <HoverEvent />
        </>
    )
}

root.render(<App />);


