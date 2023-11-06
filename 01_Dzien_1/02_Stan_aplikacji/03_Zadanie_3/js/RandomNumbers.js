import React, {Component} from "react";


export default class RandomNumbers extends Component {

    state = {
        numbers: [],
    }


    generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 900) + 100;

        console.log(randomNumber)
        console.log("stanTablicy", this.state.numbers)

        this.setState((prevState) => ({
            numbers: [...prevState.numbers, randomNumber]
        } ))
    }

    render() {
        return(
            <div>
                <ul>
                    {this.state.numbers.map((number, index) => (
                        <li key={index}>{number}</li>
                    ))}
                </ul>
                <button onClick={this.generateRandomNumber}>Dodaj liczbę</button>
            </div>
        )
    }

}