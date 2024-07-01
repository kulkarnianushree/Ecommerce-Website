import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <p className="contact-message">Do you have any queries? Please contact us here:</p>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-Mail Id:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phno">Phone.No:</label>
                    <input
                        type="number"
                        id="phno"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="submit-button">Add</button>
            </form>
        </div>
    );
}

export default Contact;
