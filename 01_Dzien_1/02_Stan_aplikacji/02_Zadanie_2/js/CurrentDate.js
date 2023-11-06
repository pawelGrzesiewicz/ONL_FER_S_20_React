import React, {Component} from "react"


export default class CurrentDate extends React.Component {


    getCurrentDate = () => {
        const date = new Date();
        return (date.toLocaleString())

    }
    state = {
        currentDate: this.getCurrentDate()
    }



    updateDate = () => {
        this.setState({
            currentDate: this.getCurrentDate()
        })
    }


    render() {
        return (
            <div>
                <p>{this.state.currentDate}</p>
                <button onClick={this.updateDate}>Zaktualizuj datę</button>
            </div>
        )
    }


}