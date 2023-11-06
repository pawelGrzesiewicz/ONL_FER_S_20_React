import React, {Component} from "react";

export default class TextTyper extends React.Component {

    state = {
        count: 1,
    }


    handlePlus = () => {
        this.setState((prev) => {
            return {
                count: prev.count >= this.props.text.length ? prev.count : prev.count + 1
            }
        })
    }


    handleMinus = () => {
        this.setState((prev) => {
            return {
                count: prev.count <= 1 ? prev.count : prev.count - 1
            }
        })
    }

    render() {
        return (
            <>
                <h1>{this.props.text.substring(0, this.state.count)}</h1>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
            </>
        )
    }
}