import React from "react";
import { createRoot } from "react-dom/client";
import { Outlet, Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from "./Blog";
import Home from "./Home";
import Pricing from "./Pricing";


const container = document.getElementById("app");
const root = createRoot(container);


const App = () => {

    const Navigation = () => (
        <div>
            <h1>Aplikacja React z React Router</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Strona główna</Link>
                    </li>
                    <li>
                        <Link to={"/blog"}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/pricing">Cennik</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );

    return (
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/pricing" element={<Pricing/>}/>
            </Routes>
            <Outlet/>
        </Router>
    )
}

root.render(<App />);