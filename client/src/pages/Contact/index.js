import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({name:'', email:'', message:''});
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            }
            else {
                setErrorMessage('');
            }
        }
        else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            }
            else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);

    }

    return (
        <section id="contact">
            <form id="contact-form" onSubmit={handleSubmit}>
                <h4>Leave a message</h4>
                    <input type="text" name="name" placeholder="Name" className="form-input" defaultValue={name} onBlur={handleChange} />
                    <input type="text" name="email" placeholder="Email" className="form-input" defaultValue={email} onBlur={handleChange} />
                    <textarea name="message" rows="5" placeholder="Message" className="form-input" defaultValue={message} onBlur={handleChange} />
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className="btn" type="submit">Submit</button>
            </form>
            <br></br>
            <br></br>
            <div className="contact-info">
                <h4>Contact Information</h4>
                <div>
                    Phone: <a href="tel:+17132690311">(713) 269-0311</a><br />
                    Email: <a href="mailto:melissa@mgdesingsllc.com">melissa@mgdesignsllc.com</a><br />
                    Address: 821 Aurora, Houston, TX 77009
                </div>
            </div>  
        </section>
    );
}

export default Contact;