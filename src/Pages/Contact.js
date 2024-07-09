import Contact from "../components/Contact/Contact"

const ContactPage = () =>{
    const DataTransferHandler = async (userdetails) => {
        try {
            const response = await fetch('https://ecommerce-website-82ea9-default-rtdb.firebaseio.com/details.json', {
                method: 'POST',
                body: JSON.stringify(userdetails),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to send request.');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return(
        <Contact ondata={DataTransferHandler}/>
    )
}
export default ContactPage