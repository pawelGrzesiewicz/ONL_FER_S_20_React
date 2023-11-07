import React from "react";
import { createRoot } from "react-dom/client";
import ColorfulBoxes from './ColorfulBoxes'

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <ColorfulBoxes/>
    );
};
root.render(<App />);
