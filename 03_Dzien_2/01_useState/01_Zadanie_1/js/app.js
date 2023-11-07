import React from "react";
import { createRoot } from "react-dom/client";
import Counter from "./Counter";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <Counter/>
    );
};

root.render(<App />);