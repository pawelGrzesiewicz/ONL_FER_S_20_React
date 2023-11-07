import React from "react";
import { createRoot } from "react-dom/client";
import UpperLower from "./UpperLower";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <UpperLower/>
    )
}
root.render(<App />);
