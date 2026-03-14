import React from "react";

function Child(props) {

    return (
        <div>
            <button onClick={props.updateCounter}>
                Increase Counter
            </button>
        </div>
    );
}

export default Child;