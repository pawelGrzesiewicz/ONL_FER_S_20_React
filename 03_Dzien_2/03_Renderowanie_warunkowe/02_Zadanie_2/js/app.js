import React from "react";
import { createRoot } from "react-dom/client";
import NumberRandomInfo from "./NumberRandomInfo";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <NumberRandomInfo />
    )
}
root.render(<App />);
