import React from "react";
import { createRoot } from "react-dom/client";
import Clock from "./Clock";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <Clock />
    )
}
root.render(<App />);
