import React from "react";

class Tester extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 1,
        }

        console.log('Na początek constructor')
    }

    componentDidMount() {
        console.log("Zamontowałem się pierwszy raz");

        this.int = setInterval( () => {
            this.setState((prev) => ({counter: prev.counter + 1}))
        }, 1000);

    }

    render() {
        console.log('Komponent jest renderowany')

        return <h1>Wartość stanu: {this.state.counter}</h1>
    }

    componentDidUpdate() {
        console.log("Komponent zaktualizowany")
    }

    componentWillUnmount() {
        console.log('Odmontowany')
        clearInterval(this.int)
    }

}


export default class LifeCyclesTester extends React.Component {
    state = {
        showTester: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState( {
                showTester: false
            })
        }, 10000)
    }

    render() {
        return this.state.showTester ? <Tester/> : null
    }
}