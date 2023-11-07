import React from "react";
import { createRoot } from "react-dom/client";
import NumberInfo from "./NumberInfo";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <NumberInfo number={7}/>
    );
}

root.render(<App />);