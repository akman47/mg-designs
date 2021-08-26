import React, { useState, useEffect } from 'react';
import { validateEmail } from '../../utils/helpers';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_MESSAGE } from '../../utils/mutations';
import { GET_ALL_MESSAGES } from '../../utils/queries';
import Axios from 'axios';
// import sendEmail from '../../../../server/utils/emailjs';
  
function Contact() {
    const [formState, setFormState] = useState({name:'', email:'', messageBody:''});
    const {name, email, messageBody} = formState;
    const [errorMessage, setErrorMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const [addMessage, { error }] = useMutation(ADD_MESSAGE);
    const { data } = useQuery(GET_ALL_MESSAGES);
    const list = data?.getMessages;
    console.log("messages", list);

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
            const { name, value } = e.target;
            setFormState({
                ...formState, 
                [name]: value 
            });
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await addMessage({
                variables: { ...formState }
            });

            if (!error) {
                setSubmitted(true);
            }

            sendEmail(formState);

        } catch (e) {
            console.error(e);
        }

        console.log('fromState submit', formState);
        setFormState({
            name: "",
            email: "",
            messageBody: "",
        });
        console.log('formState clear', formState);
    }

    function sendEmail(messageInfo) {
        Axios.post("http://localhost:3001/mail", messageInfo)
            .then(response => {
                if (response.data.message === 'Email sent') {
                    alert('Email was sent');
                } else {
                    alert("Oops, something went wrong. Please try again");
                }
            });
    }

    return (
        <section id="contact">
            <form id="contact-form" onSubmit={handleSubmit}>
                <h4>Leave a message</h4>
                    <input type="text" name="name" placeholder="Name" className="form-input" defaultValue={formState.name} onBlur={handleChange} />
                    <input type="text" name="email" placeholder="Email" className="form-input" defaultValue={formState.email} onBlur={handleChange} />
                    <textarea name="messageBody" rows="5" placeholder="Message" className="form-input" defaultValue={formState.messageBody} onBlur={handleChange} />
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className="btn" type="submit">Submit</button>
                {error && <div>Something went wrong... please try again</div>}
                {submitted && <div>Message successfully sent!</div>}
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