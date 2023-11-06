import React, {Component} from "react";


class ShowUserClass extends Component {
    handleButtonClick = () => {
        const {name, surname} = this.props;

        console.log(`Imię: ${name}, surname: ${surname}`)
    }

    render () {
        return (
            <button onClick={this.handleButtonClick}>Dane użytkownika</button>
        )
    }
}

export default ShowUserClass;