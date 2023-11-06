// import React from "react";
//
// function HoverEvent() {
//
//     const handleButtonClick = () => {
//         console.log("Najechano na przycisk!");
//     }
//
//     return (
//         <button onMouseEnter={handleButtonClick}>button</button>
//     )
// }
//
// export default HoverEvent


import React, {Component} from "react";

class HoverEvent extends Component {
    handleButtonClick = () => {

        console.log("Najechano na przycisk!")
    }

    render () {
        return (
            <button onMouseEnter={this.handleButtonClick}>button</button>
        )
    }
}

export default HoverEvent;