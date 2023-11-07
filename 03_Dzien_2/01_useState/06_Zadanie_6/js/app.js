import React from "react";
import { createRoot } from "react-dom/client";
import ToDoList from "./ToDoList";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <ToDoList />
    )
}
root.render(<App />);
