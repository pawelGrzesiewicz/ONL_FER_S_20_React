import React from "react";
import { createRoot } from "react-dom/client";
import Stopwatch from "./Stopwatch";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <Stopwatch />
    )
}
root.render(<App />);
