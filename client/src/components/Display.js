import React, {useState} from "react";

import Element from "./Element";

const Display = function({guests}) {

    const guestList = guests.map(guest => {
        return <Element guest={guest} />
    })

    return(
        <>  
            <ul>{guestList}</ul>
        </>
    )
}

export default Display;