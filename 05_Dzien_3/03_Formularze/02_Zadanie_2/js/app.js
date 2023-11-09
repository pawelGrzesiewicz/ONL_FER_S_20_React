import React from "react";
import { createRoot } from "react-dom/client";
import Form from "./Form";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <Form />
    )
}
root.render(<App />);