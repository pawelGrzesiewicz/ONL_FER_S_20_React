import React from "react";
import { createRoot } from "react-dom/client";
import Bulb from "./Bulb";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <Bulb />
    )
}
root.render(<App />);
