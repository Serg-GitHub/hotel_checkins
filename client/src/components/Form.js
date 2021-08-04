import React, {useEffect, useState} from "react";

const Form = function() {

    const [guestName, setGuestName] = useState("");
    const [guestEmail, setGuestEmail] =useState("");

    const handleNameChange = (event) => {
        setGuestName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setGuestEmail(event.target.value);
    }

    const handleSubmission = (event) => {
        event.preventDefault();
        const payload = {guestName, guestEmail}
        submitData(payload)
        resetForm();
    }

    return(
        <>
        <p>Form</p>
        <form>
            <label>Name:</label>
            <input onChange={handleNameChange} type="text" name="name" required></input>
            <label>Email:</label>
            <input onChange={handleEmailChange} type="email" name="email" required></input>
            <button onClick={handleSubmission}>Add</button>
        </form>
        </>
    )
}

export default Form;