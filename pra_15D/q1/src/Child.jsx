import React from "react";

function Child(props) {

    const handleClick = () => {
        // Passing multiple arguments to parent function
        props.sendData("Rahul", 21);
    };

    return (
        <div>
            <button onClick={handleClick}>
                Click to Send Data
            </button>
        </div>
    );
}

export default Child;