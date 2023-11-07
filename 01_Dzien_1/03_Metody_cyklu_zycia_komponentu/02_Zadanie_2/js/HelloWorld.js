import React from "react";

export default class HelloWorld extends React.Component {

    state = {
        text: 'Hello World',
    };

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                text: 'Hi, Everyone',
            })
        }, 5000)
    }

    render () {
        return <h1>{this.state.text}</h1>
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }


}