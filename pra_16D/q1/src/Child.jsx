import React from "react";

function Child(props) {

    const handleClick = () => {
        // Passing arguments to parent function
        props.sendData("Pratap", "Computer Engineering");
    };

    return (
        <div>
            <button onClick={handleClick}>
                Send Data to Parent
            </button>
        </div>
    );
}

export default Child;