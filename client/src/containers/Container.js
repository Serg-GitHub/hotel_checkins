import React, {useEffect, useState} from "react";
import Form from "../components/Form"
import Display from "../components/Display"

const Container = function() {

    const [guests, setGuests] = useState([])

    useEffect(() => {
        fetchGuests()
    }, [])

    const fetchGuests = () => {
        fetch("http://localhost:5000/api/bookings")
        .then(response => response.json())
        .then(data => setGuests(data));
    }

    const submitData = (newGuest) => {

        fetch("http://localhost:5000/api/bookings", {
            method: "POST",
            body: JSON.stringify(newGuest),
            headers: { "Content-Type": "application/json"}
        })
        .then(() => fetchGuests())
    }

    return(
        <>
            <Form submitData={submitData}/>
            <Display guests={guests} />
        </>
    )
}

export default Container;