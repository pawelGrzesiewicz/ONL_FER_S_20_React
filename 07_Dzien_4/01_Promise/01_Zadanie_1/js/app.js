import React from "react";
import { createRoot } from "react-dom/client";
import Names from "./Names";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Names />);
