import React from "react";
import { createRoot } from "react-dom/client";
import SecretStuff from "./SecretStuff";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return(
        <SecretStuff
            password={1234}
            correctPassword={1234}
            secret={'hasło ok'}
        />
    )
}
root.render(<App />);
