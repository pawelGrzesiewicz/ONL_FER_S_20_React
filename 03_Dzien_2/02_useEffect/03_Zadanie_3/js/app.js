import React from "react";
import { createRoot } from "react-dom/client";
import UserInfo from "./UserInfo";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <UserInfo />
    )
}
root.render(<App />);
