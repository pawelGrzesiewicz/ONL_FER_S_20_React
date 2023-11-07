import React from 'react';

export default class Modal extends React.Component {

    state ={
        modalOpen: false
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                modalOpen: true
            })
        }, 10000)
    }

    render () {
        if(this.state.modalOpen === true) {
            return <h2>{this.props.heading}</h2>
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

}