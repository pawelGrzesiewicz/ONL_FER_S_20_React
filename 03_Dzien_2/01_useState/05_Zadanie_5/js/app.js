import React from "react";
import { createRoot } from "react-dom/client";
import Numbers from "./Numbers";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <Numbers/>
    )
}
root.render(<App />);
