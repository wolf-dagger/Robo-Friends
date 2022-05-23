import React from "react";

// Scroll uses children to render whats inside it.

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll',  border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;