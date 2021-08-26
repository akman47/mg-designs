import React from 'react';
import linkedIcon from '../../assets/icons/linked-in.png';
import email from '../../assets/icons/email-icon.png';
import phone from '../../assets/icons/phone.jpg';

function Footer() {
    return (
        <footer className="footer">
            <a href="https://www.linkedin.com/in/melissa-kuliska-52b66217/" target="_blank"><img src={linkedIcon} alt="" /></a>
            <a href="mailto: melissa@mgdesignsllc.com"><img src={email} alt="" /></a>
            <a href="tel:+17132690311"><img src={phone} alt="" /></a>
        </footer>
    )
}

export default Footer;