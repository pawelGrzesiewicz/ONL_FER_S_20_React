import React from "react";
import { createRoot } from "react-dom/client";
import MyButton from "./MyButton";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <MyButton />
    )
}
root.render(<App />);
