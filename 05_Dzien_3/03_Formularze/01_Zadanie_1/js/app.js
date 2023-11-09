import React from "react";
import { createRoot } from "react-dom/client";
import Hello from "./Hello";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <Hello />
    )
}
root.render(<App />);