import React from "react";
import { createRoot } from "react-dom/client";
import AccountData from "./AccountData";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <AccountData />
    )
}
root.render(<App />);
