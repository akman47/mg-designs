import React from 'react';
import linkedIcon from '../../assets/icons/linked-in.png';
import email from '../../assets/icons/email-icon.png';

function Footer() {
    return (
        <footer className="footer">
            <a href="https://www.linkedin.com/in/melissa-kuliska-52b66217/" target="_blank"><img src={linkedIcon} alt="" /></a>
            <a href="mailto: melissa@mgdesignsllc.com"><img src={email} alt="" /></a>
        </footer>
    )
}

export default Footer;