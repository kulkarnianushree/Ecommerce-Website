import './Contact.css';
import React, { useState } from 'react';

const Contact = (props) => {
    const [initialData, setInitialData] = useState({
        name: '',
        email: '',
        number: ''
    });

    const NameChangeHandler = (event) => {
        setInitialData((prevData) => ({
            ...prevData,
            name: event.target.value
        }));
    };

    const EmailChangeHandler = (event) => {
        setInitialData((prevData) => ({
            ...prevData,
            email: event.target.value
        }));
    };

    const NumberChangeHandler = (event) => {
        setInitialData((prevData) => ({
            ...prevData,
            number: event.target.value
        }));
    };

    const FormSubmitHandler = (event) => {
        event.preventDefault();
        props.ondata(initialData);
        setInitialData({
            name:'',
            email:'',
            number:''
        })
    };

    return (
        <div className="contact-container">
            <p className="contact-message">Do you have any queries? Please contact us here:</p>
            <form className="contact-form" onSubmit={FormSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        onChange={NameChangeHandler}
                        value={initialData.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-Mail Id:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        onChange={EmailChangeHandler}
                        value={initialData.email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phno">Phone.No:</label>
                    <input
                        type="number"
                        id="phno"
                        className="form-control"
                        onChange={NumberChangeHandler}
                        value={initialData.number}
                    />
                </div>
                <button type="submit" className="submit-button">Add</button>
            </form>
        </div>
    );
};

export default Contact;
