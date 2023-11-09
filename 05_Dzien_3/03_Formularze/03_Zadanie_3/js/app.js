import React from "react";
import { createRoot } from "react-dom/client";
import SelectOrType from "./SelectOrType";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<SelectOrType items={items} />);