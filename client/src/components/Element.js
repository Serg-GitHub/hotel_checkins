import React from "react";

const Element = function({guest}) {

    return(
        <>
            <li>
                <h3>{guest.name}</h3>
                <p>{guest.email}</p>
                <p>Check-In Status: {guest.checked_in}</p>
                <button>Remove</button>
            </li>
        </>
    )
}

export default Element;