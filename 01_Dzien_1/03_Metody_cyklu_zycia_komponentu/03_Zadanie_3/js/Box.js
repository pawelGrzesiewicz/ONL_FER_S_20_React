import React from "react";


export default class Box extends React.Component {

    state ={
        color: 'green',
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(prevState => ({
                color: prevState.color === 'green' ? 'red' : 'green',
            }))
        }, 5000)
    }

    render () {
        return <div style={{
            width: "100px",
            height: "100px",
            backgroundColor: this.state.color,
        }}>
        </div>
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

}