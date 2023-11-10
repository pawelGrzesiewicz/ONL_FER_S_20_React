import React, {Component} from "react";
import ReactDOM from "react-dom";
import CarManager from './CarsManager'

const App = () => {
    return <CarManager />
}

ReactDOM.render(<App/>, document.getElementById("app"));