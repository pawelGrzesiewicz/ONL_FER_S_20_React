import React from "react";
import { createRoot } from "react-dom/client";
import Pokemons from "./Pokemons";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Pokemons />);
